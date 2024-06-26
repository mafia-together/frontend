/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import TopEnter from '../components/top/TopEnter'
import { VariablesCSS } from '../styles/VariablesCSS'
import CountGroup from '../components/etc/CountGroup'
import { useState } from 'react'
import JobCount from '../components/etc/JobCount'
import { useNavigate } from 'react-router-dom'
import BottomButton from '../components/button/BottomButton'
import { createRoom } from '../axios/http'

export function CreateRoom() {
    /* css */
    const middle = css`
        height: calc((var(--vh, 1vh) * 100) - ${VariablesCSS.top} - ${VariablesCSS.bottombutton});
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    `

    const totalCount = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 100%;
        margin-top: 34px;
        margin-bottom: 64px;
        font-family: 'Cafe24Ssurround';
        color: ${VariablesCSS.light};
    `

    const iconGroup = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        margin: 0 auto;
        font-size: 28px;
    `

    /* data */
    const [jobCount, setjobCount] = useState({
        total: 0,
        mafia: 0,
        doctor: 0,
        police: 0,
    })

    const onCountjob = (job: string, number: number) => {
        switch (job) {
            case 'MAFIA':
                if (number <= 2) {
                    setjobCount({ ...jobCount, mafia: number })
                }
                break
            case 'DOCTOR':
                setjobCount({ ...jobCount, doctor: number })
                break
            case 'POLICE':
                setjobCount({ ...jobCount, police: number })
                break
            default:
                setjobCount({ ...jobCount, total: number })
                break
        }
    }

    /* 이동 */
    const canCreateRoom = () => {
        return (
            jobCount.total > jobCount.mafia * 2 &&
            jobCount.total >= 3 &&
            jobCount.mafia >= 1 &&
            jobCount.total >= jobCount.mafia + jobCount.doctor + jobCount.police
        )
    }
    const navigate = useNavigate()
    const onCreateRoom = async () => {
        if (canCreateRoom()) {
            const roomCode = await createRoom(jobCount)
            navigate(`/name?code=${roomCode.code}`)
        }
    }

    return (
        <AppContainerCSS>
            <div>
                <TopEnter use="createRoom" />
                <div css={middle}>
                    <div css={totalCount}>
                        <div css={iconGroup}>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 20C17.25 20 14.8958 19.0208 12.9375 17.0625C10.9792 15.1042 10 12.75 10 10C10 7.25 10.9792 4.89583 12.9375 2.9375C14.8958 0.979167 17.25 0 20 0C22.75 0 25.1042 0.979167 27.0625 2.9375C29.0208 4.89583 30 7.25 30 10C30 12.75 29.0208 15.1042 27.0625 17.0625C25.1042 19.0208 22.75 20 20 20ZM0 40V33C0 31.5833 0.365 30.2817 1.095 29.095C1.825 27.9083 2.79333 27.0017 4 26.375C6.58333 25.0833 9.20833 24.115 11.875 23.47C14.5417 22.825 17.25 22.5017 20 22.5C22.75 22.5 25.4583 22.8233 28.125 23.47C30.7917 24.1167 33.4167 25.085 36 26.375C37.2083 27 38.1775 27.9067 38.9075 29.095C39.6375 30.2833 40.0017 31.585 40 33V40H0Z"
                                    fill="#F8F8F8"
                                />
                            </svg>
                            <p>총인원</p>
                        </div>
                        <CountGroup job="total" count={jobCount.total} onCountJob={onCountjob} />
                    </div>
                    <JobCount job="MAFIA" count={jobCount.mafia} onCountJob={onCountjob} />
                    <JobCount job="DOCTOR" count={jobCount.doctor} onCountJob={onCountjob} />
                    <JobCount job="POLICE" count={jobCount.police} onCountJob={onCountjob} />
                </div>
                <div onClick={onCreateRoom}>
                    <BottomButton use="complete" ready={canCreateRoom()} />
                </div>
            </div>
        </AppContainerCSS>
    )
}
