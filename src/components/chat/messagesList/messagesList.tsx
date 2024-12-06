import { UserMessage } from "components/chat/userMessage";
import classNames from "classnames";
import { IMessage } from "utils/someExampleChats";
import { AiAnswer } from "components/chat/aiAnswer"
import "./messagesList.scss";

interface IMessagesListProps {
    messages: IMessage[];
}

export const MessagesList: React.FC<IMessagesListProps> = ({ messages }) => {
    return (
        <div>
            <ul className="messages-list">
                {messages.map(({ id, from, message }) => {
                    return (
                        <li
                            key={id}
                            className={classNames(
                                "messages-list__item",
                            )}
                        >
                            {from === "ai" ? (
                                <div className="ai-layout">
                                    <AiAnswer textMarkdown={message} />
                                </div>
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