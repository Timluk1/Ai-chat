import TitleName from "../title/title";
import CardPromt from "../cardPropmt/cardPromt";
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
                <li>
                    <CardPromt />
                </li>
                <li>
                    <CardPromt />
                </li>
                <li>
                    <CardPromt />
                </li>
                <li>
                    <CardPromt />
                </li>
            </ul>
        </main>
    );
}
