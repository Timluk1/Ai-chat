import { ReactNode, createContext, useState } from "react";

export interface ISidebarContext {
    isActive: boolean;
    toggleSidebar: () => void;
}

export const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

interface ISidebarContextProviderProps {
    children: ReactNode;
}

export const SidebarContextProvider: React.FC<ISidebarContextProviderProps> = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <SidebarContext.Provider value={{ isActive, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};