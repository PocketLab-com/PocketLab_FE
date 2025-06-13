"use client";
import useIsMobile from "@/app/hook/useIsMobile";
import PostDesk from "./PostDetailPageTemplateDesk.js";
import PostMobile from "./PostDetailPageTemplateMobile.js";

export default function PostDetailPageTemplate({ postId }) {

    const { isMobile, isHydrated } = useIsMobile(900);

    if (!isHydrated) return <></>;

    return (
        <>
        {isMobile ? <PostMobile postId={postId} /> : <PostDesk postId={postId} />}
        </>
    );
}