// src/app/components/common/Atoms/InputWithIcon/InputWithIcon.js

import styles from './SearchBox.module.css';
import Input from '@/app/components/common/Atoms/Input/Input.js';
import Button from '@/app/components/common/Atoms/Button/Button.js';

export default function InputWithIcon({ className = ''}) {
  return (
    <div className={`${styles.searchBox} ${className}`}>
        <Input
            type="text"
            className={styles.searchInput}
            placeholder="검색어를 입력하세요"
        />
        <Button className={styles.searchButton}>
            <img src="/search.svg" alt="검색" className={styles.searchIcon} />
        </Button>
    </div>
  );
}
