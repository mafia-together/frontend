/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { VariablesCss } from "../../styles/VariablesCss";

export default function TopDay({ isAlive, onOpenModal, time }) {
    const container = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${VariablesCss.top};
        border-bottom: 1px solid ${VariablesCss.day30};
        font-size: ${VariablesCss.title};
        color: ${VariablesCss.day};
    `;

    const dayLeft = css`
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: "WAGURITTF", sans-serif;
    `;

    const dayText = css`
        margin-top: 3px;
        display: block;
    `;

    const timeText = css`
        padding-top: 2px;
        font-family: "Cafe24Ssurround", sans-serif;
    `;

    const dayRight = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4px;
        font-family: "Cafe24Ssurround", sans-serif;
        font-size: 12px;
        color: ${VariablesCss.day};
        cursor: pointer;
    `;

    return (
        <div css={container}>
            <div css={dayLeft}>
                <img src="/img/icon/sun.svg" alt="" />
                <p css={dayText}>낮</p>
            </div>

            <p css={timeText}>{time}</p>
            {isAlive ? (
                <button css={dayRight} onClick={onOpenModal}>
                    <img src="/img/icon/vote.svg" alt="" />
                    <p>미리투표하기</p>
                </button>
            ) : (
                <button css={dayRight} onClick={onOpenModal}>
                    <img src="/img/icon/bag.svg" alt="" />
                    <p>직업보기</p>
                </button>
            )}
        </div>
    );
}
