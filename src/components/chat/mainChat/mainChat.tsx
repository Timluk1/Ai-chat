import { TitleName } from "components/chat/titleName"
import { CardPromt } from "components/chat/cardPropmt"
import "./mainChat.scss";

export const MainChat: React.FC = () => {
    return (
        <main className="main-chat">
            <TitleName />
            <ul className="main-chat__list">
                <li className="main-chat__list-item">
                    <CardPromt text="Suggest beaches to visit in a city, including details" />
                </li>
                <li className="main-chat__list-item">
                    <CardPromt text="Write a bubble sort using Python" />
                </li>
                <li className="main-chat__list-item">
                    <CardPromt text="Give me information about our Earth" />
                </li>
                <li className="main-chat__list-item">
                    <CardPromt text="How to cook a perfect steak" />
                </li>
            </ul>
        </main>
    );
};
