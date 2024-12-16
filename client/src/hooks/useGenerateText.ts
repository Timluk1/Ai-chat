import { useAppDispatch } from "hooks/useAppDispatch"
import { INewMessage } from "models/message"
import { generateTextAi, addNewMessage } from "store/messages/messagesSlice"
import { useCallback } from "react"

interface IGenerateTextReturn {
    generateText: (id: string) => void
}

// хук для генерации текста ai
export const useGenerateText = (textPromt: string): IGenerateTextReturn => {
    const dispatch = useAppDispatch();
    const generateTextFunc = async (id: string) => {
        // проверка наличия промта
        if (textPromt === "") return;
        if (id) {
            // данные для добавления в список сообщений
            const newUserMessage: INewMessage = {
                chatId: id,
                from: "user",
                message: textPromt,
                name: textPromt
            }
            //  добавляем сообщение пользователя
            dispatch(addNewMessage(newUserMessage))

            // данные для добавления ответа ai и получения ответа
            const newAiMessage: INewMessage = {
                chatId: id,
                from: "user",
                message: textPromt,
                name: textPromt
            }
            // вызываем асинхронную функцю для генерации текста
            await dispatch(generateTextAi(newAiMessage));
        }

    };
    const generateText = useCallback(generateTextFunc, [dispatch, textPromt]);

    return { generateText }
}