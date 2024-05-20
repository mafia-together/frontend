import { useRecoilState } from 'recoil'
import { roomInfoState } from '../../recoil/roominfo/atom'
import { useEffect, useRef, useState } from 'react'

export const TimeOnlySeconds = () => {
    const [roomInfo] = useRecoilState(roomInfoState)

    const hanleTimeString = (lastTime: number) => {
        return `${Math.trunc(lastTime % 60)}`
    }

    const [seconds, setSeconds] = useState('10')

    const timer = useRef<number>(0)

    useEffect(() => {
        timer.current = setInterval(() => {
            const tempTime = Math.trunc((+new Date(roomInfo.endTime) - +new Date()) / 1000)

            const timeString = hanleTimeString(tempTime)
            setSeconds(timeString)
        }, 1000)

        return () => clearInterval(timer.current)
    }, [roomInfo])

    return <div>{seconds}</div>
}
