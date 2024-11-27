import BurgerMenu from "../burgerMenu/burgerMenu"
import CreateChat from "../createChat/createChat"
import Settings from "../../assets/settings.svg"
import History from "../../assets/history.svg"
import Help from "../../assets/help.svg"
import "./sidebar.scss"

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__buttons">
                <BurgerMenu />
                <CreateChat />
            </div>

            <div>
                <ul className="sidebar__list">
                    <button>
                        <li className="sidebar__list-item">
                            <img src={Help} alt="" />
                        </li>
                    </button>
                    <button>
                        <li className="sidebar__list-item">
                            <img src={History} alt="" />
                        </li>
                    </button>
                    <button>
                        <li className="sidebar__list-item">
                            <img src={Settings} alt="" />
                        </li>
                    </button>
                </ul>
            </div>
        </aside>
    )
}
