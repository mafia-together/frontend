import * as StompJs from '@stomp/stompjs';
import { EventListener, EventSourcePolyfill } from 'event-source-polyfill';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { getChats, getGamesInfo, getMyJob } from '../axios/http';
import { BASE_URL } from '../axios/instances';
import { gameRound, myJobState, roomInfoState } from '../recoil/roominfo/atom';
import { ChatArray, ChatResponse, GameStatus } from '../type';
import Day from './Day';
import Night from './Night';
import Result from './Result';
import WaitingRoom from './WaitingRoom';

export default function Game() {
  const auth = localStorage.getItem('auth');
  const [chats, setChats] = useState<ChatArray>([]);
  const socketClientState = useRef<StompJs.Client | null>(null);

  const [chatSubscribeId, setChatSubscribeId] = useState<StompJs.StompSubscription | null>(null);
  const [roomsInfoState, setRoomsInfoState] = useRecoilState(roomInfoState); // 방 정보
  const [finishSocketConneted, setFinishSocketConnetd] = useState(false); // 웹 소켓 연결이 끝난다는 트리거(채팅 구독이 연결 전에 실행될 때를 대비해 다시 실행하기 위함)

  const setGameRoundState = useSetRecoilState(gameRound);

  // 방 상태 불러오기
  const [gamesStatus, setGameStatus] = useState<GameStatus>({ statusType: 'WAIT' });
  const [myJobRecoilState, setMyJobRecoilState] = useRecoilState(myJobState);

  // SSE
  const eventSource = useRef<EventSourcePolyfill | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    const EventSource = EventSourcePolyfill;

    eventSource.current = new EventSource(`${BASE_URL}/games/subscribe`, {
      headers: { Authorization: `Basic ${auth}` },
      heartbeatTimeout: 1000 * 60 * 60 * 12,
      withCredentials: true,
    });

    eventSource.current.addEventListener('gameStatus', ((response: MessageEvent) => {
      setGameStatus(JSON.parse(response.data));
    }) as EventListener);

    return () => {
      eventSource.current?.close();
    };
  }, []);

  // WebSocket
  const connect = () => {
    const socket = new StompJs.Client({
      brokerURL: `wss://dev.mafia-together.com/api/stomp`,
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

  // 채팅구독
  const subscribeChat = () => {
    if (!socketClientState.current?.connected) return;
    const chatSubscribeId = socketClientState.current.subscribe(`/sub/chat/${auth}`, response => {
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
      destination: `/pub/chat/${auth}`,
      body: JSON.stringify({ content: content }),
    });
  };

  const disConnect = () => {
    socketClientState.current?.deactivate();
  };

  // 채팅구독
  useEffect(() => {
    if (gamesStatus.statusType !== 'DAY') return;

    // 본래 채팅불러오기
    (async () => {
      const response = await getChats();
      setChats(response);
    })();

    subscribeChat();
    return () => unsubscribeChat();
  }, [gamesStatus.statusType, finishSocketConneted]);

  useEffect(() => {});

  // 웹소켓 연결
  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  // 방 정보 저장 (방 상태가 바뀔때만 작동?)
  useEffect(() => {
    (async () => {
      // 방 정보 불러오기
      const roomInfoResponse = await getGamesInfo();
      setRoomsInfoState(roomInfoResponse);

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
      {gamesStatus.statusType === 'WAIT' && <WaitingRoom />}
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
        <Night statusType={gamesStatus.statusType} />
      )}
      {gamesStatus.statusType === 'END' && <Result />}
    </>
  );
}
