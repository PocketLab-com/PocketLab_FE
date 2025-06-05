// import LoginFormStyle from './LoginForm.module.css';
"use client";
import IsMobile from '@/app/hook/useIsMobile';
import LoginFormDesktop from './LoginFormDesktop';
import LoginFormMobile from './LoginFormMobile';

export default function LoginForm() {
    // const isMobile = IsMobile(900);
    const { isMobile, isHydrated } = IsMobile(900);
    
    if (!isHydrated) return null;

    return (
        <>
        {isMobile ? (
            <LoginFormMobile />
        ) : (
            <LoginFormDesktop />
        )}  
        </>
    );
}