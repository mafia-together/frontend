/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

const backgroundColor = {
    emphasis: VariablesCSS.light90,
    soft: VariablesCSS.light30,
}

const color = {
    emphasis: VariablesCSS.night,
    soft: VariablesCSS.light,
}

const icon = {
    createRoom: '/assets/img/icon/create_room.svg',
    participate: '/assets/img/icon/participate.svg',
    gameStart: '/assets/img/icon/play.svg',
}

const text = {
    createRoom: '방만들기',
    participate: '참가하기',
    gameStart: '게임시작',
}

type PropsType = {
    vatiety: 'emphasis' | 'soft'
    use: 'createRoom' | 'participate' | 'gameStart'
    ready: boolean
}

export default function BigButton(props: PropsType) {
    const { use } = props

    return (
        <button css={container(props)}>
            <img src={icon[use]} draggable="false" alt="" />
            <p>{text[use]}</p>
        </button>
    )
}

const container = (props: PropsType) => css`
    & > img {
        display: block;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    width: 100%;
    height: ${VariablesCSS.bigbutton};
    font-size: ${VariablesCSS.default};
    font-family: 'Cafe24Ssurround', sans-serif;
    border: 0;
    border-radius: 15px;
    box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.25);
    transition-property: box-shadow transform;
    transition-duration: 0.1s;
    cursor: pointer;
    background-color: ${backgroundColor[props.vatiety]};
    color: ${color[props.vatiety]};
    ${props.ready ? 'opacity: 1' : 'opacity: 0.2'};

    ${props.ready &&
    `&:active {
        box-shadow: inset -2px -2px 2px rgba(0, 0, 0, 0.25);
        transform: translate(0.5px, 1px);
    }`}
`
