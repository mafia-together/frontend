/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppContainerCSS from "../components/layout/AppContainerCSS";
import TopEnter from "../components/top/TopEnter";
import { VariablesCSS } from "../styles/VariablesCSS";
import BigButton from "../components/button/BigButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerGrid from "../components/player/PlayerGrid";
import PlayerWaiting from "../components/player/PlayerWaiting";

export default function WaitingRoom() {
    /* css */
    const middle = css`
        height: calc(
            100vh - ${VariablesCSS.top} - ${VariablesCSS.bigbutton} - ${VariablesCSS.margin}
        );
    `;
    const textGroup = css`
        margin-top: 16px;
        margin-bottom: 32px;
        font-family: "Cafe24Ssurround", sans-serif;
        color: ${VariablesCSS.light};
        text-align: center;
    `;

    const subTitle = css`
        font-size: 24px;
    `;

    const number = css`
        font-size: 20px;
    `;

    const bottom = css`
        position: absolute;
        bottom: 0;
        width: 100%;
        margin-bottom: ${VariablesCSS.margin};
    `;

    const dimmed = css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        margin-left: -${VariablesCSS.margin};
        margin-right: -${VariablesCSS.margin};
        background-color: rgba(0, 0, 0, 0.7);
    `;

    const modalInner = css`
        position: absolute;
        top: 50%;
        left: 50%;
        box-sizing: border-box;
        width: 95%;
        height: 250px;
        background: linear-gradient(118.95deg, #dfcfeb 0%, #c9abca 100%);
        border: 5px solid #ffffff;
        border-radius: 15px;
        transform: translate(-50%, -50%);
    `;

    const modalTitle = css`
        display: flex;
        justify-content: center;
        margin-top: 16px;

        font-family: "WAGURITTF", serif;
        font-size: ${VariablesCSS.title};
        color: ${VariablesCSS.night};
    `;

    const close = css`
        position: absolute;
        top: 7px;
        right: 10px;
        cursor: pointer;
    `;

    const inviteLinkCopyCss = css`
        display: flex;
        gap: 10px;
        margin: 35px auto 24px;
        padding: 17px 30px;
        font-family: "Cafe24Ssurround", serif;
        font-size: 18px;
        color: ${VariablesCSS.night};
        border-radius: 15px;
        background-color: rgba(240, 238, 243, 0.5);
        box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);
        transition-property: box-shadow transform;
        transition-duration: 0.1s;
        cursor: pointer;

        &:active {
            box-shadow: inset -1px -1px 1px rgba(0, 0, 0, 0.25);
            transform: translate(0.5px, 1px);
        }
    `;

    const inviteCodeContainer = css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        font-family: "Cafe24Ssurround", serif;
    `;

    const inviteCodeDescription = css`
        color: rgba(77, 61, 77, 0.8);
        font-size: 18px;
    `;

    const inviteCodeCss = css`
        color: ${VariablesCSS.night};
        font-size: 20px;
    `;

    /* 참가목록 받아오기 */
    const players: { name: string; isAlive: boolean }[] = [
        {
            name: "name",
            isAlive: true,
        },
        {
            name: "일이삼사오육칠팔구십",
            isAlive: true,
        },
        {
            name: "일이삼",
            isAlive: true,
        },
        {
            name: "일이삼사오육칠팔구십",
            isAlive: true,
        },
        {
            name: "일이삼사오육칠팔구십",
            isAlive: true,
        },
        {
            name: "일이삼사오육칠팔구십",
            isAlive: true,
        },
        {
            name: "일이삼사오육칠팔구십",
            isAlive: true,
        },
    ];

    /* 초대하기 모달띄우기 */
    const [openModal, setOpenModal] = useState(false);
    const onModal = () => {
        setOpenModal(true);
    };

    const onClose = () => {
        setOpenModal(false);
    };

    /* 게임시작 */
    const navigate = useNavigate();
    const onGameStart = () => {
        //api 보내기
        //성공시
        navigate("/day");
    };

    return (
        <AppContainerCSS>
            <div>
                <TopEnter use="waitingRoom" onModal={onModal} />
                <div css={middle}>
                    <div css={textGroup}>
                        <p css={subTitle}>참가목록</p>
                        <p css={number}>4/6</p>
                    </div>
                    <PlayerGrid>
                        {players.map((player, i) => (
                            <PlayerWaiting name={player.name} key={i} />
                        ))}
                    </PlayerGrid>
                </div>
                <div css={bottom} onClick={onGameStart}>
                    <BigButton vatiety="emphasis" use="gameStart" />
                </div>

                {openModal ? (
                    <div>
                        <div css={dimmed}></div>
                        <div css={modalInner}>
                            <div css={modalTitle}>
                                <p>초대하기</p>
                                <button css={close} onClick={onClose}>
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.343 12.343C12.5759 12.1098 12.8526 11.9247 13.1571 11.7984C13.4616 11.6722 13.788 11.6072 14.1177 11.6072C14.4474 11.6072 14.7738 11.6722 15.0783 11.7984C15.3828 11.9247 15.6595 12.1098 15.8924 12.343L25.0004 21.4476L34.1083 12.343C34.3414 12.11 34.6181 11.9251 34.9226 11.799C35.2271 11.6728 35.5534 11.6079 35.883 11.6079C36.2126 11.6079 36.539 11.6728 36.8435 11.799C37.148 11.9251 37.4247 12.11 37.6577 12.343C37.8908 12.5761 38.0757 12.8528 38.2018 13.1573C38.3279 13.4618 38.3929 13.7881 38.3929 14.1177C38.3929 14.4473 38.3279 14.7737 38.2018 15.0782C38.0757 15.3827 37.8908 15.6594 37.6577 15.8925L28.5531 25.0004L37.6577 34.1084C38.1284 34.579 38.3929 35.2174 38.3929 35.8831C38.3929 36.5487 38.1284 37.1871 37.6577 37.6578C37.1871 38.1285 36.5487 38.3929 35.883 38.3929C35.2174 38.3929 34.579 38.1285 34.1083 37.6578L25.0004 28.5532L15.8924 37.6578C15.4217 38.1285 14.7833 38.3929 14.1177 38.3929C13.4521 38.3929 12.8137 38.1285 12.343 37.6578C11.8723 37.1871 11.6079 36.5487 11.6079 35.8831C11.6079 35.2174 11.8723 34.579 12.343 34.1084L21.4476 25.0004L12.343 15.8925C12.1097 15.6595 11.9247 15.3829 11.7984 15.0783C11.6721 14.7738 11.6071 14.4474 11.6071 14.1177C11.6071 13.7881 11.6721 13.4617 11.7984 13.1571C11.9247 12.8526 12.1097 12.576 12.343 12.343Z"
                                            fill="#35063D"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <button css={inviteLinkCopyCss}>
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.6667 7.521H3.33334C2.41417 7.521 1.66667 8.2685 1.66667 9.18766V17.521C1.66667 18.4402 2.41417 19.1877 3.33334 19.1877H11.6667C12.5858 19.1877 13.3333 18.4402 13.3333 17.521V9.18766C13.3333 8.2685 12.5858 7.521 11.6667 7.521Z"
                                        fill="#35063D"
                                    />
                                    <path
                                        d="M16.6667 2.521H8.33334C7.89131 2.521 7.46739 2.69659 7.15483 3.00915C6.84227 3.32171 6.66667 3.74564 6.66667 4.18766V5.85433H13.3333C13.7754 5.85433 14.1993 6.02992 14.5119 6.34249C14.8244 6.65505 15 7.07897 15 7.521V14.1877H16.6667C17.1087 14.1877 17.5326 14.0121 17.8452 13.6995C18.1577 13.3869 18.3333 12.963 18.3333 12.521V4.18766C18.3333 3.74564 18.1577 3.32171 17.8452 3.00915C17.5326 2.69659 17.1087 2.521 16.6667 2.521Z"
                                        fill="#35063D"
                                    />
                                </svg>
                                초대링크 복사
                            </button>
                            <div css={inviteCodeContainer}>
                                <p css={inviteCodeDescription}>초대코드</p>
                                <p css={inviteCodeCss}>X30F53</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </AppContainerCSS>
    );
}
