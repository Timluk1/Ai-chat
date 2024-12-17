import { buildCreateSlice, asyncThunkCreator, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "models/message";
import type { INewMessage } from "models/message";
import { nanoid } from "nanoid";
import { AiApiInstance } from "api/aiApi";

// Интерфейсы для работы с генерацией текста
interface IGenerateText {
    error: string;
    loading: boolean;
}

// Интерфейс для чата
interface IChat {
    chatId: string;
    chatName: string;
    messages: IMessage[];
}

// Интерфейс для возврата сообщения
interface IAsyncMessagesReturn extends IMessage {
    chatId: string;
}

// Интерфейс для хранения состояния сообщений
interface IMessageState {
    generateText: IGenerateText;
    messages: IChat[];
}

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});


const initialState: IMessageState = {
    generateText: {
        error: "",
        loading: false,
    },
    messages: []
};


// Слайс для добавления сообщений и генерации текста AI
export const messagesSlice = createSliceWithThunks({
    name: "messages",
    initialState,
    reducers: (create) => ({
        addNewMessage: create.reducer((state, action: PayloadAction<INewMessage>) => {
            const { chatId, name, message, from } = action.payload;
            const newMessage = { id: nanoid(), name, message, from};
            const chat = state.messages.find((chat) => chat.chatId === chatId)
            if (chat) {
                chat.messages.push(newMessage);
            } else {
                state.messages.push({ chatId, chatName: name, messages: [newMessage] });
            }
        }),

        generateTextAi: create.asyncThunk<IAsyncMessagesReturn, INewMessage, { rejectValue: string }>(
            // async thunk для генерации текста AI
            async ({ name, message, chatId }, { rejectWithValue }) => {
                try {
                    // Генерация текста
                    const aiAnswer = await AiApiInstance.generateText(message);
                    const ans: IAsyncMessagesReturn = {
                        id: nanoid(),
                        chatId: chatId,
                        message: aiAnswer,
                        from: "ai", // Здесь можно явно указать, что ответ от AI
                        name,
                    };
                    // Формирование нового сообщения для хранения
                    return ans;
                } catch  {
                    return rejectWithValue("Ошибка при генерации текста");
                }
            },
            {
                pending: (state) => {
                    state.generateText.loading = true;
                },
                fulfilled: (state, action: PayloadAction<IAsyncMessagesReturn>) => {
                    // Добавляем сообщение только в случае успешного выполнения
                    state.generateText.loading = false;
                    state.messages.find((chat) => chat.chatId === action.payload.chatId)?.messages.push(action.payload);
                },
                rejected: (state, action) => {
                    console.log("REJECTED", action.payload)
                    state.generateText.loading = false;
                    if (action.payload) {
                        state.generateText.error = action.payload;
                    }
                },
            }
        ),
    }),
});

export const { addNewMessage, generateTextAi } = messagesSlice.actions;
export default messagesSlice.reducer;
