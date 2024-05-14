import { BaseCss } from './styles/BaseCSS'
import { Global } from '@emotion/react'
import router from './Router'
import { RouterProvider } from 'react-router-dom'

function App() {
    const mockPlayer: Player[] = [
        {
            name: '지윤짱짱맨',
            isAlive: true,
            job: 'MAFIA',
        },
        {
            name: '재연짱짱맨',
            isAlive: false,
            job: 'CITIZEN',
        },
    ]

    return (
        <>
            <Global styles={BaseCss} />
            <RouterProvider router={router} />
        </>
    )
}

export default App
