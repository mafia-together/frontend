/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import { useEffect, useState } from 'react'
import TopDay from '../components/top/TopDay'
import ModalContainer from '../components/modal/ModalContainer'
import Vote from '../components/modal/Vote'
import ViewJob from '../components/modal/ViewJob'
import NoticeMyJob from '../components/modal/NoticeMyJob'
import NoticeDead from '../components/modal/NoticeDead'
import { Chats } from '../components/chat/Chats'
import { ChatInput } from '../components/chat/ChatInput'
import { useRecoilState } from 'recoil'
import { gameRound, lastDeadPlayer, roomInfoState } from '../recoil/roominfo/atom'
import { getMyJob, getRoomNightResultDead } from '../axios/http'
import { Dead, Job, Status } from '../type'
import VoteResult from '../components/modal/VoteResult'

type PropsType = {
    statusType: Status
}

export default function Day({ statusType }: PropsType) {
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

    // 라운드 (몇일차)
    const [gameRoundState] = useRecoilState(gameRound)

    // 내 직업공지
    const [myJob, setMyJob] = useState<Job>('CITIZEN')
    useEffect(() => {
        ;(async () => {
            const myJobResponse = await getMyJob()
            setMyJob(myJobResponse.job)
        })()
    }, [])

    // 전날밤
    const [dead, setDead] = useState<Dead>(null)
    useEffect(() => {
        ;(async () => {
            const deadResponse = await getRoomNightResultDead()
            setDead(deadResponse.dead)
        })()
    }, [])

    /* 방 정보 */
    const [roomInfo] = useRecoilState(roomInfoState)

    // 내가 살아있는지
    const isAlive = roomInfo?.isAlive

    /* 미리 투표하기 */
    const [openModal, setOpenModal] = useState(false)
    const onToggleModal = () => {
        setOpenModal(!openModal)
    }

    /* 투표시간 */
    const [voteState, setVoteStatus] = useState('')
    useEffect(() => {
        if (statusType === 'VOTE') {
            if (Math.round((+new Date(roomInfo.endTime) - +new Date()) / 1000) <= 1) {
                //낮 시간이 끝났음
                setVoteStatus('timeUp')
            } else {
                //모든 플레이어가 투표를 완료했음
                setVoteStatus('voteAll')
            }
        }
    }, [statusType])

    /* 투표결과 */
    return (
        <AppContainerCSS background="day">
            {/* INTRO TIME */}
            {statusType === 'DAY_INTRO' || statusType === 'NOTICE' ? (
                <>
                    <p css={gameMessage}>낮이 되었습니다.</p>

                    {/* 공지 모달 TIME*/}
                    <ModalContainer isOpen={statusType === 'NOTICE'} openMotion={false}>
                        {gameRoundState === 1 ? (
                            // 직업공지
                            <NoticeMyJob name={roomInfo?.myName || ''} myJob={myJob} />
                        ) : (
                            // 전날밤 사망공지
                            <NoticeDead dead={dead}></NoticeDead>
                        )}
                    </ModalContainer>
                </>
            ) : (
                <div>
                    <TopDay
                        isAlive={isAlive ? true : false}
                        onOpenModal={onToggleModal}
                        statusType={statusType}
                    />

                    <>
                        <div css={middle}>
                            <Chats />
                        </div>

                        {/* 살아있는 경우에만 input창이 보인다. */}
                        {isAlive && <ChatInput />}
                    </>

                    <ModalContainer isOpen={openModal}>
                        {isAlive ? (
                            /* 투표모달 */
                            <Vote onOpenModal={onToggleModal} />
                        ) : (
                            /* 직업보기모달 */
                            <ViewJob onOpenModal={onToggleModal} />
                        )}
                    </ModalContainer>

                    {/* 시간이 다 됨 */}
                    <ModalContainer isOpen={voteState === 'timeUp' && roomInfo.isAlive}>
                        <Vote timeup={voteState === 'timeUp'} />
                    </ModalContainer>

                    {/* 모두 투표함 */}
                    <ModalContainer isOpen={voteState === 'voteAll' && roomInfo.isAlive}>
                        <Vote voteAll={voteState === 'voteAll'} />
                    </ModalContainer>

                    {/* 죽었는데 투표시간이 되었을 때 */}
                    <ModalContainer isOpen={!roomInfo.isAlive && statusType == 'VOTE'}>
                        <ViewJob onOpenModal={onToggleModal} voteTime={statusType == 'VOTE'} />
                    </ModalContainer>

                    {/* 투표결과 */}
                    <ModalContainer isOpen={statusType === 'VOTE_RESULT'}>
                        <VoteResult />
                    </ModalContainer>
                </div>
            )}
        </AppContainerCSS>
    )
}
