// src/app/(routing)/board/layout.js
"use client";
import useIsMobile from "@/app/hook/useIsMobile";
import DeskBoardLayout from "@/app/components/Layout/DeskLayout"; // 기존 데스크탑 레이아웃 컴포넌트
import MobileLayout from "@/app/components/Layout/MobileLayout"; // 모바일 레이아웃 컴포넌트

export default function BoardLayout({ children }) {
  const { isMobile, isHydrated } = useIsMobile();
  if (!isHydrated) {
    return null; // Hydration이 완료될 때까지 아무것도 렌더링하지 않음
  }
  return isMobile ? (
    <MobileLayout>
      {children}
    </MobileLayout>
  ) : (
    <DeskBoardLayout>
      {children}
    </DeskBoardLayout>
  );
}