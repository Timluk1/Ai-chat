import { MobileHeader } from "../mobileHeader/mobileHeader"
import { MobileSidebar } from "../mobileSidebar/mobileSidebar"
import { useSidebarContext } from "hooks/useSidebarContext"
import "./navMobile.scss"

export const NavMobile = () => {
    const { isActive, toggleSidebar } = useSidebarContext();

    return (
        <div>
            <MobileHeader 
                onMenuClick={toggleSidebar}
            />
            <MobileSidebar 
                isSidebarActive={isActive}
                onMenuClick={toggleSidebar}
            />
        </div>
    )
}
