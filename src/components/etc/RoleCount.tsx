/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCSS } from "../../styles/VariablesCSS";
import RoleIcon from "../svg/RoleIcon";
import CountButton from "../button/CountButton";
import CheckButton from "../button/CheckButton";

type PropsType = {
    role: "mafia" | "doctor" | "police";
    count: number;
    onCountRole: (role: string, number: number) => void;
};

export default function RoleCount({ role, count, onCountRole }: PropsType) {
    const roleName = {
        mafia: "마피아",
        doctor: "의사",
        police: "경찰",
    };

    const roleCountContainer = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        margin-bottom: 16px;
        color: ${VariablesCSS.light};
        font-size: 28px;
        font-family: "Cafe24Ssurround";
    `;

    const roleGroup = css`
        display: flex;
        gap: 16px;
    `;

    const roleText = css`
        display: block;
        padding-top: 5px;
    `;

    return (
        <div css={roleCountContainer}>
            <div css={roleGroup}>
                <RoleIcon role={role} size="default" color="light" />
                <p css={roleText}>{roleName[role]}</p>
            </div>
            {role === "mafia" ? (
                <CountButton role={role} count={count} onCountRole={onCountRole} />
            ) : (
                <CheckButton role={role} count={count} onCountRole={onCountRole} />
            )}
        </div>
    );
}
