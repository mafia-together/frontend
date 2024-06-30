/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    use: 'complete' | 'exit'
    daynight?: 'day' | 'night'
    ready?: boolean
}

export default function BottomButton({ use, daynight, ready = true }: PropsType) {
    const text = {
        complete: '완료',
        exit: '대비방으로 나가기',
    }

    const container = css`
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: ${VariablesCSS.bottombutton};
        border-top: 1px solid ${VariablesCSS.light50};
        color: ${VariablesCSS.light};
        font-family: 'Cafe24Ssurround';
        font-size: ${VariablesCSS.default};
        box-sizing: border-box;
        cursor: pointer;
        ${ready
            ? `
            opacity: 1;
            &:active * {
            transform: translate(0.5px, 0.5px);
        }`
            : 'opacity: 0.2'};

        & * {
            transition: transform 0.1s;
        }

        ${daynight === 'day'
            ? `border-top: 1px solid ${VariablesCSS.day50};
        color: ${VariablesCSS.day};`
            : ``}
    `

    return (
        <button css={container}>
            {use === 'complete' && (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22.8122 8.52278L10.7737 20.5603C10.6344 20.6996 10.4691 20.8101 10.2871 20.8855C10.105 20.9609 9.90996 20.9997 9.71295 20.9997C9.51594 20.9997 9.32085 20.9609 9.13884 20.8855C8.95683 20.8101 8.79146 20.6996 8.65217 20.5603L1.93779 13.8103C1.65699 13.529 1.49927 13.1479 1.49927 12.7504C1.49927 12.353 1.65699 11.9718 1.93779 11.6906L4.18779 9.44059C4.46813 9.16018 4.84809 9.00217 5.2446 9.00112C5.64111 9.00006 6.0219 9.15605 6.30373 9.43496L9.73873 12.7415L9.74904 12.7518L18.4425 4.1859C18.7236 3.90595 19.1042 3.74878 19.5009 3.74878C19.8977 3.74878 20.2782 3.90595 20.5594 4.1859L22.8094 6.39465C22.9498 6.53388 23.0614 6.69951 23.1376 6.88203C23.2139 7.06455 23.2533 7.26033 23.2535 7.45813C23.2538 7.65592 23.2149 7.85181 23.1392 8.03453C23.0634 8.21725 22.9523 8.38318 22.8122 8.52278Z"
                        fill="currentColor"
                    />
                </svg>
            )}

            <p>{text[use]}</p>
        </button>
    )
}
