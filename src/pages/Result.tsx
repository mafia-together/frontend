/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../styles/VariablesCSS'
import AppContainerCSS from '../components/layout/AppContainerCSS'
import TopResult from '../components/top/TopResult'
import PlayerResult from '../components/player/PlayerResult'
import { useEffect, useState } from 'react'
import { getRoomsResults } from '../axios/http'
import { RoomsResults } from '../type'

export default function Result() {
    const [roomsResults, setRoomsResults] = useState<RoomsResults>()
    useEffect(() => {
        ;(async () => {
            const roomsResults = await getRoomsResults()
            setRoomsResults(roomsResults)
        })()
    }, [roomsResults])
    if (!roomsResults) {
        return <></>
    }

    return (
        <AppContainerCSS background={roomsResults.winnerJob === 'MAFIA' ? 'night' : 'day'}>
            <div>
                <TopResult daynight={roomsResults.winnerJob === 'MAFIA' ? 'night' : 'day'} />

                <div css={middle}>
                    <div css={winner(roomsResults)}>
                        <div css={description(roomsResults)}>
                            {roomsResults.winnerJob === 'MAFIA' ? (
                                <svg
                                    width="41"
                                    height="41"
                                    viewBox="0 0 41 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_351_2775)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.02656 23.1892L10.2099 13.7059C10.2951 13.0236 10.52 12.3663 10.8707 11.7749C11.2214 11.1835 11.6902 10.6708 12.248 10.2689C12.8058 9.86688 13.4405 9.58425 14.1124 9.43863C14.7843 9.29301 15.4791 9.28753 16.1532 9.42254C17.5816 9.70921 19.1832 10.2892 20.6432 10.2892C22.1032 10.2892 23.7049 9.70921 25.1332 9.42254C25.8073 9.28779 26.5018 9.29346 27.1736 9.4392C27.8453 9.58494 28.4798 9.86762 29.0374 10.2696C29.5949 10.6715 30.0637 11.1841 30.4142 11.7754C30.7648 12.3666 30.9897 13.0238 31.0749 13.7059L32.2616 23.1892C34.1549 23.6625 37.3099 24.5792 37.3099 27.0209C37.3099 29.6809 33.6216 30.5575 31.6099 31.0042C28.7466 31.6409 24.8699 32.0209 20.6432 32.0209C16.4166 32.0209 12.5399 31.6409 9.67656 31.0042C7.66323 30.5575 3.97656 29.6809 3.97656 27.0209C3.97656 24.5792 7.13156 23.6625 9.02656 23.1892ZM10.3982 27.7509C9.35656 27.5192 8.54823 27.2675 7.97323 27.0209C8.54823 26.7742 9.35656 26.5209 10.3982 26.2909C12.9616 25.7209 16.5849 25.3542 20.6432 25.3542C24.7016 25.3542 28.3249 25.7209 30.8882 26.2909C31.9299 26.5225 32.7382 26.7742 33.3132 27.0209C32.7399 27.2675 31.9299 27.5192 30.8882 27.7509C28.3249 28.3209 24.7016 28.6875 20.6432 28.6875C16.5849 28.6875 12.9616 28.3209 10.3982 27.7509Z"
                                            fill="#F8F8F8"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_351_2775">
                                            <rect
                                                width="40"
                                                height="40"
                                                fill="white"
                                                transform="translate(0.643555 0.354248)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : (
                                <svg
                                    width="41"
                                    height="41"
                                    viewBox="0 0 41 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="14.6436"
                                        cy="15.6042"
                                        r="2.5"
                                        fill="#210909"
                                        fill-opacity="0.8"
                                    />
                                    <circle
                                        cx="27.6436"
                                        cy="15.6042"
                                        r="2.5"
                                        fill="#210909"
                                        fill-opacity="0.8"
                                    />
                                    <path
                                        d="M9.14355 24.1042C9.14355 24.1042 11.1436 27.6042 21.1436 27.6042C31.1436 27.6042 32.1436 24.1043 32.1436 24.1043"
                                        stroke="#210909"
                                        stroke-opacity="0.8"
                                        stroke-width="3.5"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            )}

                            <p>{roomsResults.winnerJob === 'MAFIA' ? '마피아' : '시민'} 승리</p>
                        </div>
                        <div css={winnerGroup}>
                            {roomsResults.winner.map((winnerPlayer) => (
                                <PlayerResult
                                    victory={roomsResults.winnerJob}
                                    player={winnerPlayer}
                                />
                            ))}
                        </div>
                    </div>
                    <div css={loserGroup}>
                        {roomsResults.loser.map((loserPlayer) => (
                            <PlayerResult victory={roomsResults.winnerJob} player={loserPlayer} />
                        ))}
                    </div>
                </div>
            </div>
        </AppContainerCSS>
    )
}

const middle = () => css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: calc((var(--vh, 1vh) * 100) - ${VariablesCSS.top} - ${VariablesCSS.bottombutton});
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const winner = (roomsResults: RoomsResults) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    width: 92%;
    margin-top: 30px;
    padding: 30px;
    ${roomsResults.winnerJob === 'MAFIA'
        ? `background-color: rgba(217, 217, 217, 0.2);`
        : ` background-color: rgba(255, 255, 255, 0.3);`}

    border-radius: 15px;
`

const description = (roomsResults: RoomsResults) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    ${roomsResults.winnerJob === 'MAFIA'
        ? `color: ${VariablesCSS.light};`
        : `color: ${VariablesCSS.day};`}

    font-family: "Cafe24Ssurround", sans-serif;
    font-size: ${VariablesCSS.default};
    word-break: keep-all;
`

const winnerGroup = () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const loserGroup = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
`
