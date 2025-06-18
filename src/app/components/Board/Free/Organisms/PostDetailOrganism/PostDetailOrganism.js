"use client";
import FreePostStyle from './PostDetailOrganism.module.css';
import ProfileBoard from '@/app/components/Board/Common/Molecules/ProfileBoard/ProfileBoard';
import LikeScrap from '@/app/components/Board/Common/Molecules/LikeScrap/LikeScrap';
import Container from '@/app/components/Board/Common/Molecules/Container/Container';
import CommentList from '@/app/components/Board/Common/Organisms/CommentList/CommentList';

const dummyPost = {
  id: 1,
  nickName: '사용자 닉네임',
  time: '2023.10.01',
  title: '자유게시판 게시글 제목',
  content: '자유게시판 게시글 내용입니다. 이곳에 게시글의 내용을 작성합니다.',
  likeCount: 10,
  scrapCount: 5,
};

export default function PostDetailOrganism({ postId }) {
  return (
      <div className={FreePostStyle.frame}>
        <h1 className={FreePostStyle.title}>자유게시판</h1>
        <div className={FreePostStyle.content}>
          <div className={FreePostStyle.post}>
            <div className={FreePostStyle.profile}>
              <div className={FreePostStyle.top}>
                <ProfileBoard nickName="사용자 닉네임" time="2023.10.01" viewCount="100" title={dummyPost.title} />
                <img className={FreePostStyle.right} src="/Meatballs_menu.svg" />
              </div>
              <h1 className={FreePostStyle.postTitle}>{dummyPost.title}</h1>
              <div className={FreePostStyle.postContent}>{dummyPost.content}</div>
            </div>
          </div>
          <LikeScrap likeCount={dummyPost.likeCount} scrapCount={dummyPost.scrapCount} />
        </div>
        <Container />
        <CommentList postId={postId} />
        
      </div>
  );
}
