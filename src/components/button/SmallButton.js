/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";

export default function SmallButton({ text, color }) {
    const container = css`
        padding: 16px 30px;
        font-family: "Cafe24Ssurround", sans-serif;
        font-size: 20px;
        text-align: center;
        border-radius: 15px;
        box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);
        transition-property: box-shadow, transform, background-color, color;
        transition-duration: 0.1s;
        cursor: pointer;
        ${color === "day"
            ? `color: ${VariablesCss.day}; 
            background-color: ${VariablesCss.light30};`
            : `color: ${VariablesCss.light};
            background-color: ${VariablesCss.light20};`}

        &:active {
            box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25);
            transform: translate(0.5px, 1px);
        }
    `;

    return (
        <div type="button" css={container} class="day">
            <p>{text}</p>
        </div>
    );
}
