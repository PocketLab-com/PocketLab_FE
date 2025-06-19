"use client";
import PostDetailOrganism from '@/app/components/Board/Free/Organisms/PostDetailOrganism/PostDetailOrganism';

export default function PostDetailPageTemplate({ postId }) {
  return (
    <>
      <PostDetailOrganism postId={postId} />
    </>
  );
}
