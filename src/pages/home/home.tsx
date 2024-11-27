import MainChat from "../../components/mainChat/mainChat"
import Sidebar from "../../components/sidebar/sidebar"
import ChatContainer from "../../components/chatContainer/chatContainer"
import "./home.scss"

export default function Home() {
    return (
        <div className="home">
            <Sidebar />
            <ChatContainer>
                <MainChat />
            </ChatContainer>
        </div>
    )
}
