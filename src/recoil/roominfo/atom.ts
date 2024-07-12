import { atom } from 'recoil';

import { Job, RoomInfo } from '../../type';

export const gameRound = atom({
  key: 'gameRound',
  default: 0,
});

export const roomInfoState = atom<RoomInfo>({
  key: 'roomInfoState',
  default: {
    startTime: new Date(),
    endTime: new Date(),
    isAlive: true,
    totalPlayers: 0,
    isMaster: true,
    myName: '지윤짱짱맨',
    players: [
      {
        name: '지윤짱짱맨',
        isAlive: true,
        job: 'MAFIA',
      },
      { name: '재연짱짱맨', isAlive: true, job: null },
    ],
  },
});

export const myJobState = atom<Job>({
  key: 'myJobState',
  default: 'CITIZEN',
});
