import { UserMessage } from "components/chat/userMessage";
import classNames from "classnames";
import { IMessage } from "models/message";
import { AiAnswer } from "components/chat/aiAnswer"
import { useEffect, useRef } from "react";
import "./messagesList.scss";

interface IMessagesListProps {
    messages: IMessage[];
}

export const MessagesList: React.FC<IMessagesListProps> = ({ messages }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
            <ul className="messages-list">
                {messages.map(({ id, from, message }) => {
                    return (
                        <li
                            key={id}
                            className={classNames(
                                "messages-list__item",
                                from
                            )}
                        >
                            {from === "ai" ? (
                                <AiAnswer textMarkdown={message} />
                            ) : (
                                <UserMessage text={message} />
                            )}
                        </li>
                    );
                })}
                <div ref={messagesEndRef}></div>
            </ul>
    );
}