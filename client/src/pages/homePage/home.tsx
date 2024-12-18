import { Sidebar } from "components/sidebar/sidebar";
import { Chat } from "components/chat/chat";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useChatContext } from "hooks/useChatContext";
import { MobileHeader } from "components/chat/mobileHeader/mobileHeader";
import { useCheckMobile } from "hooks/useCheckMobile";
import { MobileSidebar } from "components/sidebar/mobileSidebar/mobileSidebar";
import "./home.scss";

export const HomePage: React.FC = () => {
    const { setChatId } = useChatContext();
    const isMobile = useCheckMobile();

    const id = nanoid();

    useEffect(() => {  
        setChatId(id)
    }, [])
    
    return (
        <div className="home-page">
            {
                isMobile
                ?
                <>
                    <MobileHeader />
                    <MobileSidebar />
                </>
                :
                <Sidebar />
            }
            <Chat typePage="home" chatId={id ? id : ""}/>
        </div>
    );
}
