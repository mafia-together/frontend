/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { Player } from '../../type'
import JobIcon from '../svg/JobIcon'

type PropsType = {
    player: Player
    index: number
    voteTarget: number
    setVoteTarget: (number: number, name: string) => void
}

export default function PlayerVote(props: PropsType) {
    const { player, index, voteTarget, setVoteTarget } = props

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
            <label htmlFor={'' + index} css={label(props)}>
                <div>
                    <JobIcon job={player.job} size="default" />
                    <p>{player.name}</p>
                </div>
            </label>
        </>
    )
}

const inputCss = () => css`
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

const label = (props: PropsType) => css`
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

    ${props.player.isAlive ||
    `color: ${VariablesCSS.deadDay};
            background: none;
            box-shadow: none;
            cursor: auto;
            
        &:active {
            box-shadow: none;
            transform: none;
        }
        `}
`
