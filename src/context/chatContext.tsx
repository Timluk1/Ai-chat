import { createContext, ReactNode, useState } from "react";

interface IChatContextProviderProps {
    children: ReactNode;
}
export interface IChatContext {
    chatId: string;
    inputPromt: string;
    setChatId: (id: string) => void;
    setInputPromt: (input: string) => void;
}

const chatContextDefaultValue: IChatContext = {
    chatId: "",
    inputPromt: "",
    setChatId: () => {},
    setInputPromt: () => {},
};

export const ChatContext = createContext<IChatContext>(chatContextDefaultValue);

export const ChatContextProvider: React.FC<IChatContextProviderProps> = ({ children }) => {
    const [chatId, setChatId] = useState<string>("");
    const [inputPromt, setInputPromt] = useState<string>("");

    const value: IChatContext = {
        chatId,
        inputPromt,
        setChatId,
        setInputPromt,
    };

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
};
