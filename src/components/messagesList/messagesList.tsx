import UserMessage from "../userMessage/userMessage";
import classNames from "classnames";
import { IMessage } from "../../utils/someExampleChats";
import AiAnswer from "../aiAnswer/aiAnswer";
import "./messagesList.scss";

interface IMessagesListProps {
    messages: IMessage[];
}

export default function MessagesList({ messages }: IMessagesListProps) {
    return (
        <div>
            <ul className="messages-list">
                {messages.map(({ id, from, message }) => {
                    return (
                        <li
                            key={id}
                            className={classNames(
                                "messages-list__item",
                                "ai-message",
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
            </ul>
        </div>
    );
}
