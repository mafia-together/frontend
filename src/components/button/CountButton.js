/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { VariablesCss } from "../../styles/VariablesCss";
import styled from "@emotion/styled/macro";

export default function CountButton({ role, roleCount, onRoleCount }) {
    const countGroup = css`
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font-size: 40px;
        font-variant-numeric: tabular-nums;
        font-family: "Cafe24Ssurround";
        color: ${VariablesCss.light};
    `;

    const countNumberContainer = css`
        display: flex;
    `;

    const countNumber = css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
    `;

    const Button = styled.button`
        width: 50px;
        height: 50px;
        background-color: ${VariablesCss.light20};
        border: 0;
        border-radius: 15px;
        box-shadow: inset -3px -2px 4px rgba(0, 0, 0, 0.25);
        transition-property: box-shadow transform;
        transition-duration: 0.1s;
        cursor: pointer;

        &:active {
            transform: translate(0.5px, 1px);
            box-shadow: inset -1.5px -1px 2px rgba(0, 0, 0, 0.25);
        }
    `;

    const makeTwoWord = (number) => {
        if (Number(number) < 10) {
            return "0" + number;
        }
        return "" + number;
    };

    const count = makeTwoWord(roleCount);

    const onMinus = () => {
        if (roleCount > 0) {
            onRoleCount(role, Number(roleCount) - 1);
        }
    };

    const onPlus = () => {
        if (roleCount < 99) {
            onRoleCount(role, Number(roleCount) + 1);
        }
    };

    return (
        <div css={countGroup}>
            <Button onClick={onMinus}>
                <img src="/img/icon/typcn_minus.svg" alt="-1" />
            </Button>
            <div css={countNumberContainer}>
                {role ? <p></p> : <p css={countNumber}>{count[0]}</p>}
                <p css={countNumber}>{count[1]}</p>
            </div>
            <Button onClick={onPlus}>
                <img src="/img/icon/typcn_plus.svg" alt="+1" />
            </Button>
        </div>
    );
}
