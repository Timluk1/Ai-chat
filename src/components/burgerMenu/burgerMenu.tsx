import "./burgerMenu.scss";

interface IBurgerMenuProps {
    onClick: () => void;
}

export default function BurgerMenu({ onClick }: IBurgerMenuProps) {
    return (
        <button onClick={onClick}>
            <div className="burger-menu">
                <div className="burger-menu__line"></div>
                <div className="burger-menu__line"></div>
                <div className="burger-menu__line"></div>
            </div>
        </button>
    );
}
