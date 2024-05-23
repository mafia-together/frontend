import { useEffect, useRef } from 'react'
import { useChatsQuery } from '../../axios/http'
import ChatGroup from './ChatGroup'
import { particpateRoom } from '../test/ParticipateRoom'
import { Chat } from '../../type'

export const Chats = () => {
    particpateRoom()
    const chatRef = useRef<HTMLDivElement | null>(null)
    const { chats } = useChatsQuery()
    useEffect(() => {
        if (!chatRef.current) return
        chatRef.current.scrollIntoView()
    }, [chatRef, chats])

    const chatReduce = chats.reduce(
        (acc: [Chat[]], chat, index) => {
            if (index > 0) {
                if (chat.name === chats[index - 1].name) {
                    acc[acc.length - 1].push(chat)
                } else {
                    acc.push([chat])
                }
                return acc
            } else {
                acc[0] = [chat]
                return acc
            }
        },
        [[]]
    )

    return (
        <>
            {chatReduce[0].length > 0 &&
                chatReduce.map((chats: Chat[], idx: number) =>
                    idx === chats.length - 1 ? (
                        <ChatGroup ref={chatRef} key={idx} chats={chats} />
                    ) : (
                        <ChatGroup key={idx} chats={chats} />
                    )
                )}
        </>
    )
}
