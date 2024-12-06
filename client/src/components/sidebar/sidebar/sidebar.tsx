import { BurgerMenu } from "components/helpers/burgerMenu";
import CreateChat from "components/helpers/createChat/createChat";
import Settings from "assets/settings.svg";
import History from "assets/history.svg";
import Help from "assets/help.svg";
import { RecentChats } from "../recentChats";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./sidebar.scss";

export const Sidebar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<boolean>(false);

    const onClickCreateChat = () => {
        navigate("chat")
    }


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
                    onClick={onClickCreateChat}
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
