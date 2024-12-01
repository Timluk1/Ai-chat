import UserIcon from "../../assets/user.svg";
import "./userMessage.scss";

interface IUserMessageProps {
    text: string;
}

export default function UserMessage({ text }: IUserMessageProps) {
    return (
        <div className="user-message">
            <div className="icon-layout">
                <div className="user-icon">
                    <img src={UserIcon} alt="User Icon" />
                </div>
            </div>
            <p>{text}</p>
        </div>
    );
}
