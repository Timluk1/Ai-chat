import BurgerMenu from "../burgerMenu/burgerMenu";
import CreateChat from "../createChat/createChat";
import Settings from "../../assets/settings.svg";
import History from "../../assets/history.svg";
import Help from "../../assets/help.svg";
import RecentChats from "../recentChats/chats";
import { useState } from "react";
import "./sidebar.scss";

export default function Sidebar() {
    const [active, setActive] = useState<boolean>(false);

    return (
        <aside className="sidebar">
            <div className="sidebar__buttons">
                <BurgerMenu
                    isSidebarOpen={active}
                    onClick={() => setActive(!active)}
                />
                <CreateChat
                    className="sidebar__createChat"
                    active={active}
                    onClick={() => setActive(!active)}
                />
                {active && <RecentChats />}
            </div>
            <div>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <button>
                            <img src={Help} alt="Help" />
                            {active && <p>Help</p>}
                        </button>
                    </li>
                    <li className="sidebar__list-item">
                        <button>
                            <img src={History} alt="Activity" />
                            {active && <p>Activity</p>}
                        </button>
                    </li>
                    <li className="sidebar__list-item">
                        <button>
                            <img src={Settings} alt="Settings" />
                            {active && <p>Settings</p>}
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
