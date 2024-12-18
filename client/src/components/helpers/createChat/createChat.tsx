import React from "react";
import CreateChatIcon from "assets/create-chat.svg";
import { Tooltip } from "react-tooltip";
import "./createChat.scss";

interface ICreateChatProps {
    className?: string;
    active: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CreateChat: React.FC<ICreateChatProps> = ({
    className,
    active,
    onClick,
}: ICreateChatProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${active ? "active" : ""}`}
        >
            <div
                className="create-chat"
                data-tooltip-id="create-chat-tooltip"
                data-tooltip-content="Создать новый чат"
            >
                <Tooltip
                    id="create-chat-tooltip"
                    className="create-chat-tooltip"
                    place="right"
                />
                <img
                    className="create-chat__img"
                    src={CreateChatIcon}
                    alt="Create chat"
                />
                {active
                    &&
                    <p className="create-chat__text">New chat</p>
                }
            </div>
        </button>
    );
}
