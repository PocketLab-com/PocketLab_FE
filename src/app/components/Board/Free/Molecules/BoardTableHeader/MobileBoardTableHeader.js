import MobileBoardTableHeaderStyle from './MobileBoardTableHeader.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function MobileBoardTableHeader() {
    return (
        <section className={MobileBoardTableHeaderStyle.boardTableHeader}>
            <div className={MobileBoardTableHeaderStyle.buttons}>
                <Button className={MobileBoardTableHeaderStyle.btnBlue}>전체글</Button>
                <Button className={MobileBoardTableHeaderStyle.btnGray}>HOT게시글</Button>
            </div>
        </section>
    );
}