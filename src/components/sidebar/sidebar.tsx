import BurgerMenu from "../burgerMenu/burgerMenu";
import CreateChat from "../createChat/createChat";
import Settings from "../../assets/settings.svg";
import History from "../../assets/history.svg";
import Help from "../../assets/help.svg";
import { useState } from "react";
import "./sidebar.scss";

export default function Sidebar() {
    const [active, setActive] = useState<boolean>(false);

    return (
        <aside className="sidebar">
            <div className="sidebar__buttons">
                <BurgerMenu onClick={() => setActive(!active)} />
                <CreateChat active={active} onClick={() => setActive(!active)}/>
            </div>

            <div>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <img src={Help} alt="Help" />
                        {active && <p>Help</p>}
                    </li>
                    <li className="sidebar__list-item">
                        <img src={History} alt="Activity" />
                        {active && <p>Activity</p>}
                    </li>
                    <li className="sidebar__list-item">
                        <img src={Settings} alt="Settings" />
                        {active && <p>Settings</p>}
                    </li>
                </ul>
            </div>
        </aside>
    );
}
