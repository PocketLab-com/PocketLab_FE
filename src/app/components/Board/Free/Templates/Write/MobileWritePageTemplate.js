"use client";
import { useState } from 'react';
import Button from '@/app/components/common/Atoms/Button/Button';
import EditorContainer from '@/app/components/Board/Free/Organisms/EditorContainer/EditorContainer';
import WritePageTemplateStyles from './MobileWritePageTemplate.module.css';

export default function MobileWritePageTemplate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log({ title, content }); // API 연동 위치
  };

  return (
    <div className={WritePageTemplateStyles.container}>
        <EditorContainer title={title} setTitle={setTitle} content={content} setContent={setContent} />
        <Button
            onClick={handleSubmit}
            className={WritePageTemplateStyles.submitButton}
        >등록
        </Button>
    </div>
  );
}
