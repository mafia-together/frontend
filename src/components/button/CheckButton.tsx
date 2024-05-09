/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    role: 'doctor' | 'police'
    count: number
    onCountRole: (role: string, number: number) => void
}

export default function CheckButton({ role, count, onCountRole }: PropsType) {
    const countGroup = css`
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font-size: 40px;
        font-variant-numeric: tabular-nums;
        font-family: 'Cafe24Ssurround';
        color: ${VariablesCSS.light};
    `

    const checkinput = css`
        display: none;

        & + label {
            box-sizing: border-box;
            position: relative;
            width: 50px;
            height: 50px;
            border: 5px solid ${VariablesCSS.light};
            border-radius: 15px;
            background-color: ${VariablesCSS.light20};
            transition: transform 0.1s;
            cursor: pointer;
        }

        &:checked + label {
            background-image: url(/assets/img/icon/check.svg);
            background-color: ${VariablesCSS.light20};
            background-repeat: no-repeat;
            background-position: center;
        }

        &:active + label {
            transform: translate(0.5px, 1px);
        }
    `

    /* 체크 */
    const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            onCountRole(role, 1)
        } else {
            onCountRole(role, 0)
        }
    }

    return (
        <div css={countGroup}>
            <input
                css={checkinput}
                type="checkbox"
                name={role}
                id={role}
                checked={!!count}
                onChange={(e) => onChecked(e)}
            />
            <label htmlFor={role}></label>
        </div>
    )
}
