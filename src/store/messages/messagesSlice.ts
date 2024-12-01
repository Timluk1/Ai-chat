import { createSlice } from "@reduxjs/toolkit";
import { IMessage, messages } from "../../utils/someExampleChats";
import type { PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

interface INewMessage {
    from: "user" | "ai";
    name: string;
    message: string;
}

const initialState = {
    messages,
};

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<INewMessage>) => {
            const newMessage: IMessage = {
                id: nanoid(),
                ...action.payload,
            };
            state.messages.push(newMessage);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
