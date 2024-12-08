import { TitleName } from "components/chat/titleName"
import { CardPromt } from "components/chat/cardPropmt"
import "./mainChat.scss";

export const MainChat: React.FC = () => {
    return (
        <main className="main-chat">
            <TitleName />
            <ul className="main-chat__list">
                <li className="main-chat__list-item">
                    <CardPromt text="Suggest beaches to visit in a city, including details"/>
                </li>
                <li className="main-chat__list-item">
                    <CardPromt text="Suggest beaches to visit in a country, including details"/>
                </li>
                <li className="main-chat__list-item">
                    <CardPromt text="Suggest beaches to visit in a planet, including details"/>
                </li>
                <li className="main-chat__list-item">
                    <CardPromt text="Suggest beaches to visit in a home, including details"/>
                </li>
            </ul>
        </main>
    )
}