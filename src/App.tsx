import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import { BaseCss } from "./styles/BaseCSS";
import { Global } from "@emotion/react";
import { CreateRoom } from "./pages/CreateRoom";
import InputName from "./pages/InputName";
import InputCode from "./pages/InputCode";
import WaitingRoom from "./pages/WaitingRoom";
import Day from "./pages/Day";
import Night from "./pages/Night";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";

function App() {
    return (
        <BrowserRouter>
            <Global styles={BaseCss} />
            <Routes>
                <Route path="/" element={<FirstPage />}></Route>
                <Route path="/create" element={<CreateRoom />}></Route>
                <Route path="/participate" element={<InputCode />}></Route>
                <Route path="/name" element={<InputName />}></Route>
                <Route path="/waiting" element={<WaitingRoom />}></Route>{" "}
                <Route path="/day" element={<Day />}></Route>{" "}
                <Route path="/night" element={<Night />}></Route>
                <Route path="/result" element={<Result />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
