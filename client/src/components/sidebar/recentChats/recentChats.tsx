import { RecentChat } from "../recentChat/recentChat";
import "./chats.scss";

export const RecentChats = () => {
    return (
        <div className="recent-chats">
            <h3 className="recent-chats__title">Recent</h3>
            <div>
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
            </div>
        </div>
    );
}
