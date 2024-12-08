import { Sidebar } from "components/sidebar/sidebar";
import { Chat } from "components/chat/chat";
import "./home.scss";

export const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Sidebar />
            <Chat typePage="home"/>
        </div>
    );
}
