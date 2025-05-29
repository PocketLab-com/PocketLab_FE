import NavBarDesktop from "@/app/components/common/Organisms/NavBar/NavBarDesktop";
import FreeBoardListTable from "@/app/components/Board/Free/Organisms/FreeBoardListTable/FreeBoardListTable";

export default function FreeBoardDesktop({ posts }) {
    return (
        <div className="free-board-desktop">
            <NavBarDesktop />
            <FreeBoardListTable posts={posts} />
        </div>
    );
}
