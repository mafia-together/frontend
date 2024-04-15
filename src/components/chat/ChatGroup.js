/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ChatMessage from "./ChatMessage";
import { VariablesCss } from "../../styles/VariablesCss";
import PlayerChat from "../player/PlayerChat";
import { useState } from "react";

export default function ChatGroup() {
    const [me, setMe] = useState(false);

    const container = css`
        display: flex;
        margin-bottom: 8px;
        gap: 8px;
        ${me && "flex-direction: row-reverse;"}

        &:first-child {
            margin-top: 20px;
        }
    `;

    const right = css`
        display: flex;
        align-items: start;
        flex-direction: column;
        flex-grow: 0;

        ${me && "align-items: end;"}
    `;

    const nameText = css`
        margin-bottom: 8px;
        font-family: "Cafe24Ssurround", sans-serif;
        font-size: 14px;
        color: ${VariablesCss.day};
    `;

    return (
        <div css={container}>
            <PlayerChat />
            <div css={right}>
                <p css={nameText}>이름</p>
                <ChatMessage
                    contents="한줄을 한줄을 넘어가는 아주아주아중 긴 대화대
화대화대화 채우는 긴 대화 긴대화긴대화댄"
                    me={me}
                />
                <ChatMessage contents="한" me={me} />
            </div>
        </div>
    );
}
