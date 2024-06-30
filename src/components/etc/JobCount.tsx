/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import JobIcon from '../svg/JobIcon'
import CountGroup from './CountGroup'
import CheckButton from '../button/CheckButton'
import { SpecialJob } from '../../type'

type PropsType = {
    job: SpecialJob
    count: number
    onCountJob: (job: string, number: number) => void
}

export default function JobCount({ job, count, onCountJob }: PropsType) {
    const jobName = {
        MAFIA: '마피아',
        DOCTOR: '의사',
        POLICE: '경찰',
    }

    const jobCountContainer = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        margin-bottom: 16px;
        color: ${VariablesCSS.light};
        font-size: 28px;
        font-family: 'Cafe24Ssurround';
    `

    const jobGroup = css`
        display: flex;
        gap: 16px;
        color: ${VariablesCSS.light};
    `

    const jobText = css`
        display: block;
        padding-top: 5px;
    `

    return (
        <div css={jobCountContainer}>
            <div css={jobGroup}>
                <JobIcon job={job} size="default" />
                <p css={jobText}>{jobName[job]}</p>
            </div>
            {job === 'MAFIA' ? (
                <CountGroup job={job} count={count} onCountJob={onCountJob} />
            ) : (
                <CheckButton job={job} count={count} onCountJob={onCountJob} />
            )}
        </div>
    )
}
