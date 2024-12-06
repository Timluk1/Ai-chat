import { Home } from "pages/home";
import { Chat } from "pages/chat/chat";
import { Routes, Route } from "react-router";

function App() {
    return (
        <>
            <Routes>
                <Route path="chat" element={<Home />}/>
                <Route path="chat/:id" element={<Chat />}/>
            </Routes>
        </>
    );
}

export default App;
