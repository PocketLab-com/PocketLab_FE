import MobileBoardHeaderStyle from './MobileBoardHeader.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function MobileBoardHeader() {
    return (
        <section className={MobileBoardHeaderStyle.boardHeader}>
            <div className={MobileBoardHeaderStyle.buttons}>
                <Button className={MobileBoardHeaderStyle.btnBlue}>전체글</Button>
                <Button className={MobileBoardHeaderStyle.btnGray}>HOT게시글</Button>
            </div>
        </section>
    );
}