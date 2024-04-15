/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppContainerCSS } from "../styles/AppContainerCSS";
import TopEnter from "../components/top/TopEnter";
import { VariablesCss } from "../styles/VariablesCss";
import styled from "@emotion/styled/macro";
import BottomButton from "../components/button/BottomButton";
import { ConstantsCss } from "../styles/ConstantsCSS";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputName() {
    const middle = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - ${VariablesCss.top} - ${VariablesCss.bottombutton});
    `;

    const NameCss = styled.input`
        box-sizing: border-box;
        width: 90%;
        max-width: 316px;
        height: 75px;
        padding: 22px 10px;
        border-radius: 15px;
        border: 3px solid ${VariablesCss.light};
        background-color: ${VariablesCss.light20};
        color: ${VariablesCss.light};
        font-size: ${VariablesCss.default};
        font-family: "Cafe24Ssurround", sans-serif;
        text-align: center;
        word-break: break-all;

        &:focus {
            outline: 3px solid ${VariablesCss.light};
        }
    `;

    const [name, setName] = useState("");
    const onName = (e) => {
        if (e.target.value.length <= 10) {
            setName(e.target.value);
        }
    };

    /* 이동 */
    const ready = () => {
        return name.length > 0;
    };

    const navigate = useNavigate();
    const goWaitingRoom = () => {
        if (ready) {
            //참가하기 api 호출
            //성공시
            // 쿠키??
            navigate("/waiting");
        }
    };

    return (
        <AppContainerCSS>
            <div>
                <TopEnter type={"inputName"} />
                <div css={middle}>
                    <NameCss
                        type="text"
                        name="name"
                        maxLength="10"
                        autocomplete="off"
                        value={name}
                        onChange={onName}
                        autoFocus
                    />
                </div>
                <div class="bottom" onClick={goWaitingRoom}>
                    <BottomButton use={ConstantsCss.complete} ready={ready()} />
                </div>
            </div>
        </AppContainerCSS>
    );
}
