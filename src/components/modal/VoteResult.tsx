/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerBig from '../player/PlayerBig'
import { getVote } from '../../axios/http'
import { useEffect, useState } from 'react'
import { Dead } from '../../type'

export default function VoteResult() {
    const [dead, setDead] = useState<Dead>(null)

    useEffect(() => {
        ;(async () => {
            const deadResponse = await getVote()
            setDead(deadResponse.dead)
        })()
    }, [])

    const color = dead ? 'kill' : 'safe'

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
            {dead ? (
                // 누눈가가 죽었음
                <>
                    <PlayerBig color={color} job="CITIZEN" name={dead} />
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
