import BurgerMenu from "../burgerMenu/burgerMenu";
import CreateChat from "../createChat/createChat";
import Settings from "../../assets/settings.svg";
import History from "../../assets/history.svg";
import Help from "../../assets/help.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import "./sidebar.scss";

const sidebarVariants = {
    open: {
        width: "200px",
        transition: { duration: 0.2},
    },
    closed: {
        width: "100px",
        transition: { duration: 0.2},
    },
};


export default function Sidebar() {
    const [active, setActive] = useState<boolean>(false);
    return (
        <motion.div
            transition={{ duration: 0.2 }}
            animate={active ? "open" : "closed"}
            variants={sidebarVariants}
        >
            <aside className="sidebar">
                <div className="sidebar__buttons">
                    <BurgerMenu onClick={() => setActive(!active)} />
                    <CreateChat active={active} />
                </div>

                <div>
                    <ul className="sidebar__list">
                        <button>
                            <li className="sidebar__list-item">
                                <img src={Help} alt="" />
                                {active
                                    &&
                                    <p>Help</p>
                                }
                            </li>
                        </button>
                        <button>
                            <li className="sidebar__list-item">
                                <img src={History} alt="" />
                                {active
                                    &&
                                    <p>Activity</p>
                                }
                            </li>
                        </button>
                        <button>
                            <li className="sidebar__list-item">
                                <img src={Settings} alt="" />
                                {active
                                    &&
                                    <p>Settings</p>
                                }
                            </li>
                        </button>
                    </ul>
                </div>
            </aside>
        </motion.div>
    );
}
