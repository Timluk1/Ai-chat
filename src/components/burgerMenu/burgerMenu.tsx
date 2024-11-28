import "./burgerMenu.scss";

export default function BurgerMenu() {
    return (
        <button>
            <div className="burger-menu">
                <div className="burger-menu__line"></div>
                <div className="burger-menu__line"></div>
                <div className="burger-menu__line"></div>
            </div>
        </button>
    );
}
