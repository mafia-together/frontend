/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { VariablesCSS } from "../styles/VariablesCSS";
import AppContainerCSS from "../components/layout/AppContainerCSS";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TopEnter from "../components/top/TopEnter";
import BigButton from "../components/button/BigButton";

export default function ParticipateRoom() {
    const middle = css`
        display: flex;
        height: calc(100vh - ${VariablesCSS.top});
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    `;

    const codeinput = css`
        box-sizing: border-box;
        width: 270px;
        height: 75px;
        padding: 22px 42px;
        border-radius: 15px;
        border: 3px solid ${VariablesCSS.light};
        background-color: ${VariablesCSS.light20};
        color: ${VariablesCSS.light};
        font-size: ${VariablesCSS.default};
        font-family: "Cafe24Ssurround", sans-serif;
        text-align: center;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }

        &:focus {
            outline: 3px solid ${VariablesCSS.light};
        }
    `;

    /* 코드 입력 */
    const [code, setCode] = useState("");
    const onCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (`${e.target.value}`.length <= 10) {
            setCode("" + e.target.value);
        }
    };

    /* 이동 */
    const raady = () => {
        return `${code}`.length === 10;
    };
    const navigate = useNavigate();
    const goInputName = () => {
        if (raady()) {
            navigate(`/name?code=${code}`);
        }
    };

    return (
        <AppContainerCSS>
            <div>
                <TopEnter use="participateRoom" />
                <div css={middle}>
                    <input
                        css={codeinput}
                        type="text"
                        value={code}
                        name="code"
                        maxLength={10}
                        onChange={onCode}
                        autoFocus
                    />
                    <div style={{ width: "100%" }} onClick={goInputName}>
                        <BigButton vatiety="soft" use="participate" ready={raady()} />
                    </div>
                </div>
            </div>
        </AppContainerCSS>
    );
}
