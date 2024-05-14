/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    victory: 'mafia' | 'citizen'
    player: { name: string; isAlive: boolean; job?: string }
}

export default function PlayerResult({ victory, player }: PropsType) {
    const container = css`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 8px;
        width: 102px;
        height: 102px;
        padding: 11px 14px;
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 14px;
        text-align: center;
        border-radius: 15px;

        & p {
            display: flex;
            align-items: center;
            flex: 1;
        }

        ${victory === 'mafia'
            ? `color: ${VariablesCSS.light};
    background-color: rgba(255, 255, 255, 0.12);`
            : ` color: ${VariablesCSS.day};
    background-color: rgba(255, 255, 255, 0.3);`}
    `

    return (
        <div css={container}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.0145 7.27274H40V14.5455H38.1884V16.3637H27.3188C26.8384 16.3637 26.3776 16.5552 26.0379 16.8962C25.6981 17.2372 25.5072 17.6996 25.5072 18.1818V20C25.5072 20.9644 25.1255 21.8894 24.446 22.5713C23.7666 23.2533 22.845 23.6364 21.8841 23.6364H15.7609C15.0725 23.6364 14.4384 24.0364 14.1304 24.6546L9.69203 33.5455C9.38406 34.1637 8.76812 34.5455 8.07971 34.5455H1.95652C1.95652 34.5455 -3.47826 34.5455 3.76812 23.6364C3.76812 23.6364 9.2029 16.3637 1.95652 16.3637V7.27274H3.76812L4.67391 5.45456H10.1087L11.0145 7.27274ZM23.6957 20V18.1818C23.6957 17.6996 23.5048 17.2372 23.165 16.8962C22.8253 16.5552 22.3645 16.3637 21.8841 16.3637H20.0725C20.0725 16.3637 18.2609 18.1818 20.0725 20C19.1115 20 18.19 19.6169 17.5105 18.9349C16.831 18.253 16.4493 17.3281 16.4493 16.3637C15.9688 16.3637 15.508 16.5552 15.1683 16.8962C14.8285 17.2372 14.6377 17.6996 14.6377 18.1818V20C14.6377 20.4822 14.8285 20.9447 15.1683 21.2857C15.508 21.6266 15.9688 21.8182 16.4493 21.8182H21.8841C22.3645 21.8182 22.8253 21.6266 23.165 21.2857C23.5048 20.9447 23.6957 20.4822 23.6957 20Z"
                    fill="currentColor"
                />
            </svg>
            <p>{player.name}</p>
        </div>
    )
}
