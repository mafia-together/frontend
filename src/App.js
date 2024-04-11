import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import CreateRoom from "./pages/CreateRoom";
import ParticipateRoom from "./pages/ParticipateRoom";
import InputName from "./pages/InputName";
import Day from "./pages/Day";
import Night from "./pages/Night";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/create" element={<CreateRoom />}></Route>
                <Route path="/participate" element={<ParticipateRoom />}></Route>
                <Route path="/name" element={<InputName />}></Route>
                <Route path="/day" element={<Day />}></Route>
                <Route path="/night" element={<Night />}></Route>
                <Route path="/result" element={<Result />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
