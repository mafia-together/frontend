import { atom } from 'recoil'

export const gameRound = atom({
    key: 'gameRound',
    default: 0,
})

export const roomInfoState = atom({
    key: 'roomInfoState',
    default: {
        startTime: new Date(),
        endTime: new Date(),
        isAlive: true,
        totalPlayers: 0,
        isMaster: true,
        players: [
            {
                name: '지윤짱짱맨',
                isAlive: true,
                job: 'MAFIA',
            },
            { name: '재연짱짱맨', isAlive: true, job: null },
        ],
    },
})

export const lastDeadPlayer = atom({
    key: 'lastDeadPlayer',
    default: '',
})
