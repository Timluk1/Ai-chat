import { useContext } from "react";
import { SidebarContext, ISidebarContext } from "context/sidebarContext";

export const useSidebarContext = (): ISidebarContext => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebarContext must be used within a SidebarContextProvider");
    }
    return context;
};