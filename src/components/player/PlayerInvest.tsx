/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import JobIcon from '../svg/JobIcon'
import { Job } from '../../type'

type PropsType = {
    job: Job
    name: string
}

export default function PlayerInvest({ job, name }: PropsType) {
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
                background-color: ${VariablesCSS.light15};
                color: ${VariablesCSS.night};
                font-family: 'Cafe24Ssurround', sans-serif;
                font-size: 20px;
                text-align: center;
            `}
        >
            <JobIcon job={job} size="big" color="night" />
            <p>{name}</p>
        </div>
    )
}
