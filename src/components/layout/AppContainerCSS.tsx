/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    background?: string
    children: JSX.Element
}

export default function AppContainerCSS(props: PropsType) {
    const { children } = props

    return <div css={container(props)}>{children}</div>
}

const container = (props: PropsType) => css`
    max-width: 390px;

    @media (pointer: coarse) {
        max-width: 100vw;
    }

    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    padding: 0;

    & > *:first-of-type {
        position: relative;
        height: calc(var(--vh, 1vh) * 100);
        margin-left: ${VariablesCSS.margin};
        margin-right: ${VariablesCSS.margin};
    }

    background: ${props.background === 'day'
        ? 'linear-gradient(164.58deg, #a4c8ff 9.01%, #c5d1ff 53.87%, #ffdaca 91.32%);'
        : props.background === 'night'
          ? 'linear-gradient(167.95deg, #302e94 0%, #34073f 51%, #4f002f 100%);'
          : 'linear-gradient(167.95deg, #0300a0 0%, #622173 51%, #61023b 100%);'};
`
