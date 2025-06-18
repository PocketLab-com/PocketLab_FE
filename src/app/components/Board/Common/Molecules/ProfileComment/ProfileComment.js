"use client";
import ProfileCommentStyle from './ProfileComment.module.css';

export default function ProfileComment({ author = "사용자 닉네임", time = "2023.10.01", imagePath = "/profile.svg", content = "댓글 내용이 여기에 들어갑니다." }) {
  return (
    <div className={ProfileCommentStyle.commentHeader}>
      <img className={ProfileCommentStyle.profileImage} src={imagePath} />
      <div className={ProfileCommentStyle.commentInfo}>
        <div className={ProfileCommentStyle.commentAuthorTime}>
          <span className={ProfileCommentStyle.commentAuthor}>{author}</span>
          <span className={ProfileCommentStyle.commentTime}>{time}</span>
        </div>
        <div className={ProfileCommentStyle.commentContent}>{content}</div>
      </div>
    </div>
  );
}