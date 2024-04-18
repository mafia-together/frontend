/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCSS } from "../../styles/VariablesCSS";
import RoleIcon from "../svg/RoleIcon";

type PropsType = {
    color: "day" | "night" | "dark" | "light" | "kill" | "safe" | "dead";
    role: "mafia" | "doctor" | "police" | "citizen";
};

export default function PlayerBig({ color, role }: PropsType) {
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
                background-color: ${VariablesCSS.white30};
                color: ${VariablesCSS[color]};
                font-family: "Cafe24Ssurround", sans-serif;
                font-size: 20px;
                text-align: center;
            `}
        >
            <RoleIcon role={role} size="big" color={color} />
            <p>일이삼사오육칠팔구십</p>
        </div>
    );
}
