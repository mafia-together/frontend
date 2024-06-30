import { useRecoilState } from 'recoil'
import { roomInfoState } from '../../recoil/roominfo/atom'
import { useEffect, useRef, useState } from 'react'

export const Time = () => {
    const [roomInfo] = useRecoilState(roomInfoState)

    const hanleTimeString = (lastTime: number) => {
        const lastMinutes = `${Math.trunc(lastTime / 60)}`
        const lastSecond = `${Math.trunc(lastTime % 60)}`.padStart(2, '0')

        return [lastMinutes, lastSecond]
    }

    const [minutes, setMinutes] = useState('0')
    const [seconds, setSeconds] = useState('00')

    const timer = useRef<number>(0)

    useEffect(() => {
        timer.current = setInterval(() => {
            const tempTime = Math.trunc((+new Date(roomInfo.endTime) - +new Date()) / 1000)

            const timeString = hanleTimeString(tempTime)
            setMinutes(timeString[0])
            setSeconds(timeString[1])
        }, 1000)

        return () => clearInterval(timer.current)
    }, [roomInfo])

    return (
        <>
            {minutes}:{seconds}
        </>
    )
}
