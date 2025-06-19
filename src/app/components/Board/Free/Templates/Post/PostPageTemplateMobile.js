"use client";
import PostDetailPageMobileStyle from './PostPageTemplateMobile.module.css';
import ProfileBoard from '@/app/components/Board/Common/Molecules/ProfileBoard/ProfileBoard';
import LikeScrapView from '../../../Common/Molecules/LikeScrapView/LikeScrapView';
import CommentList from '@/app/components/Board/Common/Organisms/CommentList/CommentList';

const dummyPost = {
  id: 1,
  nickName: '사용자 닉네임',
  time: '2023.10.01',
  title: '자유게시판 게시글 제목',
  content: '자유게시판 게시글 내용입니다. 이곳에 게시글의 내용을 작성합니다.',
  likeCount: 10,
  scrapCount: 5,
  viewCount: 100,
};

export default function PostDetailPageMobile({ postId }) {
  return (
    <div className={PostDetailPageMobileStyle.frame}>
      <div className={PostDetailPageMobileStyle.content}>
        <div className={PostDetailPageMobileStyle.profile}>
          <ProfileBoard nickName={dummyPost.nickName} time={dummyPost.time} profileImage="/profile_image.png" isMobile={true} />
          <img className={PostDetailPageMobileStyle.right} src="/Meatballs_menu.svg" alt="메뉴 아이콘" />
        </div>
        <div className={PostDetailPageMobileStyle.input}>
          <h1 className={PostDetailPageMobileStyle.postTitle}>{dummyPost.title}</h1>
          <div className={PostDetailPageMobileStyle.postContent}>{dummyPost.content}</div>
        </div>
      </div>
      <LikeScrapView likeCount={dummyPost.likeCount} scrapCount={dummyPost.scrapCount} viewCount={dummyPost.viewCount} />
      <CommentList postId={postId} />
    </div>
  );
}
