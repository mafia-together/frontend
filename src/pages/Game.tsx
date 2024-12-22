import { EventListener, EventSourcePolyfill } from 'event-source-polyfill';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { getGamesInfo } from '../axios/http';
import { BASE_URL } from '../axios/instances';
import { gameRound, roomInfoState } from '../recoil/roominfo/atom';
import Day from './Day';
import Night from './Night';
import Result from './Result';
import WaitingRoom from './WaitingRoom';

export default function Game() {
  // 방 상태 불러오기
  const [gamesStatus, setGameStatus] = useState({ statusType: 'WAIT' });

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

  // 방 정보 저장 (방 상태가 바뀔때만 작동?)
  const setRoomsInfoState = useSetRecoilState(roomInfoState); // 방 정보

  const setGameRoundState = useSetRecoilState(gameRound);
  useEffect(() => {
    // 방 정보 불러오기
    (async () => {
      const roomInfoResponse = await getGamesInfo();
      setRoomsInfoState(roomInfoResponse);
    })();

    // DAY로 바뀔때 마다 라운드 +1
    if (gamesStatus.statusType === 'NOTICE') {
      setGameRoundState(gameRoundState => gameRoundState + 1);
    } else if (gamesStatus.statusType === 'WAIT') {
      setGameRoundState(0);
    }
  }, [gamesStatus.statusType, setGameRoundState, setRoomsInfoState]);

  return (
    <>
      {gamesStatus.statusType === 'WAIT' && <WaitingRoom />}
      {(gamesStatus.statusType === 'DAY_INTRO' ||
        gamesStatus.statusType === 'NOTICE' ||
        gamesStatus.statusType === 'DAY' ||
        gamesStatus.statusType === 'VOTE' ||
        gamesStatus.statusType === 'VOTE_RESULT') && <Day statusType={gamesStatus.statusType} />}
      {(gamesStatus.statusType === 'NIGHT_INTRO' || gamesStatus.statusType === 'NIGHT') && (
        <Night statusType={gamesStatus.statusType} />
      )}
      {gamesStatus.statusType === 'END' && <Result />}
    </>
  );
}
