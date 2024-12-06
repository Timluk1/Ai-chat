import { buildCreateSlice, asyncThunkCreator, PayloadAction } from "@reduxjs/toolkit";

export interface IChat {
    id: string;
    name: string;
}

interface IChatState {
    chats: IChat[]
}

const initialState: IChatState = {
    chats: []
};

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const chatsSlice = createSliceWithThunks({
    name: "chats",
    initialState,
    reducers: (create) => ({
        createChat: create.reducer((state, { payload }: PayloadAction<IChat>) => {
            state.chats.push(payload);
        })
    })
});


export const { createChat } = chatsSlice.actions;
export default chatsSlice.reducer;
