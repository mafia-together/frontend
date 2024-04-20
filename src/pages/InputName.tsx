/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppContainerCSS from "../components/layout/AppContainerCSS";
import TopEnter from "../components/top/TopEnter";
import { VariablesCSS } from "../styles/VariablesCSS";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BottomButton from "../components/button/BottomButton";
import { axiosInstance } from "../axios/instances";

export default function InputName() {
    const middle = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - ${VariablesCSS.top} - ${VariablesCSS.bottombutton});
    `;

    const nameCss = css`
        box-sizing: border-box;
        width: 90%;
        max-width: 316px;
        height: 75px;
        padding: 22px 10px;
        border-radius: 15px;
        border: 3px solid ${VariablesCSS.light};
        background-color: ${VariablesCSS.light20};
        color: ${VariablesCSS.light};
        font-size: ${VariablesCSS.default};
        font-family: "Cafe24Ssurround", sans-serif;
        text-align: center;
        word-break: break-all;

        &:focus {
            outline: 3px solid ${VariablesCSS.light};
        }
    `;

    const [name, setName] = useState("");
    const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 10) {
            setName(e.target.value);
        }
    };

    /* 이동 */
    const ready = () => {
        return name.length > 0;
    };

    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");

    const navigate = useNavigate();
    const goWaitingRoom = () => {
        if (ready()) {
            //참가하기 api 호출
            axiosInstance.get(`/rooms?code=${code}&name=${name}`).then(() => {
                // 쿠키

                // 대기방을 이동
                navigate("/waiting");
            });
        }
    };

    return (
        <AppContainerCSS>
            <div>
                <TopEnter use="inputName" />
                <div css={middle}>
                    <input
                        css={nameCss}
                        type="text"
                        name="name"
                        maxLength={10}
                        autoComplete="off"
                        value={name}
                        onChange={onName}
                        spellCheck="false"
                        autoFocus
                    />
                </div>
                <div onClick={goWaitingRoom}>
                    <BottomButton use="complete" ready={ready()} />
                </div>
            </div>
        </AppContainerCSS>
    );
}
