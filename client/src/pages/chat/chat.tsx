import { Sidebar } from "components/sidebar/sidebar"
import { ChatContainer } from "components/helpers/chatContainer"
import { MessagesList } from "components/chat/messagesList/messagesList"
import { useAppSelector } from "hooks/useAppSelector"
import { PromtInput } from "components/chat/promtInput"
import { useState } from "react"
import { addNewMessage } from "store/messages/messagesSlice"
import { useAppDispatch } from "hooks/useAppDispatch"
import { INewMessage } from "store/messages/messagesSlice"
import { generateTextAi } from "store/messages/messagesSlice"
import { useRef } from "react"
import { useParams } from "react-router"
import { useScroll } from "hooks/useScroll"
import "./chat.scss"

export const Chat = () => {
    // получаем id чата из пути
    const { id } = useParams();
    const dispacth = useAppDispatch();
    const [textPromt, setTextPromt] = useState<string>("");
    const loading = useAppSelector((state) => state.messages.generateText.loading);
    const messages = useAppSelector((state) => state.messages.messages)
    const bottomRef = useRef<HTMLDivElement>(null);
    // хук для скролла вниз
    useScroll(bottomRef, messages);
    
    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPromt(e.target.value);
    };

    const generateText = async () => {
        // проверка наличия промта
        if (textPromt === "") return;
        // очищаем инпут
        setTextPromt("");
        // данные для добавления в список сообщений
        const newUserMessage: INewMessage = {
            from: "user",
            message: textPromt,
            name: "user"
        }  
        //  добавляем сообщение пользователя
        dispacth(addNewMessage(newUserMessage))

        // данные для добавления ответа ai и получения ответа
        const newAiMessage: INewMessage = {
            from: "user",
            message: textPromt,
            name: "ai"
        }

        // вызывае  м асинхронную функцю для генерации текста
        await dispacth(generateTextAi(newAiMessage));
    };

    return (
        <div className="chat-page">
            <Sidebar />
            <ChatContainer>
                <MessagesList messages={messages}/>
                <div ref={bottomRef}></div>
                <PromtInput
                    text={textPromt}
                    onChange={changeText}
                    generateText={generateText}
                    loading={loading}
                />
            </ChatContainer>
        </div>
    )
}
