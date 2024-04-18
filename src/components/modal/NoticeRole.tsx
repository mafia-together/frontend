/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCSS } from "../../styles/VariablesCSS";
import PlayerBig from "../player/PlayerBig";

type PropsType = {
    role: "citizen" | "mafia" | "doctor" | "police";
};

export default function NoticeRole({ role }: PropsType) {
    const container = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${VariablesCSS.day};
        gap: 50px;
        height: 100%;
    `;
    const description = css`
        font-family: "DNFForgedBlade", sans-serif;
        font-weight: bold;
        font-size: 26px;
        text-align: center;
    `;

    const text = {
        citizen: "시민",
        mafia: "마피아",
        doctor: "의사",
        police: "경찰",
    };

    return (
        <div css={container}>
            <PlayerBig color="day" role={role} />
            <p css={description}>
                당신은 <br />
                {text[role]}입니다.
            </p>
        </div>
    );
}
