/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import TopEnter from '../components/top/TopEnter'
import BigButton from '../components/button/BigButton'
import { Toaster } from 'react-hot-toast'
import { notifyUseToast as notifyUseToast } from '../components/toast/NotifyToast'

export default function ParticipateRoom() {
    const middle = css`
        display: flex;
        height: calc(100vh - ${VariablesCSS.top});
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    `

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
        font-family: 'Cafe24Ssurround', sans-serif;
        text-align: center;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type='number'] {
            -moz-appearance: textfield;
        }

        &:focus {
            outline: 3px solid ${VariablesCSS.light};
        }
    `

    /* 코드 자동입력 */
    const [searchParams] = useSearchParams()
    const codeParams = !searchParams.get('code') ? '' : searchParams.get('code')

    /* 코드 사용자입력 */
    const [code, setCode] = useState(codeParams)
    const onCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 10) {
            setCode(e.target.value)
        }
    }

    /* 이동 */
    const isValidCode = () => {
        return code?.length === 10
    }
    const navigate = useNavigate()
    const goInputName = async () => {
        if (isValidCode()) {
            try {
                // Code 확인하는 API 요청
                navigate(`/name?code=${code}`)
            } catch (error) {
                notifyUseToast('해당하는 방이 존재하지 않습니다.')
            }
        }
    }

    return (
        <AppContainerCSS>
            <div>
                <TopEnter use="participateRoom" />
                <div css={middle}>
                    <input
                        css={codeinput}
                        type="text"
                        value={code || ''}
                        name="code"
                        maxLength={10}
                        onChange={onCode}
                        spellCheck="false"
                        autoFocus
                    />
                    <div style={{ width: '100%' }} onClick={goInputName}>
                        <BigButton vatiety="soft" use="participate" ready={isValidCode()} />
                    </div>
                    <Toaster />
                </div>
            </div>
        </AppContainerCSS>
    )
}
