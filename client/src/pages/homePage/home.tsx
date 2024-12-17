import { Sidebar } from "components/sidebar/sidebar";
import { Chat } from "components/chat/chat";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useChatContext } from "hooks/useChatContext";
import { isMobile } from "react-device-detect";
import { MobileHeader } from "components/chat/mobileHeader/mobileHeader";
import "./home.scss";

export const HomePage: React.FC = () => {
    const id = nanoid();
    const { setChatId } = useChatContext();

    useEffect(() => {  
        setChatId(id)
    }, [])
    
    return (
        <div className="home-page">
            {
                isMobile
                ?
                <MobileHeader />
                :
                <Sidebar />
            }
            <Chat typePage="home" chatId={id ? id : ""}/>
        </div>
    );
}
