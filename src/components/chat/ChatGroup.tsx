/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerChat from '../player/PlayerChat'
import ChatMessage from './ChatMessage'
import { forwardRef } from 'react'
import { Chat } from '../../type'

interface Props {
    chats: Chat[]
}
export default forwardRef(function ChatGroup({ chats }: Props, ref: any) {
    const container = css`
        display: flex;
        margin-bottom: 8px;
        gap: 8px;
        ${chats[0].isOwner && 'flex-direction: row-reverse;'}

        &:first-of-type {
            margin-top: 20px;
        }
    `

    const right = css`
        display: flex;
        align-items: start;
        flex-direction: column;
        flex-grow: 0;

        ${chats[0].isOwner && 'align-items: end;'}
    `

    const nameText = css`
        margin-bottom: 8px;
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 14px;
        color: ${VariablesCSS.day};
    `

    return (
        <div ref={ref} css={container}>
            <PlayerChat job={chats[0].job} />
            <div css={right}>
                <p css={nameText}>{chats[0].name}</p>
                {chats.map((chat) => (
                    <ChatMessage
                        contents={chat.contents}
                        isOwner={chat.isOwner}
                        key={`${chat.timestamp}`}
                    />
                ))}
            </div>
        </div>
    )
})
