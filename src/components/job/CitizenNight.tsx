/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Player } from '../../type'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerGrid from '../player/PlayerGrid'
import PlayerNight from '../player/PlayerNight'
import { middle } from '../../pages/Night'

interface PropsType {
    isAlive: boolean
    players: Player[]
}
export const CitizenNight = (props: PropsType) => {
    const { players, isAlive } = props

    return (
        <div css={middle}>
            <div css={description}>
                {isAlive ? '오늘밤은 무사하기를..' : '밤이 지나가고 있습니다..'}
            </div>
            <PlayerGrid>
                {players.map((player, i) => (
                    <PlayerNight player={player} key={i + 1} index={i + 1} myJob={'CITIZEN'} />
                ))}
            </PlayerGrid>
        </div>
    )
}

const description = css`
    margin: 36px auto;
    font-family: 'Cafe24Ssurround', sans-serif;
    font-size: 18px;
    text-align: center;
    color: ${VariablesCSS.light};
`
