"use client";
import MobileBoardLayoutStyles from "./MobileLayout.module.css";
import NavBarMobile from "@/app/components/common/Organisms/NavBar/MobileNavBar";

export default function MobileLayout({ children }) {
    return (
        <div className={MobileBoardLayoutStyles.boardLayoutWrapper}>
            <NavBarMobile titleText="커뮤니티" />
            {children}
        </div>
    );
}