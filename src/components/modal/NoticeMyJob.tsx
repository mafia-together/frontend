/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerBig from '../player/PlayerBig'
import { Job } from '../../type'
import { useEffect, useState } from 'react'
import { getMyJob } from '../../axios/http'

type PropsType = {
    name: string
}

export default function NoticeMyJob({ name }: PropsType) {
    const container = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${VariablesCSS.day};
        gap: 50px;
        height: 100%;
    `
    const description = css`
        font-family: 'DNFForgedBlade', sans-serif;
        font-weight: bold;
        font-size: 26px;
        text-align: center;
    `

    const text = {
        CITIZEN: '시민',
        MAFIA: '마피아',
        DOCTOR: '의사',
        POLICE: '경찰',
    }

    // 내 직업공지
    const [myJob, setMyJob] = useState<Job>('CITIZEN')
    useEffect(() => {
        ;(async () => {
            const myJobResponse = await getMyJob()
            setMyJob(myJobResponse.job)
        })()
    }, [])

    return (
        <div css={container}>
            <PlayerBig color="day" job={myJob} name={name} />
            <p css={description}>
                당신은 <br />
                {myJob && text[myJob]}입니다.
            </p>
        </div>
    )
}
