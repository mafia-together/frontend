/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerInvest from '../player/PlayerInvest'
import { useEffect, useState } from 'react'
import { Job, SkillResponse } from '../../type'
import { postSkill } from '../../axios/http'

interface Props {
    target: string
}
export default function InvestResult({ target }: Props) {
    const [jobResult, setJobResult] = useState<Job>('CITIZEN')
    useEffect(() => {
        (async () => {
            const skillResponse: SkillResponse = await postSkill({ target: target })
            setJobResult(skillResponse.result)
        })()
    }, [target])

    const container = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${VariablesCSS.night};
        gap: 50px;
        height: 100%;
    `
    const description = css`
        font-family: 'DNFForgedBlade', sans-serif;
        font-weight: bold;
        font-size: 26px;
        text-align: center;

        ${jobResult === 'MAFIA' && `text-decoration: underline;`}
    `

    return (
        <div css={container}>
            <PlayerInvest job={jobResult} name={target} />
            <p css={description}>
                {jobResult === 'MAFIA' ? '마피아가 맞습니다' : '마피아가 아닙니다'}
            </p>
        </div>
    )
}
