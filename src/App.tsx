import { HomePage } from "pages/homePage";
import { ChatPage } from "pages/chatPage";
import { Routes, Route } from "react-router";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/chat" element={<HomePage />}/>
                <Route path="/chat/:id" element={<ChatPage />}/>
            </Routes>
        </>
    );
}

export default App;
