/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";

export default function TopResult({ daynight }) {
    const container = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${VariablesCss.top};
        ${daynight === "night"
            ? `border-bottom: 1px solid ${VariablesCss.light50};`
            : `border-bottom: 1px solid ${VariablesCss.day};`}

        font-size: ${VariablesCss.title};
        ${daynight === "night" ? `color: ${VariablesCss.light};` : ` color: ${VariablesCss.day};`}

        & p {
            margin-top: 2px;
            display: block;
        }
    `;
    const left = css`
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: "WAGURITTF", sans-serif;
    `;

    const timeText = css`
        padding-top: 2px;
        font-family: "Cafe24Ssurround", sans-serif;
    `;

    return (
        <div css={container}>
            <p css={left}>결과</p>
            <p css={timeText}>1:00</p>
        </div>
    );
}
