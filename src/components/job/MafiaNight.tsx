/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Player } from '../../type'
import AppContainerCSS from '../layout/AppContainerCSS'
import PlayerGrid from '../player/PlayerGrid'
import PlayerNight from '../player/PlayerNight'
import { VariablesCSS } from '../../styles/VariablesCSS'
import SmallButton from '../button/SmallButton'
import { useState } from 'react'
import TopNight from '../top/TopNight'

interface Props {
    isAlive: boolean
    players: Player[]
}
export const MafiaNight = ({ players, isAlive }: Props) => {
    const description = css`
        margin: 36px auto;
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 18px;
        text-align: center;
        color: ${VariablesCSS.light};
    `
    const middle = css`
        height: calc(100% - ${VariablesCSS.top});
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    `
    const [check, setCheck] = useState(-1)
    return (
        <AppContainerCSS background="night">
            <div css={middle}>
                <div css={description}>오늘밤 죽일 사람을 지목해주세요.</div>
                <PlayerGrid>
                    {players.map((player, i) => (
                        <PlayerNight player={player} key={i + 1} index={i + 1} myJob={'MAFIA'} />
                    ))}
                </PlayerGrid>

                {/* 안죽이기 */}
                <input
                    type="radio"
                    name="vote"
                    id="0"
                    css={css`
                    display: none;
                    &:checked + label > div{
                        color: ${VariablesCSS.light};
                        background-color: ${VariablesCSS.kill};
                `}
                    checked={check === 0}
                    onChange={() => setCheck(0)}
                />
                <label
                    htmlFor="0"
                    css={css`
                        margin: 60px auto 16px;
                        display: flex;
                        justify-content: center;
                    `}
                >
                    <SmallButton text="안죽이기" color="night" />
                </label>
            </div>
        </AppContainerCSS>
    )
}
