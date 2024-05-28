import { BaseCss } from './styles/BaseCSS'
import { Global } from '@emotion/react'
import router from './Router'
import { RouterProvider } from 'react-router-dom'

function App() {
    return (
        <>
            <Global styles={BaseCss} />
            <RouterProvider router={router} />
        </>
    )
}

export default App

function setScreenSize() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}

function setScreenReSize() {
    const vh = visualViewport?.height ? visualViewport?.height * 0.01 : window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}

setScreenSize()
window.addEventListener('resize', setScreenReSize)
