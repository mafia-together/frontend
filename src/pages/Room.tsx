import WaitingRoom from './WaitingRoom'
import Day from './Day'
import Night from './Night'
import Result from './Result'
import { useRoomsInfoQuery, useRoomsStatusQuery } from '../axios/http'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { gameRound, roomInfoState } from '../recoil/roominfo/atom'
import { useEffect } from 'react'

export default function Room() {
    // 방 상태 불러오기
    const roomsStatus = useRoomsStatusQuery()

    // 방 정보 저장 (방 상태가 바뀔때만 작동?)
    const setRoomsInfoState = useSetRecoilState(roomInfoState)
    const { roomInfo } = useRoomsInfoQuery()

    useEffect(() => {
        console.log('qkRNla')
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
