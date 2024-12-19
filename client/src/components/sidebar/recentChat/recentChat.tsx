import MessageIcon from "assets/message.svg";
import { useNavigate } from "react-router";
import { useSidebarContext } from "hooks/useSidebarContext";
import "./recentChat.scss";

interface IChatProps {
    text: string;
    chatId: string;
}

export const RecentChat: React.FC<IChatProps> = ({ text, chatId }) => {
    const croppedText = text.slice(0, 18) + "...";
    const { toggleSidebar } = useSidebarContext();
    const navigate = useNavigate();

    const onClickRecentChat = () => {
        console.log("RECENT CHAT CLICK")
        toggleSidebar();
        navigate(`/chat/${chatId}`);
    }

    return (
        <button onClick={onClickRecentChat}>
            <div className="chat">
                <img src={MessageIcon} alt="" />
                <p>{croppedText}</p>
            </div>
        </button>
    );
}
