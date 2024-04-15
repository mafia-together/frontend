/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AppContainerCSS } from "../styles/AppContainerCSS";
import TopNight from "../components/top/TopNight";
import { VariablesCss } from "../styles/VariablesCss";
import PlayerGird from "../components/player/PlayerGird";
import PlayerVote from "../components/player/PlayerVote";
import PlayerNight from "../components/player/PlayerNight";
import SmallButton from "../components/button/SmallButton";
import { useState } from "react";
import { ConstantsCss } from "../styles/ConstantsCSS";
import ModalConainer from "../components/modal/ModalConainer";
import InvestResult from "../components/modal/InvestResult";

export default function Night() {
    const middle = css`
        height: calc(100% - ${VariablesCss.top});
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    `;

    const description = css`
        margin: 36px auto;
        font-family: "Cafe24Ssurround", sans-serif;
        font-size: 18px;
        text-align: center;
        color: ${VariablesCss.light};
    `;

    /* 참가목록 받아오기 */
    const players = [
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
            isAlive: false,
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

    const [myRole, setMyRole] = useState("mafia");

    const [check, setCheck] = useState(-1);

    const [openModal, setOpenModal] = useState(true);

    return (
        <AppContainerCSS background="night">
            <div>
                <TopNight />
                <div css={middle}>
                    <div css={description}>마피아로 의심되는 사람을 조사하세요.</div>
                    <PlayerGird>
                        {players.map((player, i) => (
                            <PlayerNight
                                player={player}
                                key={i + 1}
                                index={i + 1}
                                myRole={myRole}
                            />
                        ))}
                    </PlayerGird>

                    {/* 안죽이기 */}
                    {myRole === ConstantsCss.mafia && (
                        <>
                            <input
                                type="radio"
                                name="vote"
                                id="0"
                                css={css`
                        display: none;
                        &:checked + label > div{
                            color: ${VariablesCss.light};
                            background-color: ${VariablesCss.kill};
                    `}
                                checked={check === 0}
                                onChange={() => setCheck(0)}
                            />
                            <label
                                for="0"
                                css={css`
                                    margin: 60px auto 16px;
                                    display: flex;
                                    justify-content: center;
                                `}
                            >
                                <SmallButton text="안죽이기" color={ConstantsCss.night} />
                            </label>
                        </>
                    )}

                    {/* 경찰: 조사하기 */}
                    {myRole === "police" && openModal && (
                        <ModalConainer>
                            <InvestResult />
                        </ModalConainer>
                    )}
                </div>
            </div>
        </AppContainerCSS>
    );
}
