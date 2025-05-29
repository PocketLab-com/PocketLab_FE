import style from './BoardTableRow.module.css';

export default function BoardTableRowHeader() {
  return (
    <div className={style.boardTableRow}>
        <span className={style.id}>번호</span>
        <span className={style.title}>제목</span>
        <span className={style.likes}>추천</span>
        <span className={style.views}>조회수</span>
        <span className={style.author}>작성자</span>
        <span className={style.createdAt}>게시일</span>
    </div>
  );
}