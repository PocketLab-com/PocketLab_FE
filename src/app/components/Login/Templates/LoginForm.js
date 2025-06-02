import LoginFormStyle from './LoginForm.module.css';
import Button from '@/app/components/common/Atoms/Button/Button';

export default function LoginForm() {
    return (
        <div className={LoginFormStyle.loginContainer}>
            <div className={LoginFormStyle.loginForm}>
                <div className={LoginFormStyle.loginComment}>
                    <div className={LoginFormStyle.comment}>
                        포켓랩에 온걸 환영한다!<br/>
                        우선 트레이너 등록을 도와주마
                    </div>
                    <img src="/professorOak.svg" alt="Professor Oak" className={LoginFormStyle.professorOak} />
                </div>
                <div className={LoginFormStyle.loginButtons}>
                    <div className={LoginFormStyle.lineBox}>
                        <span className={LoginFormStyle.line}></span><span className={LoginFormStyle.text}>간편 로그인</span><span className={LoginFormStyle.line}></span>
                    </div>
                    <Button className={LoginFormStyle.kakaoButton}>
                        <img className={LoginFormStyle.icon} src="/kakao.svg"/>
                        <span className={`${LoginFormStyle.kakaoText} ${LoginFormStyle.text}`}>카카오 아이디로 로그인</span>
                    </Button>
                    <Button className={LoginFormStyle.googleButton}>
                        <img className={LoginFormStyle.icon} src="/google.svg"/>
                        <span className={`${LoginFormStyle.googleText} ${LoginFormStyle.text}`}>Google 아이디로 로그인</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}