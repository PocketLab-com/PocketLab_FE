"use client";
import MenuList from '@/app/components/Board/Common/Organisms/MenuList/MenuList';
import FreePostStyle from './PostDetailOrganism.module.css';

const MENUS = [
    { key: 'free', label: '자유게시판' },
    { key: 'guide', label: '덱가이드' },
    { key: 'proud', label: '자랑게시판' },
];

export default function PostDetailOrganism({ postId }) {
  return (
    <div className={FreePostStyle.body}>
      <MenuList menus={MENUS} />
      <div className={FreePostStyle.container}>
        <h1 className={FreePostStyle.title}>자유게시판</h1>
      </div>
    </div>
  );
}
