/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCSS } from "../../styles/VariablesCSS";
import { useNavigate } from "react-router-dom";

type PropsType = {
    use: "createRoom" | "participateRoom" | "inputName" | "waitingRoom";
    onModal?: () => void;
};

export default function TopEnter({ use, onModal }: PropsType) {
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
        height: ${VariablesCSS.top};
        border-bottom: 1px solid ${VariablesCSS.light50};
        color: ${VariablesCSS.light};
        font-family: "WAGURITTF", sans-serif;
        font-size: ${VariablesCSS.title};
    `;

    const invite = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: none;
        background: none;
        color: ${VariablesCSS.light};
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
            {use !== "waitingRoom" ? (
                <img
                    src="/src/assets/img/icon/back_button.svg"
                    alt="뒤로가기"
                    onClick={onBack}
                    style={{ cursor: "pointer" }}
                />
            ) : (
                <div style={{ width: "50px" }}></div>
            )}
            <p>{title[use]}</p>
            {use === "waitingRoom" ? (
                <button css={invite} onClick={onModal}>
                    <img src="/src/assets/img/icon/invite.svg" alt="" />
                    <p>초대하기</p>
                </button>
            ) : (
                <div style={{ width: "50px" }}></div>
            )}
        </div>
    );
}
