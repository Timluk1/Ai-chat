import { Sidebar } from "components/sidebar/sidebar"
import { Chat } from "components/chat/chat"
import { useParams } from "react-router"
import { useChatContext } from "hooks/useChatContext"
import { useEffect } from "react"
import { useCheckMobile } from "hooks/useCheckMobile"
import { NavMobile } from "components/mobile/navMobile/navMobile"
import "./chat.scss"

export const ChatPage: React.FC = () => {
    const { id } = useParams();
    const { setChatId } = useChatContext();
    const isMobile = useCheckMobile();

    useEffect(() => {
        setChatId(id ? id : "")
    }, [])

    return (
        <div className="chat-page">
            {isMobile
                ?
                <NavMobile />
                :
                <Sidebar />
            }
            <Chat typePage="chat" chatId={id ? id : ""} />
        </div>
    )
}
