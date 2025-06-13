"use client";
import NavBar from '@/app/components/common/Organisms/NavBar/NavBar';
import PostDetailOrganism from '@/app/components/Board/Free/Organisms/PostDetailOrganism/PostDetailOrganism';

export default function PostDetailPageTemplate({ postId }) {
  return (
    <>
      <NavBar />
      <PostDetailOrganism postId={postId} />
    </>
  );
}
