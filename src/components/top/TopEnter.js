/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCss } from "../../styles/VariablesCss";
import { useNavigate } from "react-router-dom";

export default function TopEnter({ type, onModal }) {
    const title = {
        createRoom: "방만들기",
        participateRoom: "초대코드 입력",
        inputName: "이름입력",
        waitingRoom: "대기방",
    };

    const topEnter = css`
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${VariablesCss.top};
        border-bottom: 1px solid ${VariablesCss.light50};
        color: ${VariablesCss.light};
        font-family: "WAGURITTF", sans-serif;
        font-size: ${VariablesCss.title};
    `;

    const invite = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: none;
        background: none;
        color: ${VariablesCss.light};
        font-family: "Cafe24Ssurround", sans-serif;
        font-size: 14px;
        cursor: pointer;
    `;

    /* 뒤로가기 */
    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1);
    };

    /* 초대하기 모달 */

    return (
        <div css={topEnter}>
            {type !== "waitingRoom" ? (
                <img
                    src="/img/icon/back_button.svg"
                    alt="뒤로가기"
                    onClick={onBack}
                    style={{ cursor: "pointer" }}
                />
            ) : (
                <div style={{ width: "50px" }}></div>
            )}
            <p>{title[type]}</p>
            {type === "waitingRoom" ? (
                <button css={invite} onClick={onModal}>
                    <img src="/img/icon/invite.svg" alt="" />
                    <p>초대하기</p>
                </button>
            ) : (
                <div style={{ width: "50px" }}></div>
            )}
        </div>
    );
}
