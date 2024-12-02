import { buildCreateSlice, asyncThunkCreator, PayloadAction } from "@reduxjs/toolkit";
import { IMessage, messages } from "../../utils/someExampleChats";
import { nanoid } from "nanoid";
import { AiApiInstance } from "api/aiApi";

export interface INewMessage {
    from: "ai" | "user";
    name: string;
    message: string;
}

export interface INewMessage {
    from: "ai" | "user";
    name: string;
    message: string;
}

interface IGenerateText {
    error: string;
    loading: boolean;
}

interface IMessageState {
    messages: IMessage[]
    generateText: IGenerateText
}

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const initialState: IMessageState = {
    messages,
    generateText: {
        error: "",
        loading: false
    }
};

// слайс для добавления сообщений и генерации текста ai
export const messagesSlice = createSliceWithThunks({
    name: "messages",
    initialState,
    reducers: (create) => ({
        addNewMessage: create.reducer((state, action: PayloadAction<INewMessage>) => {
            console.log("NEW MESSAGE")
            state.messages.push({
                id: nanoid(),
                ...action.payload
        });
        }),
        generateTextAi: create.asyncThunk<IMessage | void, INewMessage, { rejectValue: string}>(
            // async thunk для генерации текста ai
            async ({ name, message, from}, { rejectWithValue}) => {
                try {
                    // генерируем текст
                    const aiAnswer = await AiApiInstance.generateText(message);

                    // формируем новое сообщение для хранения
                    const newMessage: IMessage = {
                        id: nanoid(),
                        message: aiAnswer,
                        from: from,
                        name
                    }
                    return newMessage;
                } catch (error) {
                    console.log(error)
                    rejectWithValue("Ошибка при генерации текста")
                }
            },
            {
                pending: (state) => {
                    state.generateText.loading = true
                },
                fulfilled: (state, action) => {
                    console.log(action.payload)
                    state.generateText.loading = false;
                },
                rejected: (state, action) => {
                    state.generateText.loading = false;
                    console.log(action)
                },
            }
        
        )
    }),
})


export const { addNewMessage, generateTextAi } = messagesSlice.actions;
export default messagesSlice.reducer;
