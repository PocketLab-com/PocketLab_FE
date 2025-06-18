import CommentListStyle from './CommentList.module.css';
import Comments from '@/app/components/Board/Common/Organisms/Comments/Comments';
// import CommentInput from '@/app/components/Board/Common/Molecules/CommentInput/CommentInput';

const dummyComment = {
  content: '이것은 댓글 내용입니다. 댓글을 작성할 수 있습니다.',
  isMine: false, // 댓글이 본인의 것인지 여부
  author: '사용자 닉네임',
  time: '2023.10.01',
  imagePath: 'profile.svg',
};

// 12개의 더미데이터
const dummyComments = Array.from({ length: 12 }, (_, index) => ({
  ...dummyComment,
  author: `사용자 닉네임 ${index + 1}`,
  time: `2023.10.${index + 1}`,
}));

export default function CommentList({ postId }) {
  const count = dummyComments.length;

  return (
    <>
        <h1 className={CommentListStyle.title}>댓글 {count}</h1>
        {dummyComments.map((comment, index) => (
          <Comments key={index} content={comment.content} isMine={comment.isMine} author={comment.author} time={comment.time} imagePath={comment.imagePath} />
        ))}
        {/* <CommentInput /> */}
    </>
  );
}