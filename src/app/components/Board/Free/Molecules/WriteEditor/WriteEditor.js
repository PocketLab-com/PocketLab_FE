"use client"; // 이 컴포넌트는 클라이언트 컴포넌트로 작동해야 함 (ReactQuill은 클라이언트 전용 라이브러리임)
import dynamic from 'next/dynamic'; // Next.js의 dynamic import 기능을 사용
import WriteEditorStyles from './WriteEditor.module.css'; // CSS Module 스타일 임포트

// ReactQuill은 서버사이드 렌더링을 지원하지 않기 때문에 dynamic import로 불러오며, ssr을 false로 설정
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

// 글쓰기 에디터 컴포넌트 정의
export default function WriteEditor({ value, onChange }) {
  // 에디터 툴바 모듈 설정: 제목, 굵기, 기울임, 밑줄, 리스트, 링크, 이미지 등 포함
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],        // 헤더 드롭다운 (H1, H2, 일반 텍스트)
      ['bold', 'italic', 'underline'],   // 글자 스타일: 굵게, 기울임, 밑줄
      [{ list: 'ordered' }, { list: 'bullet' }], // 정렬 리스트와 불릿 리스트
      ['link', 'image'],                 // 링크 삽입 및 이미지 삽입
    ],
  };

  // 실제 렌더링 부분
  return (
    <div className={WriteEditorStyles.editorWrapper}>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력하세요..."
      />
    </div>
  );
}
