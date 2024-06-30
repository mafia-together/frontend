/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    text: string
    color: 'day' | 'night'
}

export default function SmallButton(props: PropsType) {
    const { text } = props

    return (
        <button css={container(props)}>
            <p>{text}</p>
        </button>
    )
}

const container = (props: PropsType) => css`
    padding: 16px 30px;
    font-family: 'Cafe24Ssurround', sans-serif;
    font-size: 20px;
    text-align: center;
    border-radius: 15px;
    box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);
    transition-property: box-shadow, transform, background-color, color;
    transition-duration: 0.1s;
    cursor: pointer;
    ${props.color === 'day'
        ? `color: ${VariablesCSS.day}; 
        background-color: ${VariablesCSS.light30};`
        : `color: ${VariablesCSS.light};
        background-color: ${VariablesCSS.light20};`}

    &:active {
        box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25);
        transform: translate(0.5px, 1px);
    }
`
