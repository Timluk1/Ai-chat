import { Sidebar } from "components/sidebar/sidebar"
import { Chat } from "components/chat/chat"
import { useParams } from "react-router"
import { useChatContext } from "hooks/useChatContext"
import { useEffect } from "react"
import { MobileHeader } from "components/chat/mobileHeader/mobileHeader"
import { useCheckMobile } from "hooks/useCheckMobile"
import { MobileSidebar } from "components/sidebar/mobileSidebar/mobileSidebar"
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
                <>
                    <MobileHeader />
                    <MobileSidebar />
                </>
                :
                <Sidebar />
            }
            <Chat typePage="chat" chatId={id ? id : ""} />
        </div>
    )
}
