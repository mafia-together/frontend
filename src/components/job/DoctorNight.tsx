/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Player } from '../../type'
import AppContainerCSS from '../layout/AppContainerCSS'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerGrid from '../player/PlayerGrid'
import PlayerNight from '../player/PlayerNight'

interface Props {
    isAlive: boolean
    players: Player[]
}
export const DoctorNight = ({ players, isAlive }: Props) => {
    const description = css`
        margin: 36px auto;
        font-family: 'Cafe24Ssurround', sans-serif;
        font-size: 18px;
        text-align: center;
        color: ${VariablesCSS.light};
    `
    return (
        <AppContainerCSS background="night">
            <>
                <div css={description}>
                    {isAlive ? '오늘밤 살릴 사람을 지목해주세요.' : '밤이 지나가고 있습니다..'}
                </div>
                <PlayerGrid>
                    {players.map((player, i) => (
                        <PlayerNight player={player} key={i + 1} index={i + 1} myJob={'DOCTOR'} />
                    ))}
                </PlayerGrid>
            </>
        </AppContainerCSS>
    )
}
