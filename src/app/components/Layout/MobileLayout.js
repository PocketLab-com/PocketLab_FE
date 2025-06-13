"use client";
import NavBarMobile from "@/app/components/common/Organisms/NavBar/NavBarMobile";
import FreeBoardListTableMobile from "@/app/components/Board/Free/Organisms/FreeBoardListTableMobile/FreeBoardListTableMobile";

export default function MobileLayout({ children }) {
    return (
        <div className="mobile-layout">
            <NavBarMobile titleText="커뮤니티" />
            <FreeBoardListTableMobile posts={children} />
        </div>
    );
}