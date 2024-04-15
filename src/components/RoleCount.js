/** @jsxImportSource @emotion/react */
import CountButton from "./button/CountButton";
import RoleIcon from "../styles/RoleIcon";
import { css } from "@emotion/react";
import { VariablesCss } from "../styles/VariablesCss";
import CheckButton from "./button/CheckButton";
import { ConstantsCss } from "../styles/ConstantsCSS";

export default function RoleCount({ role, roleCount, onRoleCount }) {
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
        color: ${VariablesCss.light};
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
                <RoleIcon role={role} size={ConstantsCss.default} color={ConstantsCss.light} />
                <p css={roleText}>{roleName[role]}</p>
            </div>
            {role === "mafia" ? (
                <CountButton role={role} roleCount={roleCount} onRoleCount={onRoleCount} />
            ) : (
                <CheckButton role={role} roleCount={roleCount} onRoleCount={onRoleCount} />
            )}
        </div>
    );
}
