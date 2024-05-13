/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Player } from '../../type'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerGrid from '../player/PlayerGrid'
import PlayerNight from '../player/PlayerNight'
import AppContainerCSS from '../layout/AppContainerCSS'

interface Props {
    players: Player[]
}
export const CitizenNight = ({ players }: Props) => {
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
                <div css={description}>오늘밤은 무사하기를..</div>
                <PlayerGrid>
                    {players.map((player, i) => (
                        <PlayerNight player={player} key={i + 1} index={i + 1} myJob={'CITIZEN'} />
                    ))}
                </PlayerGrid>
            </>
        </AppContainerCSS>
    )
}
