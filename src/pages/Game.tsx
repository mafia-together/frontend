import * as StompJs from '@stomp/stompjs';
import { EventListener, EventSourcePolyfill } from 'event-source-polyfill';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { getChats, getGamesInfo, getMyJob } from '../axios/http';
import { CODE } from '../constant/localStroge';
import { gameRound, myJobState, roomInfoState } from '../recoil/roominfo/atom';
import { BORKER_URL, CHAT_PUB, CHAT_SUB, JOB_SKILL_PUB, JOB_SKILL_SUB } from '../socket/url';
import { EVENTSOURCE_URL } from '../sse/url';
import { ChatArray, ChatResponse, GameStatus, SkillResponse, WaitingRoomInfo } from '../type';
import Day from './Day';
import Night from './Night';
import Result from './Result';
import WaitingRoom from './WaitingRoom';

export default function Game() {
  const auth = localStorage.getItem('auth');
  const [chats, setChats] = useState<ChatArray>([]);
  const socketClientState = useRef<StompJs.Client | null>(null);

  const [chatSubscribeId, setChatSubscribeId] = useState<StompJs.StompSubscription | null>(null);
  const [skillSubscribeId, setSkillSubscribeId] = useState<StompJs.StompSubscription | null>(null);
  const [mafiaSkillPlayer, setMafiaSkillPlayer] = useState<string | null>(null);
  const [waitingRoomInfoState, setWaitingRoomInfoState] = useState<WaitingRoomInfo>({
    totalPlayers: 1,
    isMaster: true,
    myName: '내이름',
    lobbyPlayerResponses: [
      {
        name: '이름',
      },
    ],
  });
  const [finishSocketConneted, setFinishSocketConnetd] = useState(false); // 웹 소켓 연결이 끝난다는 트리거(채팅 구독이 연결 전에 실행될 때를 대비해 다시 실행하기 위함)

  const setGameRoundState = useSetRecoilState(gameRound);
  const [roomsInfoState, setRoomsInfoState] = useRecoilState(roomInfoState); // 방 정보

  // 방 상태 불러오기
  const [gamesStatus, setGameStatus] = useState<GameStatus>({ statusType: 'WAIT' });
  const [myJobRecoilState, setMyJobRecoilState] = useRecoilState(myJobState);

  // SSE
  const eventSource = useRef<EventSourcePolyfill | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    const EventSource = EventSourcePolyfill;

    eventSource.current = new EventSource(EVENTSOURCE_URL, {
      headers: { Authorization: `Basic ${auth}` },
      heartbeatTimeout: 1000 * 60 * 60 * 12,
      withCredentials: true,
    });

    eventSource.current.addEventListener('gameStatus', ((response: MessageEvent) => {
      setGameStatus(JSON.parse(response.data));
    }) as EventListener);

    eventSource.current.addEventListener('lobbyInfo', ((response: MessageEvent) => {
      setWaitingRoomInfoState(JSON.parse(response.data));
    }) as EventListener);

    return () => {
      eventSource.current?.close();
    };
  }, []);

  // WebSocket
  const connect = () => {
    const socket = new StompJs.Client({
      brokerURL: BORKER_URL,
      reconnectDelay: 10000,
    });

    if (!socket.active) {
      socket.activate();
    }

    socket.onConnect = () => {
      setFinishSocketConnetd(true);
    };

    socketClientState.current = socket;
  };

  const disConnect = () => {
    socketClientState.current?.deactivate();
  };

  // 웹소켓 연결
  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  // 채팅구독함수
  const subscribeChat = () => {
    if (!socketClientState.current?.connected) return;
    const chatSubscribeId = socketClientState.current.subscribe(CHAT_SUB(auth), response => {
      const msg: ChatResponse = JSON.parse(response.body);

      const isOwner = msg.name == roomsInfoState.myName;
      setChats(chats => [...chats, { ...msg, isOwner: isOwner }]);
    });

    setChatSubscribeId(chatSubscribeId);
  };

  // 채팅구독끊기
  const unsubscribeChat = () => {
    if (!socketClientState.current?.connected) return;
    chatSubscribeId?.unsubscribe();
  };

  // 채팅보내기
  const publishChat = (content: string) => {
    if (!socketClientState.current?.connected) return;

    socketClientState.current.publish({
      destination: CHAT_PUB(auth),
      body: JSON.stringify({ content: content }),
    });
  };

  // 채팅구독하기
  useEffect(() => {
    unsubscribeChat();
    if (gamesStatus.statusType !== 'DAY') return;

    // 본래 채팅불러오기
    (async () => {
      const response = await getChats();
      setChats(response);
    })();

    subscribeChat();
    return () => unsubscribeChat();
  }, [gamesStatus.statusType, finishSocketConneted]);

  // ======
  // 밤 직업구독 함수
  const subscribeSkill = async () => {
    if (!socketClientState.current?.connected) return;
    const code = localStorage.getItem(CODE);

    const mafiaSubscribeId = socketClientState.current.subscribe(
      JOB_SKILL_SUB(code, myJobRecoilState),
      response => {
        const msg: SkillResponse = JSON.parse(response.body);
        setMafiaSkillPlayer(msg.result);
      },
    );

    setSkillSubscribeId(mafiaSubscribeId);
  };

  // 밤 직업 구독끊기
  const unsubscribeSkill = () => {
    if (!socketClientState.current?.connected) return;
    skillSubscribeId?.unsubscribe();
  };

  // 밤 스킬
  const publishSkill = (name: string) => {
    if (!socketClientState.current?.connected) return;

    socketClientState.current.publish({
      destination: JOB_SKILL_PUB,
      body: JSON.stringify({ target: name }),
      headers: { Authorization: `Basic ${auth}` },
    });
  };

  useEffect(() => {
    unsubscribeSkill();
    if (gamesStatus.statusType !== 'NIGHT') return;

    subscribeSkill();
    return () => unsubscribeSkill();
  }, [gamesStatus.statusType, finishSocketConneted, myJobRecoilState]);

  // 방 정보 저장 (방 상태가 바뀔때만 작동?)
  useEffect(() => {
    (async () => {
      // 방 정보 불러오기
      const roomInfoResponse = await getGamesInfo();
      setRoomsInfoState(roomInfoResponse);

      // 대기방 SSE이벤트를 받기전에 처음값
      setWaitingRoomInfoState({
        ...waitingRoomInfoState,
        totalPlayers: roomInfoResponse.totalPlayers,
        isMaster: roomInfoResponse.isMaster,
        myName: roomInfoResponse.myName,
        lobbyPlayerResponses: roomInfoResponse.players.map(player => {
          return { name: player.name };
        }),
      });

      // 내 직업
      if (gamesStatus.statusType !== 'WAIT' && !myJobRecoilState) {
        const myJobResponse = await getMyJob();
        setMyJobRecoilState(myJobResponse.job);
      }
    })();

    // DAY로 바뀔때 마다 라운드 +1
    if (gamesStatus.statusType === 'NOTICE') {
      setGameRoundState(gameRoundState => gameRoundState + 1);
    } else if (gamesStatus.statusType === 'WAIT') {
      setGameRoundState(0);
    }
  }, [gamesStatus.statusType, setGameRoundState, setMyJobRecoilState, setRoomsInfoState]);

  return (
    <>
      {gamesStatus.statusType === 'WAIT' && (
        <WaitingRoom waitingRoomInfoState={waitingRoomInfoState} />
      )}
      {(gamesStatus.statusType === 'DAY_INTRO' ||
        gamesStatus.statusType === 'NOTICE' ||
        gamesStatus.statusType === 'DAY' ||
        gamesStatus.statusType === 'VOTE' ||
        gamesStatus.statusType === 'VOTE_RESULT') && (
        <Day
          statusType={gamesStatus.statusType}
          publishChat={publishChat}
          chats={chats}
          setChats={setChats}
        />
      )}
      {(gamesStatus.statusType === 'NIGHT_INTRO' || gamesStatus.statusType === 'NIGHT') && (
        <Night
          statusType={gamesStatus.statusType}
          publishSkill={publishSkill}
          mafiaSkillPlayer={mafiaSkillPlayer}
        />
      )}
      {gamesStatus.statusType === 'END' && <Result />}
    </>
  );
}
