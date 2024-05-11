import { atom } from 'recoil'

export const roomInfoState = atom({
    key: 'roomInfo',
    default: {
        startTime: new Date(),
        endTime: new Date(),
        isAlive: true,
        totalPlayers: 0,
        isMaster: true,
        players: [{}],
    },
})

export const gameRound = atom({
    key: 'gameRound',
    default: 0,
})
