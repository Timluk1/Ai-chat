import { buildCreateSlice, asyncThunkCreator, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "models/message";
import type { INewMessage } from "models/message";
import { nanoid } from "nanoid";
import { AiApiInstance } from "api/aiApi";

interface IGenerateText {
    error: string;
    loading: boolean;
}

interface IMessageState {
    idChat: string;
    messages: IMessage[];
    generateText: IGenerateText;
}

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const initialState: IMessageState = {
    idChat: "1",
    messages: [],
    generateText: {
        error: "",
        loading: false,
    },
};

// Слайс для добавления сообщений и генерации текста AI
export const messagesSlice = createSliceWithThunks({
    name: "messages",
    initialState,
    reducers: (create) => ({
        addNewMessage: create.reducer((state, action: PayloadAction<INewMessage>) => {
            state.messages.push({
                id: nanoid(),
                ...action.payload,
            });
        }),
        generateTextAi: create.asyncThunk<IMessage, INewMessage, { rejectValue: string }>(
            // async thunk для генерации текста AI
            async ({ name, message, chat}, { rejectWithValue }) => {
                try {
                    // Генерация текста
                    const aiAnswer = await AiApiInstance.generateText(message);

                    // Формирование нового сообщения для хранения
                    return {
                        id: nanoid(),
                        chat: chat, 
                        message: aiAnswer,
                        from: "ai", // Здесь можно явно указать, что ответ от AI
                        name,
                    };
                } catch (error) {
                    console.error(error);
                    return rejectWithValue("Ошибка при генерации текста");
                }
            },
            {
                pending: (state) => {
                    state.generateText.loading = true;
                },
                fulfilled: (state, action: PayloadAction<IMessage>) => {
                    // Добавляем сообщение только в случае успешного выполнения
                    state.generateText.loading = false;
                    state.messages.push(action.payload);
                },
                rejected: (state, action) => {
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
