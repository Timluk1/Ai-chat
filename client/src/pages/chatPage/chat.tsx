import { Sidebar } from "components/sidebar/sidebar"
import { Chat } from "components/chat/chat"
import "./chat.scss"

export const ChatPage: React.FC = () => {
    return (
        <div className="chat-page">
            <Sidebar />
            <Chat typePage="chat"/>
        </div>
    )
}
