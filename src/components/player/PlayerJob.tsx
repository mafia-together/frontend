/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { Player } from '../../type'
import JobIcon from '../svg/JobIcon'

type PropsType = {
    player: Player
}

export default function PlayerJob(props: PropsType) {
    const { player } = props

    return (
        <div css={container(props)}>
            <JobIcon job={player.job} size="default" />
            <p>{player.name}</p>
        </div>
    )
}

const container = (props: PropsType) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 8px;
    width: 102px;
    height: 102px;
    padding: 11px 14px;
    color: ${VariablesCSS.day};
    font-family: 'Cafe24Ssurround', sans-serif;
    font-size: 14px;
    text-align: center;
    background-color: ${VariablesCSS.white30};
    border-radius: 15px;

    & p {
        display: flex;
        align-items: center;
        flex: 1;
    }

    ${!props.player.isAlive &&
    `color: ${VariablesCSS.deadDay};
    background: none;`}
`
