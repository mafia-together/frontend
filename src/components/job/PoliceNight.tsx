/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerGrid from '../player/PlayerGrid'
import { Player } from '../../type'
import PlayerNight from '../player/PlayerNight'
import ModalContainer from '../modal/ModalContainer'
import { useEffect, useState } from 'react'
import InvestResult from '../modal/InvestResult'
import { middle } from '../../pages/Night'

interface Props {
    isAlive: boolean
    players: Player[]
}
export const PoliceNight = ({ players, isAlive }: Props) => {
    const description = css`
        margin: 36px auto;
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 18px;
        text-align: center;
        color: ${VariablesCSS.light};
    `
    const [check, setCheck] = useState<number>(-1)
    const [openModal, setOpenModal] = useState<boolean>(false)
    useEffect(() => {
        ;(async () => {
            if (check === -1) {
                return
            }
            setOpenModal(true)
        })()
    }, [check, players])

    return (
        <>
            <div css={middle}>
                <div css={description}>
                    {isAlive ? '마피아로 의심되는 사람을 조사하세요.' : '밤이 지나가고 있습니다..'}
                </div>
                <PlayerGrid>
                    {players.map((player, i) => (
                        <PlayerNight
                            player={player}
                            key={i + 1}
                            index={i + 1}
                            myJob={'POLICE'}
                            {...(isAlive && { nowVoteResult: check })}
                            {...(isAlive && { setCheck: setCheck })}
                        />
                    ))}
                </PlayerGrid>
            </div>
            {/* 경찰: 조사하기 */}
            <ModalContainer isOpen={openModal}>
                <InvestResult target={players[check - 1]?.name} />
            </ModalContainer>
        </>
    )
}
