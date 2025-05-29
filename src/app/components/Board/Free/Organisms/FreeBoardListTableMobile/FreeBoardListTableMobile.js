"use client";
import FBLTMStyle from './FreeBoardListTableMobile.module.css';
import Notice from '@/app/components/Board/Free/Molecules/Notice/Notice';
import MobileBoardTableHeader from '@/app/components/Board/Free//Molecules/BoardTableHeader/MobileBoardTableHeader';

export default function FreeBoardListTableMobile({ posts, onPostsPerPageChange, postsPerPage }) {
    return (
        <div className={FBLTMStyle.freeBoardListTableMobile}>
            <MobileBoardTableHeader />
            <Notice />
        </div>
    );
}