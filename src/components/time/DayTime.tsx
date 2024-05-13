import React from 'react'

type PropsType = {
    lastTime: number
}

export const DayTime = ({ lastTime }: PropsType) => {
    let lastMinutes = `${Math.ceil(lastTime / 60)}`
    let lastSecond = `${Math.ceil(lastTime % 60)}`

    if (+lastMinutes <= 0) {
        lastMinutes = '0'
    }

    if (+lastSecond <= 0) {
        lastSecond = '00'
    } else if (lastSecond.length < 2) {
        lastSecond = '0' + lastSecond
    }

    return (
        <div>
            {lastMinutes} : {lastSecond}
        </div>
    )
}
