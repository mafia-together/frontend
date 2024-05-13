/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    background?: string
    children: JSX.Element
}

export default function AppContainerCSS({ background, children }: PropsType) {
    const container = css`
    max-width: 390px;

    @media screen and (hover: none) and (pointer: coarse) {
        max-width: 100vw;
    }
    height: 100vh;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;

    background:
        ${
            background === 'day'
                ? 'linear-gradient(164.58deg, #a4c8ff 9.01%, #c5d1ff 53.87%, #ffdaca 91.32%);'
                : background === 'night'
                  ? 'linear-gradient(167.95deg, #302e94 0%, #34073f 51%, #4f002f 100%);'
                  : 'linear-gradient(167.95deg, #0300a0 0%, #622173 51%, #61023b 100%);'
        }

    & > *:first-of-type {
        position: relative;
        height: 100vh;
        margin-left: ${VariablesCSS.margin};
        margin-right: ${VariablesCSS.margin};
    }`

    return <div css={container}>{children}</div>
}
