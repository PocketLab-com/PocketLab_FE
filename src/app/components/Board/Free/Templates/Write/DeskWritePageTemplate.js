"use client";
import { useState } from 'react';
import Button from '@/app/components/common/Atoms/Button/Button';
import EditorContainer from '@/app/components/Board/Free/Organisms/EditorContainer/EditorContainer';
import WritePageTemplateStyles from './DeskWritePageTemplate.module.css';

export default function DeskWritePageTemplate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log({ title, content }); // API 연동 위치
  };

  return (
    <div className={WritePageTemplateStyles.container}>
        <h1 className={WritePageTemplateStyles.title}>글쓰기</h1>
        <EditorContainer title={title} setTitle={setTitle} content={content} setContent={setContent} />
        <div className={WritePageTemplateStyles.buttonContainer}>
            <Button
                onClick={() => console.log('삭제')}
                className={WritePageTemplateStyles.cancelButton}
            >삭제
            </Button>
            <Button
                onClick={handleSubmit}
                className={WritePageTemplateStyles.submitButton}
            >등록
            </Button>
        </div>
    </div>
  );
}
