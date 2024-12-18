import { CreateChat } from "components/helpers/createChat/createChat"
import { BurgerMenu } from "components/helpers/burgerMenu";
import { useState } from "react";
import classNames from "classnames";
import "./mobileSidebar.scss"

export const MobileSidebar: React.FC = () => {
    const [active, setActive] = useState<boolean>(true);

    const onClickMenu = () => {
        setActive(!active);
    }

    return (
        <div className={classNames("mobile-sidebar", active && "active")}>
            <BurgerMenu isSidebarOpen={true} onClick={onClickMenu}/>
            <CreateChat active={true} className="asd" onClick={() => {}}/>
        </div>
    )
}
