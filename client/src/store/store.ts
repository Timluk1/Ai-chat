import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chats/chatsSlice";
import messagesReducer from "./messages/messagesSlice";

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        messages: messagesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
