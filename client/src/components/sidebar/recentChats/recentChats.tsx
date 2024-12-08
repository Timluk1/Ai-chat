import { RecentChat } from "../recentChat/recentChat";
import classNames from "classnames";
import "./chats.scss";

interface IRecentChatsProps {
    active: boolean;
}

export const RecentChats: React.FC<IRecentChatsProps> = ({ active }) => {
    return (
        <div className="recent-chats">
            <h3 className={classNames("recent-chats__title", active && "active")}>Recent</h3>
            <div>
                {active 
                &&
                <>
                <ul className="recent-chats__list">
                    <li className="recent-chats__list-item">
                        <RecentChat text="The primary libary for react" />
                    </li>
                    <li className="recent-chats__list-item">
                        <RecentChat text="The primary libary for react" />
                    </li>
                    <li className="recent-chats__list-item">
                        <RecentChat text="The primary libary for react" />
                    </li>
                    <li className="recent-chats__list-item">
                        <RecentChat text="The primary libary for react" />
                    </li>
                </ul>
                </>
                }
            
            </div>
        </div>
    );
}
