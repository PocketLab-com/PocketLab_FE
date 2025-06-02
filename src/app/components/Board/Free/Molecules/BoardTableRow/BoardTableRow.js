import TableRowStyle from './BoardTableRow.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function BoardTableRow({ row, isNotice }) {
  return (
    <Button className={`${TableRowStyle.boardTableRow} ${isNotice ? TableRowStyle.notice : TableRowStyle.normal}`}>
      <div className={TableRowStyle.id}>{isNotice ? <span className={TableRowStyle.badge}>공지</span> : <span className={TableRowStyle.idText}>{row.number}</span>}</div>
      <div className={TableRowStyle.title}>{row.title}</div>
      <div className={TableRowStyle.likes}>{row.likes}</div>
      <div className={TableRowStyle.views}>{row.views}</div>
      <div className={TableRowStyle.author}>{row.author}</div>
      <div className={TableRowStyle.createdAt}>{row.createdAt}</div>
    </Button>
  );
}