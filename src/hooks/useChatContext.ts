import { useContext } from "react";
import { ChatContext, IChatContext } from "context/chatContext";

export const useChatContext = (): IChatContext => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChatContext must be used within a ChatContextProvider");
    }
    return context;
};