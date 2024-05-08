import React, { useState } from 'react'
import WaitingRoom from './WaitingRoom'
import Day from './Day'
import Night from './Night'
import Result from './Result'
import { useRoomsStatusQuery } from '../axios/http'

export default function Room() {
    let roomsStatus = useRoomsStatusQuery()
    roomsStatus = 'DAY'

    return (
        <>
            {roomsStatus === 'WAIT' && <WaitingRoom />}
            {(roomsStatus === 'DAY' || roomsStatus === 'VOTE') && <Day />}
            {roomsStatus === 'NIGHT' && <Night />}
            {roomsStatus === 'END' && <Result />}
        </>
    )
}
