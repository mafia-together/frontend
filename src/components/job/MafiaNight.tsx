/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Player } from '../../type'
import AppContainerCSS from '../layout/AppContainerCSS'
import PlayerGrid from '../player/PlayerGrid'
import PlayerNight from '../player/PlayerNight'
import { VariablesCSS } from '../../styles/VariablesCSS'
import SmallButton from '../button/SmallButton'
import { useEffect, useState } from 'react'
import { postSkill, useMafiaVoteResultQuery } from '../../axios/http'
import { middle } from '../../pages/Night'

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
    const { mafiaVoteResult } = useMafiaVoteResultQuery()
    let nowVoteResult = mafiaVoteResult.target === '' ? 0 : -1
    players.forEach((player, i) => {
        if (player.name === mafiaVoteResult.target) {
            nowVoteResult = i + 1
        }
    })
    const [check, setCheck] = useState(-1)
    useEffect(() => {
        (async () => {
            if (check === -1) {
                return
            }
            let targetName = ''
            players.forEach((player, i) => {
                if (check === i + 1) {
                    targetName = player.name
                    return
                }
            })
            await postSkill({ target: targetName })
        })()
    }, [check, players])

    return (
        <AppContainerCSS background="night">
            <div css={middle}>
                <div css={description}>
                    {isAlive
                        ? '오늘밤 죽일 사람을 지목해주세요.'
                        : '마피아가 죽일 사람을 지목하고 있습니다.'}
                </div>
                <PlayerGrid>
                    {players.map((player, i) => (
                        <PlayerNight
                            player={player}
                            key={i + 1}
                            index={i + 1}
                            myJob={'MAFIA'}
                            nowVoteResult={nowVoteResult}
                            {...(isAlive && { setCheck: setCheck })}
                        />
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
                    checked={nowVoteResult === 0}
                    onChange={() => isAlive && setCheck(0)}
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
