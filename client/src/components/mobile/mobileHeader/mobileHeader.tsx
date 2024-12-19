import Menu from "assets/menu.svg"
import "./modileHeader.scss"

interface IMobileHeaderProps {
    onMenuClick: () => void;
}

export const MobileHeader: React.FC<IMobileHeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="header">
            <div className="header__left">
                <button className="menu-button" onClick={onMenuClick}>
                    <img src={Menu} alt="Menu" />
                </button>
                <div className="header__title">
                    <h1>Gemini</h1>
                    <span>1.5 Flash</span>
                </div>
            </div>
        </header>
    )
}
