import { MobileHeader } from "../mobileHeader/mobileHeader"
import { MobileSidebar } from "../mobileSidebar/mobileSidebar"
import { useState } from "react"
import "./navMobile.scss"

export const NavMobile = () => {
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

    const onMenuClick = () => {
        setIsSidebarActive(!isSidebarActive)
    }

    return (
        <div>
            <MobileHeader 
                onMenuClick={onMenuClick}
            />
            <MobileSidebar 
                isSidebarActive={isSidebarActive}
                onMenuClick={onMenuClick}
            />
        </div>
    )
}
