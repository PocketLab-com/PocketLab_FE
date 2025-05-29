// src/app/components/BoardFree/Molecules/MobileBoardRow/MobileBoardRow.js

import MobileBoardRowStyles from './MobileBoardRow.module.css';

export default function MobileBoardRow({ row, isNotice }) {
  return (
    <div className={`${MobileBoardRowStyles.row} ${isNotice ? MobileBoardRowStyles.notice : ""}`}>
      <div className={MobileBoardRowStyles.title}>{isNotice ? <span className={MobileBoardRowStyles.badge}>공지</span> : ""}{row.title}</div>
      <div className={MobileBoardRowStyles.content}>
        <div className={MobileBoardRowStyles.left}>
          <div className={MobileBoardRowStyles.nick}>{row.author}</div>
          <div className={MobileBoardRowStyles.date}>{row.createdAt}</div>
        </div>
        <div className={MobileBoardRowStyles.right}>
          <span className={MobileBoardRowStyles.iconGroup}>
            <HeartIcon />
            <span className={MobileBoardRowStyles.iconValue}>{row.likes}</span>
          </span>
          <span className={MobileBoardRowStyles.iconGroup}>
            <ViewIcon />
            <span className={MobileBoardRowStyles.iconValue}>{row.views}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// 아이콘은 인라인 SVG로 간단하게
function HeartIcon() {
  return (
    <svg width="14" height="14" aspect-ratio="1/1" fill="#888" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
      2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
      14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
      11.54L12 21.35z"/>
    </svg>
  );
}

function ViewIcon() {
  return (
    <svg width="16" height="16" fill="#888" viewBox="0 0 24 24">
      <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 
      12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 
      5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
    </svg>
  );
}
