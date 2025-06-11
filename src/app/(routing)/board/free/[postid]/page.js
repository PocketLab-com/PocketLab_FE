import PostDetailPageTemplate from '@/app/components/Board/Free/Templates/PostDetailPageTemplate';

export default function PostDetailPage({ params }) {
  // Next.js 15 App Router: params.postId 사용
  return <PostDetailPageTemplate postId={params.postId} />;
}