/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import { useEffect, useState } from 'react'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import TopNight from '../components/top/TopNight'
import { getMyJob, getRoomsInfo } from '../axios/http'
import { MafiaNight } from '../components/job/MafiaNight'
import { Job, RoomInfo } from '../type'
import { PoliceNight } from '../components/job/PoliceNight'
import { DoctorNight } from '../components/job/DoctorNight'
import { CitizenNight } from '../components/job/CitizenNight'

export const middle = css`
    height: calc(100% - ${VariablesCSS.top});
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default function Night() {
    const [roomInfo, setRoomInfo] = useState<RoomInfo>()
    const [myJob, setMyJob] = useState<Job | null>(null)
    useEffect(() => {
        (async () => {
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
            <div>
                <TopNight />
                <div css={middle}>
                    {'MAFIA' === myJob && (
                        <MafiaNight players={roomInfo.players} isAlive={roomInfo.isAlive} />
                    )}
                    {'CITIZEN' === myJob && (
                        <CitizenNight players={roomInfo.players} isAlive={roomInfo.isAlive} />
                    )}
                    {'POLICE' === myJob && (
                        <PoliceNight players={roomInfo.players} isAlive={roomInfo.isAlive} />
                    )}
                    {'DOCTOR' === myJob && (
                        <DoctorNight players={roomInfo.players} isAlive={roomInfo.isAlive} />
                    )}
                </div>
            </div>
        </AppContainerCSS>
    )
}
