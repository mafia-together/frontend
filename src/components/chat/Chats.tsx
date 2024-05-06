import { useEffect, useRef } from 'react'
import { useChatsQuery } from '../../axios/http'
import ChatGroup from './ChatGroup'
import { particpateRoom } from '../test/ParticipateRoom'

export const Chats = () => {
    particpateRoom()
    const chatRef = useRef<HTMLDivElement | null>(null)
    const { chats } = useChatsQuery()
    useEffect(() => {
        if (!chatRef.current) return
        chatRef.current.scrollIntoView()
    }, [chatRef, chats])
    return (
        <>
            {chats.map((chat: Chat, idx: number) =>
                idx === chats.length - 1 ? (
                    <ChatGroup
                        ref={chatRef}
                        key={idx}
                        name={chat.name}
                        contents={chat.contents}
                        owner={chat.owner}
                    />
                ) : (
                    <ChatGroup
                        key={idx}
                        name={chat.name}
                        contents={chat.contents}
                        owner={chat.owner}
                    />
                )
            )}
        </>
    )
}
