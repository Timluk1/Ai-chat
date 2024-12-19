import UserIcon from "assets/user.svg";
import "./userMessage.scss";

interface IUserMessageProps {
    text: string;
}

export const UserMessage: React.FC<IUserMessageProps> = ({ text }) => {
    return (
        <div className="user-message">
            <div className="user-message__icon-layout">
                <img src={UserIcon} alt="User Icon" />
            </div>
            <p className="user-message__text">{text}</p>
        </div>
    );
}
