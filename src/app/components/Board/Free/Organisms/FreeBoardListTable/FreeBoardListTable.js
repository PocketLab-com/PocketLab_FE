"use client";
import styles from './FreeBoardListTable.module.css';
import Notice from '@/app/components/Board/Free/Molecules/Notice/Notice';
import BoardTableHeader from '@/app/components/Board/Free/Molecules/BoardTableHeader/BoardTableHeader';
import BoardTableRowHeader from '@/app/components/Board/Free/Molecules/BoardTableRow/BoardTableRowHeader';
import BoardTableRow from '@/app/components/Board/Free/Molecules/BoardTableRow/BoardTableRow';
import PostsPerPageDropdown from '@/app/components/Board/Free/Molecules/PostsPerPageDropdown/PostsPerPageDropdown';
import { useState } from 'react';

/**
 * @param {Object[]} posts - 게시글 리스트(공지 포함)
 */
export default function FreeBoardListTable({ posts }) {
  // 공지와 일반 게시글 분리
  const noticePosts = posts.filter(post => post.isNotice);
  const normalPosts = posts.filter(post => !post.isNotice);

  const [postsPerPage, setPostsPerPage] = useState(30);

  // 일반 게시글에 번호 필드 부여 (최신글이 위에 오게)
  const numberedPosts = normalPosts.map((post, idx) => ({
    ...post,
    number: normalPosts.length - idx,
  }));

  const displayedPosts = numberedPosts.slice(0, postsPerPage);

  return (
    <section className={styles.boardSection}>
      {/* <Notice /> */}
      <BoardTableHeader />
      <div className={styles.infoBar}>
        <span>게시물 총 {posts.length}개</span>
        <PostsPerPageDropdown value={postsPerPage} onChange={setPostsPerPage} />
      </div>
      <div className={styles.boardTable}>
        <BoardTableRowHeader />
        {/* 공지 먼저 출력 */}
        {noticePosts.map(post => (
          <BoardTableRow key={post.id} row={post} isNotice />
        ))}
        {/* 일반 게시글 출력 */}
        {displayedPosts.map(post => (
          <BoardTableRow key={post.id} row={post} />
        ))}
      </div>
    </section>
  );
}
