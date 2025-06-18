"use client";
import CommentFunctionStyle from './CommentFunction.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function CommentFunction({ isMine }) {
  return (
    <div className={CommentFunctionStyle.commentFunction}>
      <Button className={CommentFunctionStyle.btn}>좋아요</Button>

      {isMine ? (
        <>
          <Button className={CommentFunctionStyle.btn}>수정하기</Button>
          <Button className={CommentFunctionStyle.btn}>삭제하기</Button>
        </>
      ) : (
        <>
          <Button className={CommentFunctionStyle.btn}>답글달기</Button>
          <Button className={CommentFunctionStyle.btn}>신고하기</Button>
        </>
      )}
    </div>
  );
}
