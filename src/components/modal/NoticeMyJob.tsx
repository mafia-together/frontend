/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerBig from '../player/PlayerBig'
import { Job } from '../../type'

type PropsType = {
    myJob: Job
}

export default function NoticeMyJob({ myJob }: PropsType) {
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

    return (
        <div css={container}>
            <PlayerBig color="day" job={myJob} />
            <p css={description}>
                당신은 <br />
                {myJob && text[myJob]}입니다.
            </p>
        </div>
    )
}
