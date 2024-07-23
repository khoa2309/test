"use client";

import { useEffect, useState } from "react";
import { Nav } from "./ui/nav";
import {
    AlertCircle,
    Archive,
    ArchiveX,
    ChevronRight,
    File,
    Inbox,
    LayoutDashboard,
    MessagesSquare,
    Search,
    Send,
    Settings,
    ShoppingCart,
    Trash2,
    Users2,
    UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
function SideNavbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const onlyWidth = useWindowWidth();

    useEffect(() => {
        setIsMobile(onlyWidth < 768);
    }, [onlyWidth]);

    function toggleSideNavbar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
            {!isMobile && (
                <div className="absolute right-[-20px] top-7">
                    <Button
                        variant="secondary"
                        className="rounded-full p-2"
                        onClick={toggleSideNavbar}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            )}
            <Nav
                isCollapsed={isMobile ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Users",
                        href: "/users",
                        icon: UsersRound,
                        variant: "ghost",
                    },
                    {
                        title: "Orders",
                        href: "/orders",
                        icon: ShoppingCart,
                        variant: "ghost",
                    },
                    {
                        title: "Settings",
                        href: "/settings",
                        icon: Settings,
                        variant: "ghost",
                    },
                ]}
            />
        </div>
    );
}

export default SideNavbar;
