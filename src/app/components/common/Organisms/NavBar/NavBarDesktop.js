// src/app/components/BoardFree/Organisms/NavBar/NavBarDesktop.js
import styles from './NavBarDesktop.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function NavBarDesktop() {
  return (
    <nav className={styles.desktopNavbar}>
      <div className={styles.desktopTop}>
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
      </div>
      <div className={styles.desktopBottom}>
        <ul className={styles.desktopSubMenu}>
          <li className={styles.desktopSubMenuItem}>자유게시판</li>
          <li className={styles.desktopSubMenuItem}>덱가이드</li>
          <li className={styles.desktopSubMenuItem}>자랑게시판</li>
        </ul>
      </div>
    </nav>
  );
}