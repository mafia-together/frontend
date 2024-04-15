/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";

export default function TopNight({ myRole }) {
    const container = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${VariablesCss.top};
        border-bottom: 1px solid ${VariablesCss.light50};
        font-size: ${VariablesCss.title};
        color: ${VariablesCss.light};

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
            <div css={left}>
                <img src="/img/icon/moon.svg" alt="" />
                <p>밤</p>
            </div>
            <p css={timeText}>1:20</p>
        </div>
    );
}
