import { ChatContextProvider } from "context/chatContext";
import { SidebarContextProvider } from "context/sidebarContext";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "store/store";

interface LayoutProviderProps {
    children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ChatContextProvider>
                    <SidebarContextProvider>
                        {children}
                    </SidebarContextProvider>
                </ChatContextProvider>
            </Provider>
        </BrowserRouter>
    );
};
