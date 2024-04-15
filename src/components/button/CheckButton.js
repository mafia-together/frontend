/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";
import styled from "@emotion/styled";

export default function CheckButton({ role, roleCount, onRoleCount }) {
    const countGroup = css`
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font-size: 40px;
        font-variant-numeric: tabular-nums;
        font-family: "Cafe24Ssurround";
        color: ${VariablesCss.light};
    `;

    const Checkinput = styled.input`
        display: none;

        & + label {
            box-sizing: border-box;
            position: relative;
            width: 50px;
            height: 50px;
            border: 5px solid ${VariablesCss.light};
            border-radius: 15px;
            background-color: ${VariablesCss.light20};
            transition: transform 0.1s;
            cursor: pointer;
        }

        &:checked + label {
            background-image: url(/img/icon/check.svg);
            background-color: ${VariablesCss.light20};
            background-repeat: no-repeat;
            background-position: center;
        }

        &:active + label {
            transform: translate(0.5px, 1px);
        }
    `;

    const onChecked = (e) => {
        if (e.target.checked) {
            onRoleCount(role, 1);
        } else {
            onRoleCount(role, 0);
        }
    };

    return (
        <div css={countGroup}>
            <Checkinput
                type="checkbox"
                name={role}
                id={role}
                checked={!!roleCount}
                onChange={(e) => onChecked(e)}
            />
            <label htmlFor={role}></label>
        </div>
    );
}
