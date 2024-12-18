import { BurgerMenu } from "components/helpers/burgerMenu";
import { CreateChat } from "components/helpers/createChat/createChat";
import Settings from "assets/settings.svg";
import History from "assets/history.svg";
import Help from "assets/help.svg";
import { RecentChats } from "../recentChats";
import { useState } from "react";
import { useNavigate } from "react-router";
import classNames from "classnames";
import "./sidebar.scss";

export const Sidebar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<boolean>(false);
    const onClickCreateChat = () => {
        navigate("/chat")
    }

    return (
        <aside className={classNames("sidebar", active && "active")}>
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
                <RecentChats active={active}/>
            </div>
            <div>
                <ul className="sidebar__list">
                    <button>
                        <li className="sidebar__list-item">
                            <img src={Help} alt="Help" />
                            <p className={classNames("sidebar__text", active && "active")}>Help</p>
                        </li>
                    </button>
                    <button>
                        <li className="sidebar__list-item">
                            <img src={History} alt="Activity" />
                            <p className={classNames("sidebar__text", active && "active")}>Activity</p>
                        </li>
                    </button>
                    <button>
                        <li className="sidebar__list-item">
                            <img src={Settings} alt="Settings" />
                            <p className={classNames("sidebar__text", active && "active")}>Settings</p>
                        </li>
                    </button>
                </ul>
            </div>
        </aside>
    );
}
