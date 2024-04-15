/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";

export default function ChatMessage({ contents, me }) {
    return (
        <p
            css={css`
                margin-bottom: 8px;
                padding: 12px 20px;
                border-radius: 3px 15px 15px 15px;
                background-color: rgba(255, 255, 255, 0.8);
                font-family: "KCC-Hanbit", sans-serif;
                color: ${VariablesCss.day};

                ${me && "align-items: end;"}
            `}
        >
            {contents}
        </p>
    );
}
