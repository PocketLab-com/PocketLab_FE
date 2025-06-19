"use client";
import MobileBoardLayoutStyles from "./MobileLayout.module.css";
import NavBarMobile from "@/app/components/common/Organisms/NavBar/MobileNavBar";

export default function MobileLayout({ children, pathname }) {
    const segments = pathname.split("/").filter(Boolean); // ["board", "free", "1"] 등

    let boardType = "";
    let isPostDetail = false;
    let titleText = "커뮤니티";

    // "/board/..." 일 경우
    if (segments[0] === "board") {
        const [_, type, maybePostId] = segments;

        const isValidBoardType = ["free", "deck", "proud"].includes(type);
        const isNumericPostId = /^\d+$/.test(maybePostId || "");

        boardType = type;
        isPostDetail = segments.length === 3 && isValidBoardType && isNumericPostId;

        if (isValidBoardType) {
            switch (type) {
                case "free":
                titleText = "자유게시판";
                break;
                case "deck":
                titleText = "덱가이드";
                break;
                case "proud":
                titleText = "자랑게시판";
                break;
            }
        }
    }

    return (
        <div className={MobileBoardLayoutStyles.boardLayoutWrapper}>
            <NavBarMobile titleText={titleText} isDetail={isPostDetail} boardType={boardType} />
        {children}
        </div>
    );
}
