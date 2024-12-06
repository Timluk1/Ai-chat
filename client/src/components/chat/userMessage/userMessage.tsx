import UserIcon from "assets/user.svg";
import "./userMessage.scss";

interface IUserMessageProps {
    text: string;
}

export const UserMessage: React.FC<IUserMessageProps> = ({ text }) => {
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
