import { RecentChat } from "../recentChat/recentChat";
import classNames from "classnames";
import { useAppSelector } from "hooks/useAppSelector";
import "./chats.scss";

interface IRecentChatsProps {
    active: boolean;
}

export const RecentChats: React.FC<IRecentChatsProps> = ({ active }) => {
    const chats = useAppSelector((state) => state.chat.chats)
    return (
        <div className="recent-chats">
            <h3 className={classNames("recent-chats__title", active && "active")}>Recent</h3>
            <div>
                {active
                    &&
                    <>
                        <ul className="recent-chats__list">
                            {chats.map(({ id, name}) => {
                                return (
                                    <li key={id} className="recent-chats__list-item">
                                        <RecentChat text={name} />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                }
            </div>
        </div>
    );
}
