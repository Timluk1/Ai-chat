/// <reference types="vite/client" />

declare type RootState = ReturnType<typeof import('./store/store').store.getState>