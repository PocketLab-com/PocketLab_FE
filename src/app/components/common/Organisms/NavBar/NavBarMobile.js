"use client";
import styles from './NavBarMobile.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function NavBarMobile({ titleText }) {
  return (
    <nav className={styles.mobileNavbar}>
      <div className={styles.mobileTop}>
        <div className={styles.mobileLeft}>
          <Button className={styles.mobileReturn}>〈</Button>
          <div className={styles.mobileTitle}>
            <div className={styles.mobileTitleText}>{titleText}</div>
          </div>
        </div>
        <div className={styles.mobileRight}>
          <button className={styles.mobileMenuIcon}>≡</button>
        </div>
      </div>

      {titleText === '커뮤니티' && (
        <div className={styles.mobileBottom}>
          <button className={styles.mobileButton}>
            <div className={styles.mobileSubTitleText}>자유게시판</div>
          </button>
          <button className={styles.mobileButton}>
            <div className={styles.mobileSubTitleText}>덱가이드</div>
          </button>
          <button className={styles.mobileButton}>
            <div className={styles.mobileSubTitleText}>자랑게시판</div>
          </button>
        </div>
      )}
    </nav>
  );
}