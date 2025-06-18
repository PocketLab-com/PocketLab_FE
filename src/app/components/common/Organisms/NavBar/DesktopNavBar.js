// src/app/components/BoardFree/Organisms/NavBar/NavBarDesktop.js]
"use client";
import { useRouter } from "next/navigation";
import DesktopStyle from './DesktopNavBar.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function DesktopNavBar() {
  const router = useRouter();

  return (
    <nav className={DesktopStyle.desktopNavbar}>
      <div className={DesktopStyle.left}>
        <Button className={`${DesktopStyle.leftItem} ${DesktopStyle.HeaderButton}`}>
          <img src="/logo.svg" alt="PocketLab Logo" className={DesktopStyle.logo} />
        </Button>
      </div>
      <div className={DesktopStyle.mid}>
        <Button className={`${DesktopStyle.midItemDrop} ${DesktopStyle.HeaderButton}`} onClick={() => router.push("/board/free")}>커뮤니티<ArrowIcon /></Button>
        <Button className={`${DesktopStyle.midItem} ${DesktopStyle.HeaderButton}`}>덱빌더</Button>
        <Button className={`${DesktopStyle.midItem} ${DesktopStyle.HeaderButton}`}>공지사항</Button>
      </div>
      <div className={DesktopStyle.right}>
        <Button
          className={`${DesktopStyle.loginButton} ${DesktopStyle.HeaderButton}`}
          onClick={() => router.push("/login")}
        >
          로그인
        </Button>
      </div>
    </nav>
  );
}


function ArrowIcon({ width = 22, height = 22, stroke = "#3E3E3E", ...props }) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        d="M5 8.5L11 14.5L17 8.5"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}