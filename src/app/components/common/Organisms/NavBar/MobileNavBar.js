"use client";
import styles from './MobileNavBar.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function MobileNavBar({ titleText }) {
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
          <Button className={styles.mobileMenuIcon}>≡</Button>
        </div>
      </div>

      {titleText === '커뮤니티' && (
        <div className={styles.mobileBottom}>
          <Button className={styles.mobileButton}>
            자유게시판
          </Button>
          <Button className={styles.mobileButton}>
            덱가이드
          </Button>
          <Button className={styles.mobileButton}>
            자랑게시판
          </Button>
        </div>
      )}
    </nav>
  );
}