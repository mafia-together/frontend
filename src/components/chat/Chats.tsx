import { useChatsQuery } from '../../axios/http'
import ChatGroup from './ChatGroup'

export const Chats = () => {
    const { chats } = useChatsQuery()
    return (
        <>
            {chats?.map((chat: Chat) => (
                <ChatGroup name={chat.name} content={chat.content} owner={chat.owner} />
            ))}
        </>
    )
}
