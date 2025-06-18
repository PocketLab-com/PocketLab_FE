"use client";
import LikeScrapStyle from './LikeScrap.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function LikeScrap({ likeCount, scrapCount }) {
  return (
    <div className={LikeScrapStyle.container}>
      <Button className={LikeScrapStyle.iconButton}>
        <img
          className={LikeScrapStyle.icon}
          src="/like.svg"
        />
        <span className={LikeScrapStyle.count}>좋아요 {likeCount}</span>
      </Button>
      <Button className={LikeScrapStyle.iconButton}>
        <img
          className={LikeScrapStyle.icon}
          src="/scrap.svg"
        />
        <span className={LikeScrapStyle.count}>스크랩 {scrapCount}</span>
      </Button>
    </div>
  );
}