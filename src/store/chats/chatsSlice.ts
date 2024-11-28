import { createSlice } from '@reduxjs/toolkit'

interface Chat {
    name: string
    id: number
    history: string[]
}

export interface ChatsState {
  chats: Chat[]
}

const initialState: ChatsState = {
    chats: []
}

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = chatsSlice.actions

export default chatsSlice.reducer