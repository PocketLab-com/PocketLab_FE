import BoardHeaderStyle from './BoardHeader.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';
import SearchBox from '@/app/components/common/Molecules/SearchBox/SearchBox';

export default function BoardHeader() {
    return (
        <section className={BoardHeaderStyle.boardHeader}>
            <div className={BoardHeaderStyle.headerLeft}>
                <Button className={BoardHeaderStyle.btnBlue}>전체글</Button>
                <Button className={BoardHeaderStyle.btnGray}>HOT게시글</Button>
            </div>
            <div className={BoardHeaderStyle.headerRight}>
                <SearchBox />
                <Button className={BoardHeaderStyle.btnBlue}>
                    글쓰기<img src="/pencil.svg" />
                </Button>
            </div>
        </section>
    );
}