import { Sidebar } from "components/sidebar/sidebar"
import { Chat } from "components/chat/chat"
import { useParams } from "react-router"
import { useChatContext } from "hooks/useChatContext"
import { useEffect } from "react"
import { useCheckMobile } from "hooks/useCheckMobile"
import { NavMobile } from "components/mobile/navMobile/navMobile"
import { cleanError } from "store/messages/messagesSlice"
import { ToastContainer, toast } from 'react-toastify';
import { useAppSelector } from "hooks/useAppSelector"
import { useAppDispatch } from "hooks/useAppDispatch"
import "./chat.scss"

export const ChatPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { setChatId } = useChatContext();
    const isMobile = useCheckMobile();
    const error = useAppSelector((state) => state.messages.generateText.error);
    const loading = useAppSelector((state) => state.messages.generateText.loading);

    useEffect(() => {
        setChatId(id ? id : "")
        if (error) {
            // если есть ошибка, то сообщаем пользователю
            toast("Ошибка при генерации текста, попробуйте использовать VPN")

            // очищаем ошибку
            dispatch(cleanError())
        }
    }, [loading])

    return (
        <div className="chat-page">   
            <ToastContainer />
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
