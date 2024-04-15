/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppContainerCSS } from "../styles/AppContainerCSS";
import TopDay from "../components/top/TopDay";
import { VariablesCss } from "../styles/VariablesCss";
import ModalConainer from "../components/modal/ModalConainer";
import NoticeRole from "../components/modal/NoticeRole";
import { useEffect, useState } from "react";
import { ConstantsCss } from "../styles/ConstantsCSS";
import NoticeDead from "../components/modal/NoticeDead";
import styled from "@emotion/styled/macro";
import ChatGroup from "../components/chat/ChatGroup";
import Vote from "../components/modal/Vote";
import ViewRole from "../components/modal/ViewRole";

export default function Day() {
    const gameMessage = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100% - ${VariablesCss.top});
        font-family: "Cafe24Ssurround", sans-serif;
        font-size: 24px;
        color: ${VariablesCss.day};
        animation: smoothshow 0.8s;
    `;

    const ChatInput = styled.input`
        box-sizing: border-box;
        flex-flow: 1;
        width: 100%;
        margin-right: 4px;
        padding: 11px 20px;
        font-size: 16px;
        font-family: "KCC-Hanbit", sans-serif;
        color: ${VariablesCss.day};
        background-color: rgba(255, 255, 255, 0.2);
        border: 3px solid #ffffff;
        border-radius: 15px;

        &::placeholder {
            color: ${VariablesCss.day30};
        }

        &:focus {
            outline: 3px solid #ffffff;
            background-color: rgba(255, 255, 255, 0.4);
        }
    `;

    /* 공지 */
    const [role, setRole] = useState(ConstantsCss.citizen);

    const [descriptionTime, setDescriptionTime] = useState(true);
    const [noticeTime, setNoticeTime] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setNoticeTime(true);
        }, 1000);

        setTimeout(() => {
            setNoticeTime(false);
            setDescriptionTime(false);
        }, 4000);
    }, []);

    /* 시간 */
    // let date = new Date();
    const [time, setTime] = useState(1);
    // const onTime = () => {
    //     let now = new Date();
    //     console.log(date - now);
    //     setTime((now.getTime() - date.getTime()) / 1000);
    // };
    // useEffect(() => {
    //     setInterval(onTime, 1000);

    //     //return () => clearInterval(timeInterval);
    // }, []);

    const [round, setRound] = useState(1);
    const [yesterdayDead, setYesterdayDead] = useState(false);

    /* 내가 살아있는지 */
    const [isAlive, setIsAlive] = useState(true);

    /* 미리 투표하기 */
    const [openModal, setOpenModal] = useState(false);
    const onOpenModal = () => {
        setOpenModal(!openModal);
    };

    // 모두 미리 투표했는지
    const [allVote, setAllVote] = useState(false);

    return (
        <AppContainerCSS background="day">
            <div>
                <TopDay isAlive={isAlive} onOpenModal={onOpenModal} time={time} />
                {descriptionTime ? (
                    <p css={gameMessage}>낮이 되었습니다.</p> // 채팅
                ) : (
                    <>
                        <div class="chat-day">
                            <ChatGroup />
                            <ChatGroup />
                            <ChatGroup />
                        </div>

                        {/* 살아있는 경우에만 input창이 보인다. */}
                        {isAlive && (
                            <div
                                css={css`
                                    position: absolute;
                                    bottom: 17px;
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                `}
                            >
                                <ChatInput
                                    type="text"
                                    name="chat"
                                    id="chat"
                                    placeholder="내용을 입력하세요."
                                />
                                <input
                                    type="submit"
                                    value="전송"
                                    css={css`
                                        font-family: "Cafe24Ssurround", sans-serif;
                                        padding: 18px 14px;
                                        font-size: 16px;
                                        color: ${VariablesCss.day};
                                        cursor: pointer;
                                    `}
                                />
                            </div>
                        )}
                    </>
                )}

                {openModal && (
                    <ModalConainer>
                        {isAlive ? (
                            /* 투표모달 */
                            <Vote onOpenModal={onOpenModal} />
                        ) : (
                            /* 직업보기모달 */
                            <ViewRole onOpenModal={onOpenModal} />
                        )}
                    </ModalConainer>
                )}

                {/* 공지 모달 */}
                {noticeTime && (
                    <ModalConainer>
                        {round === 1 ? (
                            // 직업공지
                            <NoticeRole role={role} />
                        ) : (
                            // 사망공지
                            <NoticeDead yesterdayDead={yesterdayDead}></NoticeDead>
                        )}
                    </ModalConainer>
                )}

                {/* 시간이 다 됨 */}
                {time === 0 && (
                    <ModalConainer>
                        <Vote timeup={!time} />
                    </ModalConainer>
                )}

                {/* 모두 투표함 */}
                {allVote && (
                    <ModalConainer>
                        <Vote allVote={allVote} />
                    </ModalConainer>
                )}
            </div>
        </AppContainerCSS>
    );
}
