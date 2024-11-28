import "./chatContainer.scss";

interface IChatContainerProps {
    children: React.ReactNode;
}

export default function ChatContainer({ children }: IChatContainerProps) {
    return <div className="chat-container">{children}</div>;
}
