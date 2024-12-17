import { ChatContextProvider } from "context/chatContext";

interface LayoutProviderProps {
    children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
    return (
        <>
            <ChatContextProvider>
                {children}
            </ChatContextProvider>
        </>
    )
}
