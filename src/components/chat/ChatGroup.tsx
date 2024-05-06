/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerChat from '../player/PlayerChat'
import ChatMessage from './ChatMessage'
import { forwardRef } from 'react'

interface Props {
    name: string
    contents: string
    owner: boolean
}
export default forwardRef(function ChatGroup({ name, contents, owner }: Props, ref: any) {
    const container = css`
        display: flex;
        margin-bottom: 8px;
        gap: 8px;
        ${owner && 'flex-direction: row-reverse;'}

        &:first-of-type {
            margin-top: 20px;
        }
    `

    const right = css`
        display: flex;
        align-items: start;
        flex-direction: column;
        flex-grow: 0;

        ${owner && 'align-items: end;'}
    `

    const nameText = css`
        margin-bottom: 8px;
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 14px;
        color: ${VariablesCSS.day};
    `

    return (
        <div ref={ref} css={container}>
            <PlayerChat />
            <div css={right}>
                <p css={nameText}>{name}</p>
                <ChatMessage contents={contents} owner={owner} />
            </div>
        </div>
    )
})
