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
