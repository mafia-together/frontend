/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import { useEffect, useState } from 'react'
import TopDay from '../components/top/TopDay'
import ChatGroup from '../components/chat/ChatGroup'
import ModalContainer from '../components/modal/ModalContainer'
import Vote from '../components/modal/Vote'
import ViewRole from '../components/modal/ViewRole'
import NoticeRole from '../components/modal/NoticeRole'
import NoticeDead from '../components/modal/NoticeDead'
import { useChatQuery, useChatsQuery } from '../axios/http'

export default function Day() {
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

    const chatInput = css`
        box-sizing: border-box;
        flex-flow: 1;
        width: 100%;
        margin-right: 4px;
        padding: 11px 20px;
        font-size: 16px;
        font-family: 'KCC-Hanbit', sans-serif;
        color: ${VariablesCSS.day};
        background-color: rgba(255, 255, 255, 0.2);
        border: 3px solid #ffffff;
        border-radius: 15px;

        &::placeholder {
            color: ${VariablesCSS.day30};
        }

        &:focus {
            outline: 3px solid #ffffff;
            background-color: rgba(255, 255, 255, 0.4);
        }
    `

    /* 공지모달 */
    const [role, setRole] = useState('mafia')

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

    /* 시간 */
    const [time, setTime] = useState(0)

    const [round, setRound] = useState(1)
    const [yesterdayDead, setYesterdayDead] = useState(false)

    /* 내가 살아있는지 */
    const [isAlive, setIsAlive] = useState(true)

    /* 미리 투표하기 */
    const [openModal, setOpenModal] = useState(false)
    const onOpenModal = () => {
        setOpenModal(!openModal)
    }

    // 모두 미리 투표했는지
    const [allVote, setAllVote] = useState(false)
    const { chats } = useChatsQuery()

    return (
        <AppContainerCSS background="day">
            {descriptionTime ? (
                <p css={gameMessage}>낮이 되었습니다.</p> // 채팅
            ) : (
                <div>
                    <TopDay isAlive={isAlive} onOpenModal={onOpenModal} time={time} />

                    <>
                        <div css={middle}>
                            {/* 실제로 여기에다가 ChatGroup이 추가되는 형태로 이루어져야함 */}
                            {chats.map((chat: Chat) => (
                                <ChatGroup
                                    name={chat.name}
                                    content={chat.content}
                                    owner={chat.owner}
                                />
                            ))}
                        </div>

                        {/* 살아있는 경우에만 input창이 보인다. */}
                        {isAlive && (
                            <div
                                css={css`
                                    position: absolute;
                                    bottom: 17px;
                                    height: calc(55px + 17px);
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                `}
                            >
                                <input
                                    css={chatInput}
                                    type="text"
                                    name="chat"
                                    id="chat"
                                    placeholder="내용을 입력하세요."
                                />
                                <input
                                    type="submit"
                                    value="전송"
                                    css={css`
                                        font-family: 'Cafe24Ssurround', sans-serif;
                                        padding: 18px 14px;
                                        font-size: 16px;
                                        color: ${VariablesCSS.day};
                                        cursor: pointer;
                                    `}
                                />
                            </div>
                        )}
                    </>

                    {/* 공지 모달 */}
                    <ModalContainer isOpen={noticeTime} openMotion={false}>
                        {round === 1 ? (
                            // 직업공지
                            <NoticeRole role={role} />
                        ) : (
                            // 사망공지
                            <NoticeDead yesterdayDead={yesterdayDead}></NoticeDead>
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
                    <ModalContainer isOpen={!!time}>
                        <Vote timeup={!time} />
                    </ModalContainer>

                    {/* 모두 투표함 */}
                    <ModalContainer isOpen={allVote}>
                        <Vote allVote={allVote} />
                    </ModalContainer>
                </div>
            )}
        </AppContainerCSS>
    )
}
