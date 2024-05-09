/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    role: 'total' | 'mafia' | 'doctor' | 'police'
    count: number
    onCountRole: (role: string, number: number) => void
}

export default function CountButton({ role, count, onCountRole }: PropsType) {
    const countGroup = css`
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font-size: 40px;
        font-variant-numeric: tabular-nums;
        font-family: 'Cafe24Ssurround';
        color: ${VariablesCSS.light};
    `

    const countLetterContainer = css`
        display: flex;
    `

    const countletter = css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
    `

    const button = css`
        width: 50px;
        height: 50px;
        background-color: ${VariablesCSS.light20};
        border: 0;
        border-radius: 15px;
        box-shadow: inset -3px -2px 4px rgba(0, 0, 0, 0.25);
        transition-property: box-shadow transform;
        transition-duration: 0.1s;
        cursor: pointer;

        &:active {
            transform: translate(0.5px, 1px);
            box-shadow: inset -1.5px -1px 2px rgba(0, 0, 0, 0.25);
        }
    `

    const makeTwoWord = (number: number) => {
        if (number < 10) {
            return '0' + number
        }
        return '' + number
    }

    const countString = makeTwoWord(Number(count))

    const onMinus = () => {
        if (count > 0) {
            onCountRole(role, Number(count) - 1)
        }
    }

    const onPlus = () => {
        if (count < 99) {
            onCountRole(role, Number(count) + 1)
        }
    }

    return (
        <div css={countGroup}>
            <button css={button} onClick={onMinus}>
                <img src="/assets/img/icon/typcn_minus.svg" alt="-1" />
            </button>
            <div css={countLetterContainer}>
                {role !== 'total' ? <p></p> : <p css={countletter}>{countString[0]}</p>}
                <p css={countletter}>{countString[1]}</p>
            </div>
            <button css={button} onClick={onPlus}>
                <img src="/assets/img/icon/typcn_plus.svg" alt="+1" />
            </button>
        </div>
    )
}
