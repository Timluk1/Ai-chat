import { TitleName } from "components/chat/titleName"
import { CardPromt } from "components/chat/cardPropmt"
import "./mainChat.scss";

export const MainChat: React.FC = () => {
    return (
        <main className="main-chat">
            <TitleName />
            <ul className="main-chat__list">
                <li className="main-chat__list-item">
                    <CardPromt />
                </li>
                <li className="main-chat__list-item">
                    <CardPromt />
                </li>
                <li className="main-chat__list-item">
                    <CardPromt />
                </li>
                <li className="main-chat__list-item">
                    <CardPromt />
                </li>
            </ul>
        </main>
    )
}