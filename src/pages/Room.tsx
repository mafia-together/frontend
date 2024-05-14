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
    const { roomsStatus } = useRoomsStatusQuery()

    // 방 정보 저장 (방 상태가 바뀔때만 작동?)
    const [roomsInfoState, setRoomsInfoState] = useRecoilState(roomInfoState) // 방 정보
    const setLastDeadPlayer = useSetRecoilState(lastDeadPlayer) // 마지막으로 죽은 사람
    const { roomInfo } = useRoomsInfoQuery()

    useEffect(() => {
        const dead = roomsInfoState.players.find((player, index) => {
            return player.isAlive !== roomInfo.players[index]?.isAlive
        })

        setLastDeadPlayer(dead ? dead.name : '')
        setRoomsInfoState(roomInfo)
    }, [roomInfo])

    // DAY로 바뀔때 마다 라운드 +1
    const [gameRoundState, setGameRoundState] = useRecoilState(gameRound)
    useEffect(() => {
        if (roomsStatus.statusType === 'DAY') {
            setGameRoundState(gameRoundState + 1)
        }
    }, [roomsStatus])

    const roomStatusType = roomsStatus.statusType

    return (
        <>
            {roomStatusType === 'WAIT' && <WaitingRoom />}
            {(roomStatusType === 'DAY' || roomStatusType === 'VOTE') && (
                <Day roomsStatus={roomStatusType} />
            )}
            {roomStatusType === 'NIGHT' && <Night />}
            {roomStatusType === 'END' && <Result />}
        </>
    )
}
