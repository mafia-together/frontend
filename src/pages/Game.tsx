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
    if (roomsStatus.statusType === 'NOTICE') {
      setGameRoundState(gameRoundState => gameRoundState + 1);
    } else if (roomsStatus.statusType === 'WAIT') {
      setGameRoundState(0);
    }
  }, [roomsStatus.statusType, setGameRoundState, setRoomsInfoState]);

  return (
    <>
      {roomsStatus.statusType === 'WAIT' && <WaitingRoom />}
      {(roomsStatus.statusType === 'DAY_INTRO' ||
        roomsStatus.statusType === 'NOTICE' ||
        roomsStatus.statusType === 'DAY' ||
        roomsStatus.statusType === 'VOTE' ||
        roomsStatus.statusType === 'VOTE_RESULT') && <Day statusType={roomsStatus.statusType} />}
      {(roomsStatus.statusType === 'NIGHT_INTRO' || roomsStatus.statusType === 'NIGHT') && (
        <Night statusType={roomsStatus.statusType} />
      )}
      {roomsStatus.statusType === 'END' && <Result />}
    </>
  );
}
