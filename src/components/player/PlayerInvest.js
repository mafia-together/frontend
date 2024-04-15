/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";
import RoleIcon from "../../styles/RoleIcon";
import { ConstantsCss } from "../../styles/ConstantsCSS";

export default function PlayerInvest({ role }) {
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
                background-color: ${VariablesCss.light15};
                color: ${VariablesCss.night};
                font-family: "Cafe24Ssurround", sans-serif;
                font-size: 20px;
                text-align: center;
            `}
        >
            <RoleIcon role={role} color={ConstantsCss.night} />
            <p>일이삼사오육칠팔구십</p>
        </div>
    );
}
