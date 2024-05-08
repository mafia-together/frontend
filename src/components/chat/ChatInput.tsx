/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { postChats } from '../../axios/http'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { useState } from 'react'

function isInvalidInputChat(inputChat: string) {
    inputChat = inputChat.trim()
    return inputChat.length === 0
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
    const [inputChat, setInputChat] = useState<string>('')
    return (
        <>
            <form
                css={css`
                    position: absolute;
                    bottom: 17px;
                    height: calc(55px + 17px);
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `}
                onSubmit={(event) => {
                    event.preventDefault()
                    postChats({ contents: inputChat })
                    setInputChat('')
                }}
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
                    type="submit"
                    value="전송"
                    disabled={isInvalidInputChat(inputChat)}
                    css={css`
                        font-family: 'Cafe24Ssurround', sans-serif;
                        padding: 18px 14px;
                        font-size: 16px;
                        border-radius: 20px;
                        ${isInvalidInputChat(inputChat) && 'opacity: 0.2;'}
                        color: ${VariablesCSS.day};
                        cursor: pointer;
                    `}
                />
            </form>
        </>
    )
}
