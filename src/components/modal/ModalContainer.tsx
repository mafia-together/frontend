/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VariablesCSS } from '../../styles/VariablesCSS'
import { useEffect, useState } from 'react'

type PropsType = {
    isOpen: boolean
    openMotion?: boolean
    children: JSX.Element
}

export default function ModalContainer({ isOpen, openMotion = true, children }: PropsType) {
    const [isOpened, setIsOpened] = useState(isOpen)

    useEffect(() => {
        if (isOpen) {
            setIsOpened(isOpen)
        } else {
            setTimeout(() => {
                setIsOpened(isOpen)
            }, 450)
        }
    }, [isOpen])

    const modal = css`
        position: absolute;
        width: calc(100% + ${VariablesCSS.margin} + ${VariablesCSS.margin});
        left: 0;
        top: 0;
        ${openMotion && isOpen && 'animation: smoothshow 0.5s backwards;'}
        ${isOpen || 'animation: smoothhide 0.5s backwards;'}
    `

    const dimmed = css`
        margin-left: -${VariablesCSS.margin};
        margin-right: -${VariablesCSS.margin};
        width: 100%;
        height: calc(var(--vh, 1vh) * 100);
        background-color: rgba(0, 0, 0, 0.7);
    `

    const container = css`
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 92%;
        height: 70%;
        background-color: #ffffff;
        background: linear-gradient(152.82deg, #fbf1ff 0%, #fbf1ff 0%, #dae0ea 0.01%, #ddd5dd 100%);
        border: 5px solid #ffffff;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        transform: translate(calc(-50% - ${VariablesCSS.margin}), -50%);
        ${openMotion && isOpen && 'animation: smoothup 0.5s backwards;'}
        ${isOpen || 'animation: smoothdown 0.5s backwards;'}
    `

    return (
        isOpened && (
            <div css={modal}>
                <div css={dimmed}></div>
                <div css={container}>{children}</div>
            </div>
        )
    )
}
