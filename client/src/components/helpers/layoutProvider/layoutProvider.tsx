import { ChatContextProvider } from "context/chatContext";
import { Provider } from "react-redux";
import { HashRouter } from "react-router";
import { store } from "store/store";

interface LayoutProviderProps {
    children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
    return (
        <>
            <HashRouter>
                <Provider store={store}>
                    <ChatContextProvider>
                        {children}
                    </ChatContextProvider>
                </Provider>
            </HashRouter>
        </>
    )
}
