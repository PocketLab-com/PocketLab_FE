// src/app/board/free/page.js
"use client";
import useIsMobile from "@/app/hook/useIsMobile";
import PostDetailDesk from "@/app/components/Board/Free/Templates/Post/PostPageTemplateDesk";
import PostDetailMobile from "@/app/components/Board/Free/Templates/Post/PostPageTemplateMobile";

export default function FreeBoardPage() {
  const { isMobile, isHydrated } = useIsMobile(900);

  if (!isHydrated) return null;

  return (
    <>
      {isMobile ? (
        <PostDetailMobile postId={0} />
      ) : (
        <PostDetailDesk postId={0} />
      )}
    </>
  );
}