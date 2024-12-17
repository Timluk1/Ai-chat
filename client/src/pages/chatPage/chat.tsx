import { Sidebar } from "components/sidebar/sidebar"
import { Chat } from "components/chat/chat"
import { useParams } from "react-router"
import { useChatContext } from "hooks/useChatContext"
import { useEffect } from "react"
import { isMobile } from "react-device-detect"
import { MobileHeader } from "components/chat/mobileHeader/mobileHeader"
import "./chat.scss"

export const ChatPage: React.FC = () => {
    const { id } = useParams();
    const { setChatId } = useChatContext();

    useEffect(() => {
        setChatId(id ? id : "")
    }, [])

    return (
        <div className="chat-page">
            {isMobile
            ?
            <MobileHeader />
            :
            <Sidebar /> 
            }
            <Chat typePage="chat" chatId={id ? id : ""}/>
        </div>
    )
}
