"use client";
import FBLTMStyle from './FreeBoardListTableMobile.module.css';
import MobileBoardHeader from '@/app/components/Board/Common/Molecules/BoardHeader/MobileBoardHeader';
import MobileBoardRow from '@/app/components/Board/Free/Molecules/MobileBoardRow/MobileBoardRow';

export default function FreeBoardListTableMobile({ posts }) {
  // 공지와 일반 게시글 분리
  const normalPosts = posts.filter(post => !post.isNotice);

  // 일반 게시글에 번호 필드 부여 (최신글이 위에 오게)
  const numberedPosts = normalPosts.map((post, idx) => ({
    ...post,
    number: normalPosts.length - idx,
  }));

  return (
    <div className={FBLTMStyle.freeBoardListTableMobile}>
      <MobileBoardHeader />
      <div className={FBLTMStyle.boardTable}>
        {numberedPosts.map((post) => (
          <MobileBoardRow key={post.id} row={post} isNotice={post.isNotice} />
        ))}
      </div>
    </div>
    );
}