import { ChatContextProvider } from "context/chatContext";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "store/store";

interface LayoutProviderProps {
    children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <ChatContextProvider>
                        {children}
                    </ChatContextProvider>
                </Provider>
            </BrowserRouter>
        </>
    )
}
