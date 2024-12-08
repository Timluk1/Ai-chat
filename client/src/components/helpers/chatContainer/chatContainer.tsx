import React from "react";
import "./chatContainer.scss";

interface IChatContainerProps {
    children: React.ReactNode;
}

export const ChatContainer: React.FC<IChatContainerProps> = ({ children}) => {
    return (
        <div className="chat-container">
            {children}
        </div>
    );
};
