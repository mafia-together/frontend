/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import { useEffect, useState } from 'react'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import TopNight from '../components/top/TopNight'
import { getMyJob, getRoomsInfo } from '../axios/http'
import { MafiaNight } from '../components/job/MafiaNight'
import { CitizenNight } from '../components/job/CitizenNight'
import { Job, Player } from '../type'
import { PoliceNight } from '../components/job/PoliceNight'
import { DoctorNight } from '../components/job/DoctorNight'

export default function Night() {
    const middle = css`
        height: calc(100% - ${VariablesCSS.top});
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    `
    const [players, setPlayers] = useState<Player[]>([])
    const [myJob, setMyJob] = useState<Job>(null)
    useEffect(() => {
        (async () => {
            const jobResponse = await getMyJob()
            const roomsInfoResponse = await getRoomsInfo()
            setMyJob(jobResponse.job)
            setPlayers(roomsInfoResponse.players)
        })()
    }, [myJob, players])

    return (
        <AppContainerCSS background="night">
            <div>
                <TopNight />
                <div css={middle}>
                    {'MAFIA' === myJob && <MafiaNight players={players} />}
                    {'CITIZEN' === myJob && <CitizenNight players={players} />}
                    {'POLICE' === myJob && <PoliceNight players={players} />}
                    {'DOCTOR' === myJob && <DoctorNight players={players} />}
                </div>
            </div>
        </AppContainerCSS>
    )
}
