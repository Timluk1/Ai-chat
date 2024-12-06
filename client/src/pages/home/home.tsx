import { MainChat } from "components/chat/mainChat/mainChat";
import { Sidebar } from "components/sidebar/sidebar";
import { ChatContainer } from "components/helpers/chatContainer";
import { PromtInput } from "components/chat/promtInput";
import { useAppDispatch } from "hooks/useAppDispatch"
import { generateTextAi, addNewMessage } from "store/messages/messagesSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { INewMessage } from "store/messages/messagesSlice";
import { createChat } from "store/chats/chatsSlice";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
import { IChat } from "store/chats/chatsSlice";
import "./home.scss";

export const Home: React.FC = () => {
    const dispacth = useAppDispatch();
    const navigate = useNavigate();
    const [textPromt, setTextPromt] = useState<string>("");
    const loading = useAppSelector((state) => state.messages.generateText.loading);

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

        const chatId = nanoid();

        const newChat: IChat  = {
            id: chatId,
            name: textPromt.slice(0, 10)
        }
        // создаем чат
        dispacth(createChat(newChat));
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

        navigate("/chat/" + chatId);
    };

    return (
        <div className="home-page">
            <Sidebar />
            <ChatContainer>
                <MainChat />
                <PromtInput
                    text={textPromt}
                    onChange={changeText}
                    generateText={generateText}
                    loading={loading}
                />
            </ChatContainer>
        </div>
    );
}
