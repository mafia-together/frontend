/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCSS } from "../../styles/VariablesCSS";

type PropsType = {
    daynight: "day" | "night";
};

export default function TopResult({ daynight }: PropsType) {
    const container = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${VariablesCSS.top};
        ${daynight === "night"
            ? `border-bottom: 1px solid ${VariablesCSS.light50};`
            : `border-bottom: 1px solid ${VariablesCSS.day};`}

        font-size: ${VariablesCSS.title};
        ${daynight === "night" ? `color: ${VariablesCSS.light};` : ` color: ${VariablesCSS.day};`}

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
