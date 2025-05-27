"use client";
import { useEffect, useState } from 'react';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 768px 이하에서 isMobile true
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
}