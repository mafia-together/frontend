/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import { useEffect, useState } from 'react'
import TopDay from '../components/top/TopDay'
import ModalContainer from '../components/modal/ModalContainer'
import Vote from '../components/modal/Vote'
import ViewRole from '../components/modal/ViewRole'
import NoticeMyJob from '../components/modal/NoticeMyJob'
import NoticeDead from '../components/modal/NoticeDead'
import { Chats } from '../components/chat/Chats'
import { ChatInput } from '../components/chat/ChatInput'
import { useRecoilState } from 'recoil'
import { gameRound, lastDeadPlayer, roomInfoState } from '../recoil/roominfo/atom'
import { getMyJob } from '../axios/http'
import { Job, Status } from '../type'
import VoteResult from '../components/modal/VoteResult'

type PropsType = {
    roomsStatus: Status
}

export default function Day({ roomsStatus }: PropsType) {
    const gameMessage = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - ${VariablesCSS.top});
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 24px;
        color: ${VariablesCSS.day};
        animation: smoothshow 0.8s;
    `

    const middle = css`
        height: calc(100% - ${VariablesCSS.top} - 55px - 20px);
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    `

    /* 공지모달 */
    const [descriptionTime, setDescriptionTime] = useState(true)
    const [noticeTime, setNoticeTime] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDescriptionTime(false)
            setNoticeTime(true)
        }, 3000)

        setTimeout(() => {
            setNoticeTime(false)
        }, 6000)
    }, [])

    // 라운드 (몇일차)
    const [gameRoundState] = useRecoilState(gameRound)

    // 내 직업공지
    const [myJob, setMyJob] = useState<Job>('CITIZEN')
    useEffect(() => {
        (async () => {
            const myJobResponse = await getMyJob()
            setMyJob(myJobResponse.job)
        })()
    }, [])

    // 전날밤 사망공지
    const [lastDeadPlayerStatus] = useRecoilState(lastDeadPlayer)

    /* 방 정보 */
    // 시간
    const [roominfo] = useRecoilState(roomInfoState)
    const [lastTime, setLastIime] = useState(
        +new Date(roominfo.endTime) - +new Date(roominfo.startTime)
    )
    useEffect(() => {
        const intervalCode = setInterval(() => {
            setLastIime(Math.round((+new Date(roominfo.endTime) - +new Date()) / 1000))
        })

        return () => clearInterval(intervalCode)
    }, [])

    // 내가 살아있는지
    const isAlive = roominfo.isAlive

    /* 미리 투표하기 */
    const [openModal, setOpenModal] = useState(false)
    const onOpenModal = () => {
        setOpenModal(!openModal)
    }

    /* 투표시간 */
    const [voteState, setVoteStatus] = useState('')
    if (roomsStatus === 'VOTE') {
        if (lastTime <= 0) {
            //낮 시간이 끝났음
            setVoteStatus('timeUp')
        } else {
            //모든 플레이어가 투표를 완료했음
            setVoteStatus('voteAll')
        }
    }

    /* 투표결과 */
    const [voteResultTime, setVoteResultTime] = useState(false)
    if (roomsStatus === 'VOTE_RESULT') {
        setVoteResultTime(true)
    }
    return (
        <AppContainerCSS background="day">
            {descriptionTime ? (
                <p css={gameMessage}>낮이 되었습니다.</p> // 채팅
            ) : (
                <div>
                    <TopDay isAlive={isAlive} onOpenModal={onOpenModal} lastTime={lastTime} />

                    <>
                        <div css={middle}>
                            <Chats />
                        </div>

                        {/* 살아있는 경우에만 input창이 보인다. */}
                        {isAlive && <ChatInput />}
                    </>

                    {/* 공지 모달 */}
                    <ModalContainer isOpen={noticeTime} openMotion={false}>
                        {gameRoundState === 1 ? (
                            // 직업공지
                            <NoticeMyJob name={'지윤짱은 css천재'} myJob={myJob} />
                        ) : (
                            // 전날밤 사망공지
                            <NoticeDead yesterdayDeadPlayer={lastDeadPlayerStatus}></NoticeDead>
                        )}
                    </ModalContainer>

                    <ModalContainer isOpen={openModal}>
                        {isAlive ? (
                            /* 투표모달 */
                            <Vote onOpenModal={onOpenModal} />
                        ) : (
                            /* 직업보기모달 */
                            <ViewRole onOpenModal={onOpenModal} />
                        )}
                    </ModalContainer>

                    {/* 시간이 다 됨 */}
                    <ModalContainer isOpen={voteState === 'timeUp'}>
                        <Vote timeup={voteState === 'timeUp'} />
                    </ModalContainer>

                    {/* 모두 투표함 */}
                    <ModalContainer isOpen={voteState === 'voteAll'}>
                        <Vote voteAll={voteState === 'voteAll'} />
                    </ModalContainer>

                    {/* 투표결과 */}
                    <ModalContainer isOpen={voteResultTime}>
                        <VoteResult deadPlayer={lastDeadPlayerStatus} />
                    </ModalContainer>
                </div>
            )}
        </AppContainerCSS>
    )
}
