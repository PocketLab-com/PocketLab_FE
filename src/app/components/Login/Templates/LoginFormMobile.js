"use client";
import LoginFormMobileStyle from './LoginFormMobile.module.css';
import NavBarMobile from '../../common/Organisms/NavBar/NavBarMobile';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function LoginFormMobile() {
    return (
        <>
        <NavBarMobile titleText="로그인" />
        <div className={LoginFormMobileStyle.loginContainer}>
            <div className={LoginFormMobileStyle.loginComment}>
                <div className={LoginFormMobileStyle.comment}>
                    포켓랩에 온걸 환영한다!<br/>
                    우선 트레이너 등록을 도와주마
                </div>
                <img src="/professorOak.svg" alt="Professor Oak" className={LoginFormMobileStyle.professorOak} />
            </div>
            <div className={LoginFormMobileStyle.loginButtons}>
                <Button className={LoginFormMobileStyle.kakaoButton}>
                    <img className={LoginFormMobileStyle.icon} src="/kakao.svg" alt="Kakao Icon"/>
                    <span className={`${LoginFormMobileStyle.kakaoText} ${LoginFormMobileStyle.text}`}>카카오 아이디로 로그인</span>
                </Button>
                <Button className={LoginFormMobileStyle.googleButton}>
                    <img className={LoginFormMobileStyle.icon} src="/google.svg" alt="Google Icon"/>
                    <span className={`${LoginFormMobileStyle.googleText} ${LoginFormMobileStyle.text}`}>Google 아이디로 로그인</span>
                </Button>
            </div>
        </div>
        </>
    );
}