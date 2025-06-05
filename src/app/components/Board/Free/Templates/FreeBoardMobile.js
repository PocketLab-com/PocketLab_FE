import NavBarMobile from "@/app/components/common/Organisms/NavBar/NavBarMobile";
import FreeBoardListTableMobile from "@/app/components/Board/Free/Organisms/FreeBoardListTableMobile/FreeBoardListTableMobile";

export default function FreeBoardMobile({ posts }) {
    return (
        <div className="free-board-mobile">
            <NavBarMobile titleText="커뮤니티" />
            <FreeBoardListTableMobile posts={posts} />
        </div>
    );
}