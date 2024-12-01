import MessageIcon from "../../assets/message.svg";
import "./recentChat.scss";

interface IChatProps {
    text: string;
}

export default function Chat({ text }: IChatProps) {
    const croppedText = text.slice(0, 18) + "...";
    return (
        <button>
            <div className="chat">
                <img src={MessageIcon} alt="" />
                <p>{croppedText}</p>
            </div>
        </button>
    );
}
