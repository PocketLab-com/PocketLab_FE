"use client";
import FreeBoardListTable from "@/app/components/Board/Free/Organisms/FreeBoardListTable/FreeBoardListTable";

export default function FreeBoardDesktop({ posts }) {
    return (
        <FreeBoardListTable posts={posts} />
    );
}
