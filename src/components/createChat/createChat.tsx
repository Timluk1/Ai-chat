import CreateChatIcon from "../../assets/create-chat.svg";
import "./createChat.scss";

interface ICreateChatProps {
    active: boolean
}

export default function CreateChat({ active }: ICreateChatProps) {
    return (
        <button>
            <div className="create-chat">
                <img className="create-chat__img" src={CreateChatIcon} alt="" />
                {
                    active
                    &&
                    <p className="create-chat__text">New chat</p>
                }
            </div>
        </button>
    );
}
