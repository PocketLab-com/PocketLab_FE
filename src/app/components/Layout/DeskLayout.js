// src/app/(routing)/board/DeskLayout.js
"use client";
import { usePathname } from "next/navigation";
import NavBar from '@/app/components/common/Organisms/NavBar/NavBar';
import MenuList from "@/app/components/Board/Common/Organisms/MenuList/MenuList";
import DeskBoardLayoutStyles from './DeskLayout.module.css';

const MENUS = [
  { key: 'free', label: '자유게시판' },
  { key: 'deck', label: '덱가이드' },
  { key: 'proud', label: '자랑게시판' },
];

export default function DeskBoardLayout({ children }) {
  // 현재 URL 경로를 가져옴
  const pathname = usePathname();
  // 경로에서 /board/다음의 값을 파싱 (예시: /board/deck → 'deck')
  const selectedMenu = pathname?.split("/")[2] || "free";
  return (
    <div className={DeskBoardLayoutStyles.boardLayoutWrapper}>
      <NavBar />
      <div className={DeskBoardLayoutStyles.boardLayoutBody}>
        <MenuList menus={MENUS} selected={selectedMenu} />
        {children}
      </div>
    </div>
  );
}