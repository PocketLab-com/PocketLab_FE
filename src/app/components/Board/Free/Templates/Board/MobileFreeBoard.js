import FreeBoardListTableMobile from "@/app/components/Board/Free/Organisms/FreeBoardListTableMobile/FreeBoardListTableMobile";
import FreeBoardMobileStyles from './FreeBoardMobile.module.css';

export default function FreeBoardMobile({ posts }) {
    return (
        <div className={FreeBoardMobileStyles.freeBoardMobile}>
            <FreeBoardListTableMobile posts={posts} />
        </div>
    );
}