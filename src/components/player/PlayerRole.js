/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";

export default function PlayerRole({ player }) {
    const container = css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 8px;
        width: 102px;
        height: 102px;
        padding: 11px 14px;
        color: ${VariablesCss.day};
        font-family: "Cafe24Ssurround", sans-serif;
        font-size: 14px;
        text-align: center;
        background-color: ${VariablesCss.white30};
        border-radius: 15px;

        & p {
            display: flex;
            align-items: center;
            flex: 1;
        }

        ${!player.isAlive &&
        `color: ${VariablesCss.dead};
        background: none;`}
    `;

    return (
        <div css={container}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 20C17.25 20 14.8958 19.0208 12.9375 17.0625C10.9792 15.1042 10 12.75 10 10C10 7.25 10.9792 4.89583 12.9375 2.9375C14.8958 0.979167 17.25 0 20 0C22.75 0 25.1042 0.979167 27.0625 2.9375C29.0208 4.89583 30 7.25 30 10C30 12.75 29.0208 15.1042 27.0625 17.0625C25.1042 19.0208 22.75 20 20 20ZM0 40V33C0 31.5833 0.365 30.2817 1.095 29.095C1.825 27.9083 2.79333 27.0017 4 26.375C6.58333 25.0833 9.20833 24.115 11.875 23.47C14.5417 22.825 17.25 22.5017 20 22.5C22.75 22.5 25.4583 22.8233 28.125 23.47C30.7917 24.1167 33.4167 25.085 36 26.375C37.2083 27 38.1775 27.9067 38.9075 29.095C39.6375 30.2833 40.0017 31.585 40 33V40H0Z"
                    fill="currentColor"
                />
            </svg>
            <p>{player.name}</p>
        </div>
    );
}
