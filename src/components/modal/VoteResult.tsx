/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerBig from '../player/PlayerBig'

type PropsType = {
    deadPlayer: string
}

export default function VoteResult({ deadPlayer }: PropsType) {
    const color = deadPlayer === '' ? 'safe' : 'kill'

    const container = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${VariablesCSS[color]};
        gap: 50px;
        height: 100%;
    `

    const description = css`
        font-family: 'DNFForgedBlade', sans-serif;
        font-weight: bold;
        font-size: 26px;
        text-align: center;
    `
    return (
        <div css={container}>
            {deadPlayer !== '' ? (
                // 누눈가가 죽었음
                <>
                    <PlayerBig color={color} job="CITIZEN" name={deadPlayer} />
                    <p css={description}>
                        플레이어가
                        <br />
                        처형당했습니다.
                    </p>
                </>
            ) : (
                // 아무도 죽지 않았음
                <>
                    <p css={description}>
                        아무도 처형되지
                        <br />
                        않았습니다.
                    </p>
                </>
            )}
        </div>
    )
}
