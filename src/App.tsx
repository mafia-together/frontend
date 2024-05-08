import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import { BaseCss } from './styles/BaseCSS'
import { Global } from '@emotion/react'
import { CreateRoom } from './pages/CreateRoom'
import InputName from './pages/InputName'
import InputCode from './pages/InputCode'
import NotFound from './pages/NotFound'
import Room from './pages/Room'

function App() {
    return (
        <BrowserRouter>
            <Global styles={BaseCss} />
            <Routes>
                <Route path="/" element={<FirstPage />}></Route>
                <Route path="/create" element={<CreateRoom />}></Route>
                <Route path="/participate" element={<InputCode />}></Route>
                <Route path="/name" element={<InputName />}></Route>
                <Route path="/room" element={<Room />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
