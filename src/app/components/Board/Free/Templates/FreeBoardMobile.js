import NavBarMobile from "@/app/components/common/Organisms/NavBar/NavBarMobile";
import FreeBoardListTableMobile from "@/app/components/Board/Free/Organisms/FreeBoardListTableMobile/FreeBoardListTableMobile";

export default function FreeBoardMobile({ posts }) {
    return (
        <div className="free-board-mobile">
            <NavBarMobile />
            <FreeBoardListTableMobile posts={posts} />
        </div>
    );
}