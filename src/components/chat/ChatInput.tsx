/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { postChats } from '../../axios/http'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { useState } from 'react'

function chatSubmitEvent() {
    document.addEventListener('keypress', function (event) {
        if (event.key === 'enter') {
            event.preventDefault()
            document.getElementById('chat-submit-button')?.click()
        }
    })
}

export const ChatInput = () => {
    const chatInput = css`
        box-sizing: border-box;
        flex-flow: 1;
        width: 100%;
        margin-right: 4px;
        padding: 11px 20px;
        font-size: 16px;
        font-family: 'KCC-Hanbit', sans-serif;
        color: ${VariablesCSS.day};
        background-color: rgba(255, 255, 255, 0.2);
        border: 3px solid #ffffff;
        border-radius: 15px;

        &::placeholder {
            color: ${VariablesCSS.day30};
        }

        &:focus {
            outline: 3px solid #ffffff;
            background-color: rgba(255, 255, 255, 0.4);
        }
    `
    chatSubmitEvent()
    const [inputChat, setInputChat] = useState<string>('')
    return (
        <>
            <div
                css={css`
                    position: absolute;
                    bottom: 17px;
                    height: calc(55px + 17px);
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `}
            >
                <input
                    css={chatInput}
                    onChange={(e) => setInputChat(e.target.value)}
                    value={inputChat}
                    type="text"
                    name="chat"
                    id="chat"
                    placeholder="내용을 입력하세요."
                />
                <input
                    id="chat-submit-button"
                    type="submit"
                    value="전송"
                    onClick={() => {
                        if (inputChat === '') return
                        postChats({ contents: inputChat })
                        setInputChat('')
                    }}
                    css={css`
                        font-family: 'Cafe24Ssurround', sans-serif;
                        padding: 18px 14px;
                        font-size: 16px;
                        border-radius: 20px;
                        ${inputChat !== '' && 'background-color: rgba(255, 243, 191, 0.8);'}
                        color: ${VariablesCSS.day};
                        cursor: pointer;
                    `}
                />
            </div>
        </>
    )
}
