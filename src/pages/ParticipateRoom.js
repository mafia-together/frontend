/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppContainerCSS } from "../styles/AppContainerCSS";
import styled from "@emotion/styled/macro";
import { VariablesCss } from "../styles/VariablesCss";
import TopEnter from "../components/top/TopEnter";
import { useState } from "react";
import BigButton from "../components/button/BigButton";
import { ConstantsCss } from "../styles/ConstantsCSS";
import { useNavigate } from "react-router-dom";

export default function ParticipateRoom() {
    const middle = css`
        display: flex;
        height: calc(100vh - ${VariablesCss.top});
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    `;

    const Codeinput = styled.input`
        box-sizing: border-box;
        width: 270px;
        height: 75px;
        padding: 22px 42px;
        border-radius: 15px;
        border: 3px solid ${VariablesCss.light};
        background-color: ${VariablesCss.light20};
        color: ${VariablesCss.light};
        font-size: ${VariablesCss.default};
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
            outline: 3px solid ${VariablesCss.light};
        }
    `;

    /* 코드 입력 */
    const [code, setCode] = useState("");
    const onCode = (e) => {
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
                <TopEnter type={"participateRoom"} />
                <div css={middle}>
                    <Codeinput
                        type="number"
                        value={code}
                        name="code"
                        maxLength="10"
                        onChange={onCode}
                        autoFocus
                    />
                    <div style={{ width: "100%" }} onClick={goInputName}>
                        <BigButton
                            type={ConstantsCss.soft}
                            use={ConstantsCss.participate}
                            ready={raady()}
                        />
                    </div>
                </div>
            </div>
        </AppContainerCSS>
    );
}
