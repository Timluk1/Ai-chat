import { Sidebar } from "components/sidebar/sidebar";
import { Chat } from "components/chat/chat";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useChatContext } from "hooks/useChatContext";
import { useCheckMobile } from "hooks/useCheckMobile";
import { NavMobile } from "components/mobile/navMobile/navMobile";
import "./home.scss";

export const HomePage: React.FC = () => {
    const { setChatId } = useChatContext();
    const isMobile = useCheckMobile();

    const id = nanoid();

    useEffect(() => {  
        setChatId(id)
    }, []);
    
    return (
        <div className="home-page">
            {
                isMobile
                ?
                <NavMobile />
                :
                <Sidebar />
            }
            <Chat typePage="home" chatId={id ? id : ""}/>
        </div>
    );
}
