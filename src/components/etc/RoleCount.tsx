/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import JobIcon from '../svg/JobIcon'
import CountButton from '../button/CountButton'
import CheckButton from '../button/CheckButton'
import { SpecialJob } from '../../type'

type PropsType = {
    job: SpecialJob
    count: number
    onCountRole: (role: string, number: number) => void
}

export default function RoleCount({ job, count, onCountRole }: PropsType) {
    const roleName = {
        MAFIA: '마피아',
        DOCTOR: '의사',
        POLICE: '경찰',
    }

    const roleCountContainer = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        margin-bottom: 16px;
        color: ${VariablesCSS.light};
        font-size: 28px;
        font-family: 'Cafe24Ssurround';
    `

    const roleGroup = css`
        display: flex;
        gap: 16px;
    `

    const roleText = css`
        display: block;
        padding-top: 5px;
    `

    return (
        <div css={roleCountContainer}>
            <div css={roleGroup}>
                <JobIcon job={job} size="default" color="light" />
                <p css={roleText}>{roleName[job]}</p>
            </div>
            {job === 'MAFIA' ? (
                <CountButton job={job} count={count} onCountRole={onCountRole} />
            ) : (
                <CheckButton job={job} count={count} onCountRole={onCountRole} />
            )}
        </div>
    )
}
