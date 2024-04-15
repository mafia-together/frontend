/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { VariablesCss } from "../../styles/VariablesCss";
import RoleIcon from "../../styles/RoleIcon";

export default function PlayerBig({ color, role }) {
    return (
        <div
            css={css`
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                width: 220px;
                height: 220px;
                padding: 10px 60px;
                border-radius: 15px;
                background-color: ${VariablesCss.white30};
                color: ${VariablesCss[color]};
                font-family: "Cafe24Ssurround", sans-serif;
                font-size: 20px;
                text-align: center;
            `}
        >
            <RoleIcon role={role} color={color} />
            <p>일이삼사오육칠팔구십</p>
        </div>
    );
}
