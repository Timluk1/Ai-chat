import { TitleName } from "components/chat/titleName"
import { CardPromt } from "components/chat/cardPropmt"
import classNames from "classnames";
import "./mainChat.scss";

interface IMainChatProps {
    showName: boolean;
}

export default function MainChat({ showName }: IMainChatProps) {
    return (
        <main className={classNames("main-chat", !showName && "hidden")}>
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
    );
}
