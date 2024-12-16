import { RecentChat } from "../recentChat/recentChat";
import classNames from "classnames";
import { useAppSelector } from "hooks/useAppSelector";
import { selectChatsNames } from "store/messages/selectors";
import "./chats.scss";

interface IRecentChatsProps {
    active: boolean;
}

export const RecentChats: React.FC<IRecentChatsProps> = ({ active }) => {
    const chatsNames = useAppSelector(selectChatsNames);
    return (
        <div className="recent-chats">
            <h3 className={classNames("recent-chats__title", active && "active")}>Recent</h3>
            <div>
                {active && (
                    <ul className="recent-chats__list">
                        {chatsNames.map(({ chatName, chatId}) => (
                            <li key={chatId} className="recent-chats__list-item">
                                <RecentChat text={chatName} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};