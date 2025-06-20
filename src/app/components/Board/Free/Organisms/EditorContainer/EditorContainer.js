"use client";
import Input from '@/app/components/common/Atoms/Input/Input';
import WriteEditor from '@/app/components/Board/Free/Molecules/WriteEditor/WriteEditor';
import EditorContainerStyles from './EditorContainer.module.css';

export default function EditorContainer({ title, setTitle, content, setContent }) {
  return (
    <div>
        <div className={EditorContainerStyles.editorContainer}>
            <p className={EditorContainerStyles.subtitle}>제목</p>
            <Input
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={EditorContainerStyles.titleInput}
            />
            <p className={EditorContainerStyles.subtitle}>본문</p>
            <WriteEditor value={content} onChange={setContent} />
        </div>
    </div>
  );
}
