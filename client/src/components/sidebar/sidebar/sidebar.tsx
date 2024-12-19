import { BurgerMenu } from "components/helpers/burgerMenu";
import { CreateChat } from "components/helpers/createChat/createChat";
import Settings from "assets/settings.svg";
import History from "assets/history.svg";
import Help from "assets/help.svg";
import { RecentChats } from "../recentChats";
import { useNavigate } from "react-router";
import { useSidebarContext } from "hooks/useSidebarContext";
import classNames from "classnames";
import "./sidebar.scss";

export const Sidebar = () => {
    const navigate = useNavigate();
    const { isActive, toggleSidebar } = useSidebarContext()
    
    const onClickCreateChat = () => {
        toggleSidebar()
        navigate("/chat")
    }

    return (
        <aside className={classNames("sidebar", isActive && "active")}>
            <div className="sidebar__buttons">
                <BurgerMenu
                    isSidebarOpen={isActive}
                    onClick={toggleSidebar}
                />
                <CreateChat
                    className="sidebar__createChat"
                    active={isActive}
                    onClick={onClickCreateChat}
                />
                <RecentChats active={isActive} />
            </div>
            <div>
                <ul className="sidebar__list">
                    <button>
                        <li className="sidebar__list-item">
                            <img src={Help} alt="Help" />
                            <p className={classNames("sidebar__text", isActive && "active")}>Help</p>
                        </li>
                    </button>
                    <button>
                        <li className="sidebar__list-item">
                            <img src={History} alt="Activity" />
                            <p className={classNames("sidebar__text", isActive && "active")}>Activity</p>
                        </li>
                    </button>
                    <button>
                        <li className="sidebar__list-item">
                            <img src={Settings} alt="Settings" />
                            <p className={classNames("sidebar__text", isActive && "active")}>Settings</p>
                        </li>
                    </button>
                </ul>
            </div>
        </aside>
    );
}
