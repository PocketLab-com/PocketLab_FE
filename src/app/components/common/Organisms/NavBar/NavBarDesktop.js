// src/app/components/BoardFree/Organisms/NavBar/NavBarDesktop.js
import desktopStyle from './NavBarDesktop.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function NavBarDesktop() {
  return (
    <nav className={desktopStyle.desktopNavbar}>
      {/* <div className={styles.desktopTop}>
        <div className={styles.desktopLogo}>로고</div>
        <ul className={styles.desktopMenu}>
          <li className={styles.desktopMenuItem}>
            커뮤니티 <span className={styles.desktopArrow}>▼</span>
          </li>
          <li className={styles.desktopMenuItem}>덱빌더</li>
          <li className={styles.desktopMenuItem}>공지사항</li>
        </ul>
        <div className={styles.desktopRight}>
          <Button>로그인</Button>
        </div>
      </div> */}
      <div className={desktopStyle.left}>로고</div>
      <div className={desktopStyle.mid}>
        <Button className={`${desktopStyle.midItemDrop} ${desktopStyle.HeaderButton}`}>커뮤니티<ArrowIcon /></Button>
        <Button className={`${desktopStyle.midItem} ${desktopStyle.HeaderButton}`}>덱빌더</Button>
        <Button className={`${desktopStyle.midItem} ${desktopStyle.HeaderButton}`}>공지사항</Button>
      </div>
      <div className={desktopStyle.right}>
        <Button className={`${desktopStyle.loginButton} ${desktopStyle.HeaderButton}`}>로그인</Button>
      </div>
      {/* <div className={styles.desktopBottom}>
        <ul className={styles.desktopSubMenu}>
          <li className={styles.desktopSubMenuItem}>자유게시판</li>
          <li className={styles.desktopSubMenuItem}>덱가이드</li>
          <li className={styles.desktopSubMenuItem}>자랑게시판</li>
        </ul>
      </div> */}
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