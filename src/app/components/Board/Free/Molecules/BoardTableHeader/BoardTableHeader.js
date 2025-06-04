import BoardTableHeaderStyle from './BoardTableHeader.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';
import SearchBox from '@/app/components/common/Molecules/SearchBox/SearchBox';

export default function BoardTableHeader() {
    return (
        <section className={BoardTableHeaderStyle.boardTableHeader}>
            <div className={BoardTableHeaderStyle.headerLeft}>
                <Button className={BoardTableHeaderStyle.btnBlue}>전체글</Button>
                <Button className={BoardTableHeaderStyle.btnGray}>HOT게시글</Button>
            </div>
            <div className={BoardTableHeaderStyle.headerRight}>
                <SearchBox />
                <Button className={BoardTableHeaderStyle.btnBlue}>
                    글쓰기<img src="/pencil.svg" />
                </Button>
            </div>
        </section>
    );
}