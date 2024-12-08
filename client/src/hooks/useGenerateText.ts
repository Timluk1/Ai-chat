import { useAppDispatch } from "hooks/useAppDispatch"
import { INewMessage } from "models/message"
import { useParams } from "react-router"
import { generateTextAi, addNewMessage } from "store/messages/messagesSlice"
import { useAppSelector } from "./useAppSelector"

interface IGenerateTextReturn {
    generateText: () => void
}

// хук для генерации текста ai
export const useGenerateText = (textPromt: string): IGenerateTextReturn => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const chat = useAppSelector((state) => state.chat.chats.filter(({ chatId }) => chatId === id))[0]
    const generateText = async () => {
        // проверка наличия промта
        if (textPromt === "") return;
        if (chat) {
            // данные для добавления в список сообщений
            const newUserMessage: INewMessage = {
                chatId: chat,
                from: "user",
                message: textPromt,
                name: "user"
            }
            //  добавляем сообщение пользователя
            dispatch(addNewMessage(newUserMessage))

            // данные для добавления ответа ai и получения ответа
            const newAiMessage: INewMessage = {
                chatId: chat,
                from: "user",
                message: textPromt,
                name: "ai"
            }
            // вызываем асинхронную функцю для генерации текста
            await dispatch(generateTextAi(newAiMessage));
        }

    };

    return { generateText }
}