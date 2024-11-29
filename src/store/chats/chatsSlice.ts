import { createSlice } from '@reduxjs/toolkit'
import { chats } from '../../utils/someExampleChats'

interface Message {
  role: string
  parts: { text: string }[]
}

interface Chat {
    name: string
    id: number
    history: Message[]
}

export interface ChatsState {
  chats: Chat[]
}

const initialState: ChatsState = {
    chats: chats
}

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const {  } = chatsSlice.actions

export default chatsSlice.reducer