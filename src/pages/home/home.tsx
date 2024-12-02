import MainChat from "components/chat/mainChat/mainChat";
import { Sidebar } from "components/sidebar/sidebar";
import { ChatContainer } from "components/helpers/chatContainer";
import { PromtInput } from "components/chat/promtInput";
import MessagesList from "components/chat/messagesList/messagesList";
import { useAppDispatch } from "hooks/useAppDispatch"
import { generateTextAi, addNewMessage } from "store/messages/messagesSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { INewMessage } from "store/messages/messagesSlice";
import "./home.scss";


export default function Home() {
    const dispacth = useAppDispatch();
    const messages = useAppSelector((state) => state.messages.messages);
    const [textPromt, setTextPromt] = useState<string>("");
    const [showName, setShowName] = useState<boolean>(!messages.length);

    // смена текста
    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextPromt(e.target.value);
    };

    // генерация текста при клике нейросестью
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
        
        // вызываем асинхронную функцю для генерации текста
        await dispacth(generateTextAi(newAiMessage));
        setShowName(false);
    };

    return (
        <div className="home">
            <Sidebar />
            <ChatContainer>
                {
                    showName
                        ?
                        <MainChat showName={showName} />
                        :
                        <MessagesList messages={messages} />
                }
                <PromtInput
                    text={textPromt}
                    onChange={changeText}
                    generateText={generateText}
                    loading={false}
                />
            </ChatContainer>
        </div>
    );
}
