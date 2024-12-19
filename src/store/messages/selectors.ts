import { createSelector } from "@reduxjs/toolkit";

// селектор для получения сообщений по id чата
export const selectMessages = createSelector(
  [(state: RootState) => state.messages.messages, (_: RootState, id: string) => id],
  (messages, id) => {
    return messages.filter(({ chatId }) => chatId === id);
  }
);

export const selectChatsNames = createSelector(
  [(state: RootState) => state.messages.messages],
  (messages) => {
    return messages.map(({ chatName, chatId }) => {
      return { chatId, chatName }
    })
  }
)