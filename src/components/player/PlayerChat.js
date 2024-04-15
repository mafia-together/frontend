/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RoleIcon from "../../styles/RoleIcon";
import { ConstantsCss } from "../../styles/ConstantsCSS";

export default function PlayerChat() {
    const container = css`
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 100%;
    `;

    return (
        <div css={container}>
            <RoleIcon size={ConstantsCss.small} color={ConstantsCss.day} />
        </div>
    );
}