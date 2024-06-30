/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { Time } from '../time/Time'

export default function TopNight() {
    return (
        <div css={container}>
            <div css={left}>
                <img src="/assets/img/icon/moon.svg" alt="" />
                <p>밤</p>
            </div>
            <p css={timeText}>
                <Time />
            </p>
        </div>
    )
}

const container = () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${VariablesCSS.top};
    border-bottom: 1px solid ${VariablesCSS.light50};
    font-size: ${VariablesCSS.title};
    color: ${VariablesCSS.light};

    & p {
        margin-top: 2px;
        display: block;
    }
`

const left = () => css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'WAGURITTF', sans-serif;
`

const timeText = () => css`
    padding-top: 2px;
    font-family: 'Cafe24Ssurround', sans-serif;
`
