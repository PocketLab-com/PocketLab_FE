// src/app/components/BoardFree/Templates/FreeBoardPageTemplate/FreeBoardPageTemplate.js
"use client";
import useIsMobile from "@/app/hook/useIsMobile";
import FreeBoardDesktop from "./FreeBoearDesktop";
import FreeBoardMobile from "./FreeBoardMobile";

export default function FreeBoardPageTemplate() {
  const isMobile = useIsMobile();

  return (
    <div className="free-board-page-template">
      {isMobile ? <FreeBoardMobile /> : <FreeBoardDesktop />}
    </div>
  );
}