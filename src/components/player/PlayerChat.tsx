/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import JobIcon from '../svg/JobIcon'
import { Job } from '../../type'
import { VariablesCSS } from '../../styles/VariablesCSS'

type PropsType = {
    job: Job
}

export default function PlayerChat({ job }: PropsType) {
    const container = css`
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 100%;
        color: ${VariablesCSS.day};
    `

    return (
        <div css={container}>
            <JobIcon size="small" job={job} />
        </div>
    )
}
