/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { Job, Player } from '../../type'
import JobIcon from '../svg/JobIcon'

type PropsType = {
    player: Player
    index: number
    myJob: Job
    nowVoteResult?: number
    setCheck?: (check: number) => void
}

const backgounrdColor = {
    CITIZEN: VariablesCSS.light30,
    MAFIA: VariablesCSS.kill,
    DOCTOR: 'rgba(241,249,255,0.8)',
    POLICE: 'rgba(233,246,255,0.8)',
}

const color = {
    CITIZEN: VariablesCSS.light,
    MAFIA: VariablesCSS.light,
    DOCTOR: VariablesCSS.night,
    POLICE: VariablesCSS.night,
}

export default function PlayerNight(props: PropsType) {
    const { player, index, nowVoteResult, setCheck } = props

    return (
        <>
            <input
                css={inputCss(props)}
                type="radio"
                name="vote"
                id={'' + index}
                checked={nowVoteResult === index}
                onChange={() => {
                    setCheck && setCheck(index)
                }}
                disabled={!player.isAlive}
            />
            <label htmlFor={'' + index} css={label(props)}>
                <div>
                    <JobIcon job={player.job} size="default" />
                    <p css={p}>{player.name}</p>
                </div>
            </label>
        </>
    )
}

const inputCss = (props: PropsType) => css`
    display: none;

    &:checked + label {
        background-color: ${props.myJob && backgounrdColor[props.myJob]};

        & svg {
            color: ${props.myJob && color[props.myJob]};
        }

        & p {
            color: ${props.myJob && color[props.myJob]};
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

    color: ${VariablesCSS.light};
    font-family: 'Cafe24Ssurround', sans-serif;
    font-size: 14px;
    text-align: center;
    background-color: ${VariablesCSS.light30};
    border-radius: 15px;
    box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);
    transition-property: box-shadow, transform, background-color, color;
    transition-duration: 0.1s;
    cursor: pointer;

    &:active {
        box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25);
        transform: translate(0.5px, 1px);
    }

    ${props.player.isAlive ||
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

const p = css`
    display: flex;
    align-items: center;
    flex: 1;
`
