"use client";
import useIsMobile from "@/app/hook/useIsMobile";
import DeskWritePageTemplate from '@/app/components/Board/Free/Templates/Write/DeskWritePageTemplate.js';
import MobileWritePageTemplate from '@/app/components/Board/Free/Templates/Write/MobileWritePageTemplate.js';

export default function WritePage() {
  const { isMobile, isHydrated } = useIsMobile(900);

  if (!isHydrated) return null;

  return (
    <>
      {isMobile ? (
        <MobileWritePageTemplate />
      ) : (
        <DeskWritePageTemplate />
      )}
    </>
  );
}
