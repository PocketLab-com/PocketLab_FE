"use client";
import LoginFormDeskStyle from './LoginFormDesktop.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';
import NavBarDesktop from '@/app/components/common/Organisms/NavBar/NavBarDesktop';

export default function LoginForm() {
    return (
        <>
        <NavBarDesktop />
        <div className={LoginFormDeskStyle.loginContainer}>
            <div className={LoginFormDeskStyle.loginForm}>
                <div className={LoginFormDeskStyle.loginComment}>
                    <div className={LoginFormDeskStyle.comment}>
                        포켓랩에 온걸 환영한다!<br/>
                        우선 트레이너 등록을 도와주마
                    </div>
                    <img src="/professorOak.svg" alt="Professor Oak" className={LoginFormDeskStyle.professorOak} />
                </div>
                <div className={LoginFormDeskStyle.loginButtons}>
                    <div className={LoginFormDeskStyle.lineBox}>
                        <span className={LoginFormDeskStyle.line}></span><span className={LoginFormDeskStyle.text}>간편 로그인</span><span className={LoginFormDeskStyle.line}></span>
                    </div>
                    <Button className={LoginFormDeskStyle.kakaoButton}>
                        <img className={LoginFormDeskStyle.icon} src="/kakao.svg"/>
                        <span className={`${LoginFormDeskStyle.kakaoText} ${LoginFormDeskStyle.text}`}>카카오 아이디로 로그인</span>
                    </Button>
                    <Button className={LoginFormDeskStyle.googleButton}>
                        <img className={LoginFormDeskStyle.icon} src="/google.svg"/>
                        <span className={`${LoginFormDeskStyle.googleText} ${LoginFormDeskStyle.text}`}>Google 아이디로 로그인</span>
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
}