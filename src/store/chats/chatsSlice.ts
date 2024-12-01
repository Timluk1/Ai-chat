import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
// export const {  } = chatsSlice.actions

export default chatsSlice.reducer;
