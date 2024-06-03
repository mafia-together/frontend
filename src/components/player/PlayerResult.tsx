/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { Job } from '../../type'
import JobIcon from '../svg/JobIcon'

type PropsType = {
    victory: 'MAFIA' | 'CITIZEN'
    player: { name: string; isAlive: boolean; job: Job }
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

        ${victory === 'MAFIA'
            ? `color: ${VariablesCSS.light};
    background-color: rgba(255, 255, 255, 0.12);`
            : ` color: ${VariablesCSS.day};
    background-color: rgba(255, 255, 255, 0.3);`}
    `

    return (
        <div css={container}>
            <JobIcon job={player.job} size="default" />
            <p>{player.name}</p>
        </div>
    )
}
