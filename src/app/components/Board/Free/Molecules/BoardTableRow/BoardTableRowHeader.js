import RowHeader from './BoardTableRowHeader.module.css';

export default function BoardTableRowHeader() {
  return (
    <div className={RowHeader.boardTableRow}>
        <span className={RowHeader.number}>번호</span>
        <span className={RowHeader.title}>제목</span>
        <span className={RowHeader.likes}>추천</span>
        <span className={RowHeader.views}>조회수</span>
        <span className={RowHeader.author}>작성자</span>
        <span className={RowHeader.createdAt}>게시일</span>
    </div>
  );
}