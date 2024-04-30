import { useEffect } from 'react'
import { getRooms, postRooms, useChatsQuery } from '../../axios/http'
import ChatGroup from './ChatGroup'

export const Chats = async () => {
    useEffect(() => {
        (async () => {
            const roomResponse = await postRooms({ total: 1, mafia: 1, doctor: 0, police: 0 })
            const participateResponse = await getRooms({
                code: roomResponse.code,
                name: '지윤짱짱맨',
            })
            localStorage.setItem('auth', participateResponse.auth)
        })()
    })
    // const roomResponse = await postRooms({ total: 1, mafia: 1, doctor: 0, police: 0 })
    // const participateResponse = await getRooms({ code: roomResponse.code, name: '지윤짱짱맨' })
    // localStorage.setItem('auth', participateResponse.auth)
    const { chats } = useChatsQuery()
    return (
        <>
            {chats?.map((chat: Chat) => (
                <ChatGroup name={chat.name} content={chat.content} owner={chat.owner} />
            ))}
        </>
    )
}
