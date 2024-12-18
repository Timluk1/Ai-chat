import { CreateChat } from "components/helpers/createChat/createChat"
import { BurgerMenu } from "components/helpers/burgerMenu";
import { RecentChats } from "components/sidebar/recentChats";
import { useNavigate } from "react-router";
import classNames from "classnames";
import "./mobileSidebar.scss"

interface IMobileSidebarProps {
    isSidebarActive: boolean;
    onMenuClick: () => void;
}

export const MobileSidebar: React.FC<IMobileSidebarProps> = ({ isSidebarActive, onMenuClick }) => {
    const navigate = useNavigate()
    
    const onClickCreateChat = () => {
        navigate("/chat")
    }
    
    return (
        <div className={classNames("mobile-sidebar", isSidebarActive && "active")}>
            <BurgerMenu isSidebarOpen={true} onClick={onMenuClick}/>
            <CreateChat active={true} onClick={onClickCreateChat}/>
            <RecentChats active={isSidebarActive} />
        </div>
    )
}
