import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { getGamesInfo, useGamesStatusQuery } from '../axios/http';
import { gameRound, roomInfoState } from '../recoil/roominfo/atom';
import Day from './Day';
import Night from './Night';
import Result from './Result';
import WaitingRoom from './WaitingRoom';

export default function Game() {
  // 방 상태 불러오기
  const { roomsStatus } = useGamesStatusQuery();

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
    if (roomsStatus.status === 'NOTICE') {
      setGameRoundState(gameRoundState => gameRoundState + 1);
    } else if (roomsStatus.status === 'WAIT') {
      setGameRoundState(0);
    }
  }, [roomsStatus.status, setGameRoundState, setRoomsInfoState]);

  return (
    <>
      {roomsStatus.status === 'WAIT' && <WaitingRoom />}
      {(roomsStatus.status === 'DAY_INTRO' ||
        roomsStatus.status === 'NOTICE' ||
        roomsStatus.status === 'DAY' ||
        roomsStatus.status === 'VOTE' ||
        roomsStatus.status === 'VOTE_RESULT') && <Day statusType={roomsStatus.status} />}
      {(roomsStatus.status === 'NIGHT_INTRO' || roomsStatus.status === 'NIGHT') && (
        <Night statusType={roomsStatus.status} />
      )}
      {roomsStatus.status === 'END' && <Result />}
    </>
  );
}
