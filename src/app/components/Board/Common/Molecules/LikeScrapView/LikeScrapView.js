"use client";
import LikeScrapViewStyle from './LikeScrapView.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function LikeScrapView({ likeCount, scrapCount, viewCount }) {
  return (
    <div className={LikeScrapViewStyle.container}>
        <div className={LikeScrapViewStyle.leftButton}>
            <Button className={LikeScrapViewStyle.iconButton}>
            <img
                className={LikeScrapViewStyle.icon}
                src="/like.svg"
            />
            <span className={LikeScrapViewStyle.count}>좋아요 {likeCount}</span>
            </Button>
            <Button className={LikeScrapViewStyle.iconButton}>
            <img
                className={LikeScrapViewStyle.icon}
                src="/scrap.svg"
            />
            <span className={LikeScrapViewStyle.count}>스크랩 {scrapCount}</span>
            </Button>
      </div>
      <Button className={LikeScrapViewStyle.iconButton}>
        <img
          className={LikeScrapViewStyle.icon}
          src="/view.svg"
        />
        <span className={LikeScrapViewStyle.count}>{viewCount}</span>
      </Button>
    </div>
  );
}