import React from "react";
import CreateChatIcon from "../../assets/create-chat.svg";
import { Tooltip } from "react-tooltip";
import "./createChat.scss";

interface ICreateChatProps {
    active: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function CreateChat({ active, onClick }: ICreateChatProps) {
    return (
        <button onClick={onClick}>
            <div className="create-chat" data-tooltip-id="сreate-chat-tooltip" data-tooltip-content="Создать новый чат">
                <Tooltip id="сreate-chat-tooltip"/>
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
