import { useRecoilState } from 'recoil'
import { roomInfoState } from '../../recoil/roominfo/atom'
import { useEffect, useRef, useState } from 'react'

export const Time = () => {
    const [roomInfo] = useRecoilState(roomInfoState)

    const hanleTimeString = (lastTime: number) => {
        let lastMinutes = `${Math.trunc(lastTime / 60)}`
        let lastSecond = `${Math.trunc(lastTime % 60)}`

        if (+lastMinutes <= 0) {
            lastMinutes = '0'
        }

        if (+lastSecond <= 0) {
            lastSecond = '00'
        } else if (+lastSecond < 10) {
            lastSecond = '0' + lastSecond
        }

        return [lastMinutes, lastSecond]
    }

    const [, setLastTime] = useState(0)
    const [minutes, setMinutes] = useState('0')
    const [seconds, setSeconds] = useState('00')

    const timer = useRef<number>(0)

    useEffect(() => {
        timer.current = setInterval(() => {
            const tempTime = Math.round((+new Date(roomInfo.endTime) - +new Date()) / 1000)
            setLastTime(tempTime)

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
