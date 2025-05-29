import style from './BoardTableRow.module.css';

export default function BoardTableRow({ row, isNotice }) {
  return (
    <div className={style.boardTableRow}>
      <div className={style.id}>{isNotice ? <span className={style.badge}>공지</span> : row.number}</div>
      <div className={style.title}>{row.title}</div>
      <div className={style.likes}>{row.likes}</div>
      <div className={style.views}>{row.views}</div>
      <div className={style.author}>{row.author}</div>
      <div className={style.createdAt}>{row.createdAt}</div>
    </div>
  );
}