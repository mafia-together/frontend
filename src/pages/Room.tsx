import WaitingRoom from './WaitingRoom'
import Day from './Day'
import Night from './Night'
import Result from './Result'
import { useRoomsInfoQuery, useRoomsStatusQuery } from '../axios/http'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { gameRound, lastDeadPlayer, roomInfoState } from '../recoil/roominfo/atom'
import { useEffect } from 'react'

export default function Room() {
    // 방 상태 불러오기
    let roomsStatus = useRoomsStatusQuery()
    roomsStatus = 'DAY'

    // 방 정보 저장 (방 상태가 바뀔때만 작동?)
    const [roomsInfoState, setRoomsInfoState] = useRecoilState(roomInfoState) // 방 정보
    const setLastDeadPlayer = useSetRecoilState(lastDeadPlayer) // 마지막으로 죽은 사람
    const { roomInfo } = useRoomsInfoQuery()

    useEffect(() => {
        const dead = roomsInfoState.players.find((player, index) => {
            return player.isAlive !== roomInfo.players[index].isAlive
        })

        setLastDeadPlayer(dead ? dead.name : '')
        setRoomsInfoState(roomInfo)
    }, [roomInfo])

    // DAY로 바뀔때 마다 라운드 +1
    const [gameRoundState, setGameRoundState] = useRecoilState(gameRound)
    useEffect(() => {
        if (roomsStatus === 'DAY') {
            setGameRoundState(gameRoundState + 1)
        }
    }, [roomsStatus])

    return (
        <>
            {roomsStatus === 'WAIT' && <WaitingRoom />}
            {(roomsStatus === 'DAY' || roomsStatus === 'VOTE') && <Day />}
            {roomsStatus === 'NIGHT' && <Night />}
            {roomsStatus === 'END' && <Result />}
        </>
    )
}
