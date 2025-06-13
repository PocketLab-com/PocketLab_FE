"use client";
import { useState } from 'react';
import FBLTMStyle from './FreeBoardListTableMobile.module.css';
import MobileBoardTableHeader from '@/app/components/Board/Free//Molecules/BoardTableHeader/MobileBoardTableHeader';
import MobileBoardRow from '@/app/components/Board/Free/Molecules/MobileBoardRow/MobileBoardRow';

export default function FreeBoardListTableMobile({ posts }) {
  // 공지와 일반 게시글 분리
  const normalPosts = posts.filter(post => !post.isNotice);

  const [postsPerPage, setPostsPerPage] = useState(30);

  // 일반 게시글에 번호 필드 부여 (최신글이 위에 오게)
  const numberedPosts = normalPosts.map((post, idx) => ({
    ...post,
    number: normalPosts.length - idx,
  }));

  return (
    <div className={FBLTMStyle.freeBoardListTableMobile}>
      <MobileBoardTableHeader />
      <div className={FBLTMStyle.boardTable}>
        {numberedPosts.map((post) => (
          <MobileBoardRow key={post.id} row={post} isNotice={post.isNotice} />
        ))}
      </div>
    </div>
    );
}