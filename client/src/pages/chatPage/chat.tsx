import { Sidebar } from "components/sidebar/sidebar"
import { Chat } from "components/chat/chat"
import { useParams } from "react-router"
import "./chat.scss"

export const ChatPage: React.FC = () => {
    const { id } = useParams();
    return (
        <div className="chat-page">
            <Sidebar />
            <Chat typePage="chat" chatId={id ? id : ""}/>
        </div>
    )
}
