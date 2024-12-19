import Menu from "assets/menu.svg";
import { Tooltip } from "react-tooltip";
import { useCheckMobile } from "hooks/useCheckMobile";
import "./burgerMenu.scss";

interface IBurgerMenuProps {
    isSidebarOpen: boolean;
    onClick: () => void;
}

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isSidebarOpen, onClick }) => {
    const isMobile = useCheckMobile();
    const tooltipText = isSidebarOpen ? "Свернуть меню" : "Развернуть меню";

    return (
        <button
            onClick={onClick}
            className="burger-menu"
            data-tooltip-id="burger-menu-tooltip"
            data-tooltip-content={tooltipText}
            data-tooltip-place="right"
        >
            <img className="burger-menu__img" src={Menu} alt="burger-menu" />
            <Tooltip
                className="burger-menu-tooltip"
                id="burger-menu-tooltip"
                place="right"
                clickable={isMobile}
            />
        </button>
    );
}

