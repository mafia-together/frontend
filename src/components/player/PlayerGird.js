/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PlayerWaiting from "./PlayerWaiting";

export default function PlayerGird({ children }) {
    const grid = css`
        display: grid;

        justify-content: center;
        gap: 8px;
        grid-template-columns: repeat(auto-fill, 102px);

        user-select: none;
    `;

    return <div css={grid}>{children}</div>;
}
