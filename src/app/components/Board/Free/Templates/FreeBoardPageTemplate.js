// src/app/components/BoardFree/Templates/FreeBoardPageTemplate/FreeBoardPageTemplate.js
"use client";
import useIsMobile from "@/app/hook/useIsMobile";
import FreeBoardDesktop from "./FreeBoearDesktop";
import FreeBoardMobile from "./FreeBoardMobile";

const dummyPosts = [
   {
    id: 0,
    title: '업데이트 관련 공지사항입니다',
    likes: 1344,
    views: 2773,
    author: '관리자',
    createdAt: '2025-05-17',
    isNotice: true,
  },
  {
    id: -1,
    title: '포켓랩에서 알려드립니다',
    likes: 824,
    views: 9347,
    author: '관리자',
    createdAt: '2025-05-13',
    isNotice: true,
  },
  { id: 1, title: '첫 번째 글', likes: 11, views: 123, author: '홍길동', createdAt: '2024-05-22' },
  { id: 2, title: '두 번째 글', likes: 8, views: 54, author: '김철수', createdAt: '2024-05-21' },
  { id: 3, title: '세 번째 글', likes: 5, views: 78, author: '이영희', createdAt: '2024-05-20' },
  { id: 4, title: '네 번째 글', likes: 12, views: 200, author: '박지민', createdAt: '2024-05-19' },
  { id: 5, title: '다섯 번째 글', likes: 3, views: 45, author: '최준호', createdAt: '2024-05-18' },
  { id: 6, title: '여섯 번째 글', likes: 7, views: 90, author: '정수현', createdAt: '2024-05-17' },
  { id: 7, title: '일곱 번째 글', likes: 15, views: 300, author: '이민호', createdAt: '2024-05-16' },
  { id: 8, title: '여덟 번째 글', likes: 2, views: 30, author: '김하늘', createdAt: '2024-05-15' },
  { id: 9, title: '아홉 번째 글', likes: 9, views: 150, author: '박서준', createdAt: '2024-05-14' },
  { id: 10, title: '열 번째 글', likes: 6, views: 60, author: '최수영', createdAt: '2024-05-13' },
  { id: 11, title: '열한 번째 글', likes: 4, views: 80, author: '이준호', createdAt: '2024-05-12' },
  { id: 12, title: '열두 번째 글', likes: 10, views: 110, author: '김지민', createdAt: '2024-05-11' },
  { id: 13, title: '열세 번째 글', likes: 1, views: 20, author: '박지후', createdAt: '2024-05-10' },
  { id: 14, title: '열네 번째 글', likes: 14, views: 250, author: '최영수', createdAt: '2024-05-09' },
  { id: 15, title: '열다섯 번째 글', likes: 13, views: 180, author: '이서연', createdAt: '2024-05-08' },
  { id: 16, title: '열여섯 번째 글', likes: 16, views: 400, author: '이민호', createdAt: '2024-05-07' },
  { id: 17, title: '열일곱 번째 글', likes: 2, views: 25, author: '김하늘', createdAt: '2024-05-06' },
  { id: 18, title: '열여덟 번째 글', likes: 8, views: 95, author: '박서준', createdAt: '2024-05-05' },
  { id: 19, title: '열아홉 번째 글', likes: 5, views: 70, author: '최수영', createdAt: '2024-05-04' },
  { id: 20, title: '스무 번째 글', likes: 3, views: 40, author: '이준호', createdAt: '2024-05-03' },
  { id: 21, title: '스물한 번째 글', likes: 9, views: 130, author: '김지민', createdAt: '2024-05-02' },
  { id: 22, title: '스물두 번째 글', likes: 6, views: 85, author: '박지후', createdAt: '2024-05-01' },
  { id: 23, title: '스물세 번째 글', likes: 4, views: 55, author: '최영수', createdAt: '2024-04-30' },
  { id: 24, title: '스물네 번째 글', likes: 10, views: 120, author: '이서연', createdAt: '2024-04-29' },
  { id: 25, title: '스물다섯 번째 글', likes: 1, views: 15, author: '이민호', createdAt: '2024-04-28' },
  { id: 26, title: '스물여섯 번째 글', likes: 14, views: 220, author: '김하늘', createdAt: '2024-04-27' },
  { id: 27, title: '스물일곱 번째 글', likes: 12, views: 160, author: '박서준', createdAt: '2024-04-26' },
  { id: 28, title: '스물여덟 번째 글', likes: 7, views: 100, author: '최수영', createdAt: '2024-04-25' },
  { id: 29, title: '스물아홉 번째 글', likes: 3, views: 50, author: '이준호', createdAt: '2024-04-24' },
  { id: 30, title: '서른 번째 글', likes: 11, views: 140, author: '김지민', createdAt: '2024-04-23' },
  { id: 31, title: '서른한 번째 글', likes: 8, views: 75, author: '박지후', createdAt: '2024-04-22' },
  { id: 32, title: '서른두 번째 글', likes: 5, views: 65, author: '최영수', createdAt: '2024-04-21' },
  { id: 33, title: '서른세 번째 글', likes: 2, views: 35, author: '이서연', createdAt: '2024-04-20' },
  { id: 34, title: '서른네 번째 글', likes: 9, views: 110, author: '이민호', createdAt: '2024-04-19' },
  { id: 35, title: '서른다섯 번째 글', likes: 6, views: 90, author: '김하늘', createdAt: '2024-04-18' }
];

export default function FreeBoardPageTemplate() {
  const { isMobile, isHydrated } = useIsMobile(900);

  if (!isHydrated) return null;

  return (
    <>
      {isMobile ? <FreeBoardMobile posts={dummyPosts} /> : <FreeBoardDesktop posts={dummyPosts} />}
    </>
  );
}