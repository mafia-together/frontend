/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import JobIcon from '../svg/JobIcon'
import { Color, Job } from '../../type'

type PropsType = {
    color: Color
    job: Job
    name: string
}

export default function PlayerBig({ color, job, name }: PropsType) {
    return (
        <div
            css={css`
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                width: 220px;
                height: 220px;
                padding: 10px 60px;
                border-radius: 15px;
                background-color: ${VariablesCSS.white30};
                color: ${VariablesCSS[color]};
                font-family: 'Cafe24Ssurround', sans-serif;
                font-size: 20px;
                text-align: center;
                word-break: break-all;
            `}
        >
            <JobIcon job={job} size="big" />
            <p>{name}</p>
        </div>
    )
}
