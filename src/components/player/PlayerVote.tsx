/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { Player } from '../../type'

type PropsType = {
    player: Player
    index: number
    voteTarget: number
    setVoteTarget: (number: number, name: string) => void
}

export default function PlayerVote({ player, index, voteTarget, setVoteTarget }: PropsType) {
    const inputCss = css`
        display: none;

        &:checked + label {
            background-color: ${VariablesCSS.kill};

            & svg {
                color: ${VariablesCSS.light};
            }

            & p {
                color: ${VariablesCSS.light};
            }
        }
    `

    const label = css`
        & > div {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            gap: 8px;
            width: 102px;
            height: 102px;
            padding: 11px 14px;
        }

        color: ${VariablesCSS.day};
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 14px;
        text-align: center;
        background-color: ${VariablesCSS.light30};
        border-radius: 15px;
        box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);
        transition-property: box-shadow, transform, background-color, color;
        transition-duration: 0.1s;
        cursor: pointer;

        & p {
            display: flex;
            align-items: center;
            flex: 1;
        }

        &:active {
            box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25);
            transform: translate(0.5px, 1px);
        }

        ${player.isAlive ||
        `color: rgba(158,137,178, 0.5);
                    background: none;
                    box-shadow: none;
                    cursor: auto;
                    
                &:active {
                    box-shadow: none;
                    transform: none;
                }
                `}
    `

    return (
        <>
            <input
                css={inputCss}
                type="radio"
                name="vote"
                id={'' + index}
                checked={voteTarget === index}
                onChange={() => setVoteTarget(index, player.name)}
                disabled={!player.isAlive}
            />
            <label htmlFor={'' + index} css={label}>
                <div>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 20C17.25 20 14.8958 19.0208 12.9375 17.0625C10.9792 15.1042 10 12.75 10 10C10 7.25 10.9792 4.89583 12.9375 2.9375C14.8958 0.979167 17.25 0 20 0C22.75 0 25.1042 0.979167 27.0625 2.9375C29.0208 4.89583 30 7.25 30 10C30 12.75 29.0208 15.1042 27.0625 17.0625C25.1042 19.0208 22.75 20 20 20ZM0 40V33C0 31.5833 0.365 30.2817 1.095 29.095C1.825 27.9083 2.79333 27.0017 4 26.375C6.58333 25.0833 9.20833 24.115 11.875 23.47C14.5417 22.825 17.25 22.5017 20 22.5C22.75 22.5 25.4583 22.8233 28.125 23.47C30.7917 24.1167 33.4167 25.085 36 26.375C37.2083 27 38.1775 27.9067 38.9075 29.095C39.6375 30.2833 40.0017 31.585 40 33V40H0Z"
                            fill="currentColor"
                        />
                    </svg>
                    <p>{player.name}</p>
                </div>
            </label>
        </>
    )
}
