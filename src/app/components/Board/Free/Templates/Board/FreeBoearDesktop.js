"use client";
import { useState } from "react";
import NavBarDesktop from "@/app/components/common/Organisms/NavBar/NavBarDesktop";
import FreeBoardListTable from "@/app/components/Board/Free/Organisms/FreeBoardListTable/FreeBoardListTable";
import FreeBoardDesktopStyles from "./FreeBoardDesktop.module.css";
import MenuList from "@/app/components/Board/Common/Organisms/MenuList/MenuList";

const MENUS = [
    { key: 'free', label: '자유게시판' },
    { key: 'guide', label: '덱가이드' },
    { key: 'proud', label: '자랑게시판' },
];

export default function FreeBoardDesktop({ posts }) {
    const [selectedMenu, setSelectedMenu] = useState('free');
    return (
        <div className={FreeBoardDesktopStyles.freeBoardDesktop}>
            <NavBarDesktop />
            <div className={FreeBoardDesktopStyles.Body}>
                <MenuList
                    menus={MENUS}
                    selected={selectedMenu}
                    onSelect={setSelectedMenu}
                />
                <FreeBoardListTable posts={posts} />
            </div>
        </div>
    );
}
