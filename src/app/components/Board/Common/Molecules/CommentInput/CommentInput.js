// src/app/components/common/Molecules/CommentInput/CommentInput.js
"use client";
import { useState } from 'react';
import CommentInputStyle from './CommentInput.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';
import Input from '@/app/components/common/Atoms/Input/Input';

export default function CommentInput() {
  const [comment, setComment] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = () => {
    if (comment.trim() === '') return;
    console.log('댓글:', comment);
    console.log('비공개:', isPrivate);
    setComment('');
  };

  return (
    <div className={CommentInputStyle.container}>
        <div className={CommentInputStyle.input}>
            <Input
                type="checkbox"
                id="private-check"
                label={<span className={CommentInputStyle.privateLabel}>비공개</span>}
                inputClassName={CommentInputStyle.checkboxInput}
                labelClassName={CommentInputStyle.checkboxWrapper}
            />
            <Input
                type="text"
                placeholder="댓글을 입력하세요."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={CommentInputStyle.input}
            />
        </div>
        <Button
            className={`${CommentInputStyle.submitButton} ${comment.trim() ? CommentInputStyle.active : ''}`}
            onClick={handleSubmit}
            disabled={!comment.trim()}
        >
            등록
        </Button>
    </div>
  );
}
