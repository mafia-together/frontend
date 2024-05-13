/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import PlayerBig from '../player/PlayerBig'

type PropsType = {
    yesterdayDeadPlayer: string
}

export default function NoticeDead({ yesterdayDeadPlayer }: PropsType) {
    const color = yesterdayDeadPlayer === '' ? 'safe' : 'kill'

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
            {yesterdayDeadPlayer !== '' ? (
                // 누눈가가 죽었음
                <>
                    <PlayerBig color={color} job="CITIZEN" name={yesterdayDeadPlayer} />
                    <p css={description}>
                        어젯밤 <br />
                        사망했습니다.
                    </p>
                </>
            ) : (
                // 아무도 죽지 않았음
                <>
                    <svg
                        width="220"
                        height="221"
                        viewBox="0 0 220 221"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M118.408 77.493C122.217 78.259 124.692 81.9859 123.931 85.8159L123.594 87.4952C122.817 91.4283 121.382 95.17 119.375 98.5728H140.469C144.351 98.5728 147.5 101.74 147.5 105.644C147.5 108.369 145.962 110.74 143.706 111.919C145.303 113.215 146.328 115.204 146.328 117.428C146.328 120.875 143.867 123.748 140.63 124.366C141.274 125.442 141.641 126.694 141.641 128.034C141.641 131.172 139.604 133.838 136.792 134.752C136.895 135.238 136.953 135.753 136.953 136.284C136.953 140.187 133.804 143.354 129.922 143.354H115.64C112.856 143.354 110.146 142.53 107.832 140.983L102.192 137.197C98.2812 134.575 95.9375 130.156 95.9375 125.427V109.046C95.9375 104.745 97.8857 100.694 101.211 97.9983L102.295 97.1292C106.177 94.0062 108.828 89.6164 109.795 84.7258L110.132 83.0465C110.894 79.2165 114.6 76.727 118.408 77.493ZM77.1875 91.502H86.5625C89.1553 91.502 91.25 93.6085 91.25 96.2158V129.213C91.25 131.82 89.1553 133.927 86.5625 133.927H77.1875C74.5947 133.927 72.5 131.82 72.5 129.213V96.2158C72.5 93.6085 74.5947 91.502 77.1875 91.502Z"
                            fill="#4E66A4"
                            fillOpacity="0.8"
                        />
                    </svg>
                    <p css={description}>
                        어젯밤은 <br />
                        무사히 지나갔습니다.
                    </p>
                </>
            )}
        </div>
    )
}
