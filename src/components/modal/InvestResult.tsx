/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { VariablesCSS } from "../../styles/VariablesCSS";
import PlayerInvest from "../player/PlayerInvest";

export default function InvestResult() {
    const [roleResult, setRoleResult] = useState("mafia");

    const container = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${VariablesCSS.night};
        gap: 50px;
        height: 100%;
    `;
    const description = css`
        font-family: "DNFForgedBlade", sans-serif;
        font-weight: bold;
        font-size: 26px;
        text-align: center;

        ${roleResult === "mafia" && `text-decoration: underline;`}
    `;

    return (
        <div css={container}>
            <PlayerInvest role={roleResult} />
            <p css={description}>
                {roleResult === "mafia" ? "마피아가 맞습니다" : "마피아가 아닙니다"}
            </p>
        </div>
    );
}
