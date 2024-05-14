/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    contents: string
    isOwner: boolean
}
export default function ChatMessage({ contents, isOwner }: PropsType) {
    return (
        <p
            css={css`
                margin-bottom: 8px;
                padding: 12px 20px;
                ${isOwner
                    ? 'border-radius: 15px 3px 15px 15px;'
                    : 'border-radius: 3px 15px 15px 15px;'}
                background-color: rgba(255, 255, 255, 0.8);
                font-family: 'KCC-Hanbit', sans-serif;
                color: ${VariablesCSS.day};

                ${isOwner && 'align-items: end;'}
            `}
        >
            {contents}
        </p>
    )
}
