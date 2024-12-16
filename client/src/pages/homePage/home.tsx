import { Sidebar } from "components/sidebar/sidebar";
import { Chat } from "components/chat/chat";
import { nanoid } from "nanoid";
import "./home.scss";

export const HomePage: React.FC = () => {
    const id = nanoid();
    return (
        <div className="home-page">
            <Sidebar />
            <Chat typePage="home" chatId={id ? id : ""}/>
        </div>
    );
}
