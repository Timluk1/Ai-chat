import Menu from "../../assets/menu.svg";
import { Tooltip } from "react-tooltip";
import "./burgerMenu.scss";

interface IBurgerMenuProps {
    onClick: () => void;
}

export default function BurgerMenu({ onClick }: IBurgerMenuProps) {
    return (
        <button onClick={onClick}>
            <div className="burger-menu" data-tooltip-id="burger-menu-tooltip" data-tooltip-content="Развернуть меню">
                <Tooltip id="burger-menu-tooltip" />
                <img className="burger-menu__img" src={Menu} alt="burger-menu" />
            </div>
        </button>
    );
}
