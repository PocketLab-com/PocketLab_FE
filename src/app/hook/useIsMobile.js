// src/app/hooks/useIsMobile.js
"use client";
import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    handleResize();
    setIsHydrated(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return { isMobile, isHydrated };
}