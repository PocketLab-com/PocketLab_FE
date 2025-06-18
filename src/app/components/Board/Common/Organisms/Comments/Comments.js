import CommentsStyle from './Comments.module.css';
import ProfileComment from '@/app/components/Board/Common/Molecules/ProfileComment/ProfileComment';
import CommentFunction from '@/app/components/Board/Common/Molecules/CommentFunction/CommentFunction';

export default function Comments({ content, isMine, author, time, imagePath }) {
  return (
    <div className={CommentsStyle.comments}>
      <div className={CommentsStyle.commentItem}>
        <ProfileComment author={author} time={time} imagePath={imagePath} content={content} />
      </div>
      <CommentFunction isMine={isMine} />
    </div>
  );
}