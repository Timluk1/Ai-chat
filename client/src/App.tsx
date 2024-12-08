import { HomePage } from "pages/homePage";
import { ChatPage } from "pages/chatPage";
import { Routes, Route } from "react-router";

function App() {
    return (
        <>
            <Routes>
                <Route path="chat" element={<HomePage />}/>
                <Route path="chat/:id" element={<ChatPage />}/>
                <Route path="*" element={<HomePage />}/>
            </Routes>
        </>
    );
}

export default App;
