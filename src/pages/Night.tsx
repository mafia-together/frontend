/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import { Suspense } from 'react'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import TopNight from '../components/top/TopNight'
import { MafiaNight } from '../components/job/MafiaNight'
import { Status } from '../type'
import { PoliceNight } from '../components/job/PoliceNight'
import { DoctorNight } from '../components/job/DoctorNight'
import { CitizenNight } from '../components/job/CitizenNight'
import { Loading } from '../components/etc/Loading'
import { useRecoilState } from 'recoil'
import { myJobState, roomInfoState } from '../recoil/roominfo/atom'

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

    const [roomInfo] = useRecoilState(roomInfoState)
    const [myJob] = useRecoilState(myJobState)

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
