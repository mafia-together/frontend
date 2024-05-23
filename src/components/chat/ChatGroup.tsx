/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerChat from '../player/PlayerChat'
import ChatMessage from './ChatMessage'
import { forwardRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { myJobState, roomInfoState } from '../../recoil/roominfo/atom'

interface Props {
    name: string
    contents: string
    isOwner: boolean
}
export default forwardRef(function ChatGroup({ name, contents, isOwner }: Props, ref: any) {
    const container = css`
        display: flex;
        margin-bottom: 8px;
        gap: 8px;
        ${isOwner && 'flex-direction: row-reverse;'}

        &:first-of-type {
            margin-top: 20px;
        }
    `

    const right = css`
        display: flex;
        align-items: start;
        flex-direction: column;
        flex-grow: 0;

        ${isOwner && 'align-items: end;'}
    `

    const nameText = css`
        margin-bottom: 8px;
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 14px;
        color: ${VariablesCSS.day};
    `

    const myjob = useRecoilValue(myJobState)
    const roomInfo = useRecoilValue(roomInfoState)

    return (
        <div ref={ref} css={container}>
            <PlayerChat job={roomInfo.myName == name ? myjob : null} />
            <div css={right}>
                <p css={nameText}>{name}</p>
                <ChatMessage contents={contents} isOwner={isOwner} />
            </div>
        </div>
    )
})
