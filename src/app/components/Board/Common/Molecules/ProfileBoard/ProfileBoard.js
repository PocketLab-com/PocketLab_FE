"use client";
import ProfileBoardStyle from './ProfileBoard.module.css';

export default function ProfileBoard({ nickName, time, viewCount, title }) {
  return (
    <div className={ProfileBoardStyle.container}>
        <img
          className={ProfileBoardStyle.profileImage}
          src="/images/profile.svg"
          alt="프로필 이미지"
        />
        <div className={ProfileBoardStyle.profileInfo}>
          <p className={ProfileBoardStyle.profileNick}>{nickName}</p>
          <div className={ProfileBoardStyle.boardStats}>
            <span className={ProfileBoardStyle.boardStat}>{time}</span>
            <span className={ProfileBoardStyle.boardStat}>{viewCount}</span>
          </div>
        </div>
    </div>
  );
}
