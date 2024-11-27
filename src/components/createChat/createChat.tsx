import CreateChatIcon from "../../assets/create-chat.svg"
import "./createChat.scss"

export default function CreateChat() {
    return (
        <button>
            <div className="create-chat">
                <img className="create-chat__img" src={CreateChatIcon} alt="" />
            </div>
        </button>
    )
}