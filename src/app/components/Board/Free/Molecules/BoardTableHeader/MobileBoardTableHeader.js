import style from './BoardTableHeader.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function MobileBoardTableHeader() {
    return (
        <section className={style.boardTableHeader}>
            <div className={style.headerLeft}>
                <Button className={style.btn}>전체글</Button>
                <Button className={style.btn}>HOT게시글</Button>
            </div>
        </section>
    );
}