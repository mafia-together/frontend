/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import { Suspense, useEffect, useState } from 'react'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import TopNight from '../components/top/TopNight'
import { getMyJob, getRoomsInfo } from '../axios/http'
import { MafiaNight } from '../components/job/MafiaNight'
import { Job, RoomInfo, Status } from '../type'
import { PoliceNight } from '../components/job/PoliceNight'
import { DoctorNight } from '../components/job/DoctorNight'
import { CitizenNight } from '../components/job/CitizenNight'
import { Loading } from '../components/etc/Loading'

type PropsType = {
    statusType: Status
}
export const middle = css`
    height: calc(100% - ${VariablesCSS.top});
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default function Night({ statusType }: PropsType) {
    const gameMessage = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - ${VariablesCSS.top});
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 24px;
        color: ${VariablesCSS.light};
        animation: smoothshow 0.8s;
    `

    const [roomInfo, setRoomInfo] = useState<RoomInfo>()
    const [myJob, setMyJob] = useState<Job | null>(null)
    useEffect(() => {
        ;(async () => {
            const jobResponse = await getMyJob()
            const roomInfoResponse = await getRoomsInfo()
            setMyJob(jobResponse.job)
            setRoomInfo(roomInfoResponse)
        })()
    }, [myJob, roomInfo])

    if (!roomInfo) {
        return <></>
    }

    return (
        <AppContainerCSS background="night">
            <Suspense fallback={<Loading />}>
                {/* INTRO TIME */}
                {statusType === 'NIGHT_INTRO' ? (
                    <>
                        <p css={gameMessage}>밤이 찾아왔습니다</p>
                    </>
                ) : (
                    <div>
                        <TopNight />
                        <>
                            {'MAFIA' === myJob && (
                                <MafiaNight players={roomInfo.players} isAlive={roomInfo.isAlive} />
                            )}
                            {'CITIZEN' === myJob && (
                                <CitizenNight
                                    players={roomInfo.players}
                                    isAlive={roomInfo.isAlive}
                                />
                            )}
                            {'POLICE' === myJob && (
                                <PoliceNight
                                    players={roomInfo.players}
                                    isAlive={roomInfo.isAlive}
                                />
                            )}
                            {'DOCTOR' === myJob && (
                                <DoctorNight
                                    players={roomInfo.players}
                                    isAlive={roomInfo.isAlive}
                                />
                            )}
                        </>
                    </div>
                )}
            </Suspense>
        </AppContainerCSS>
    )
}
