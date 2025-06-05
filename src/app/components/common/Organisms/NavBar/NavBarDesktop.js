// src/app/components/BoardFree/Organisms/NavBar/NavBarDesktop.js]
"use client";
import { useRouter } from "next/navigation";
import desktopStyle from './NavBarDesktop.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function NavBarDesktop() {
  const router = useRouter();

  return (
    <nav className={desktopStyle.desktopNavbar}>
      <div className={desktopStyle.left}>
        <Button className={`${desktopStyle.leftItem} ${desktopStyle.HeaderButton}`}>
          <img src="/logo.svg" alt="PocketLab Logo" className={desktopStyle.logo} />
        </Button>
      </div>
      <div className={desktopStyle.mid}>
        <Button className={`${desktopStyle.midItemDrop} ${desktopStyle.HeaderButton}`} onClick={() => router.push("/board/free")}>커뮤니티<ArrowIcon /></Button>
        <Button className={`${desktopStyle.midItem} ${desktopStyle.HeaderButton}`}>덱빌더</Button>
        <Button className={`${desktopStyle.midItem} ${desktopStyle.HeaderButton}`}>공지사항</Button>
      </div>
      <div className={desktopStyle.right}>
        <Button
          className={`${desktopStyle.loginButton} ${desktopStyle.HeaderButton}`}
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