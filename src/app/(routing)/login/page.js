// src/app/login/page.js
import loginStyles from './login.module.css';
import NavBarDesktop from '@/app/components/common/Organisms/NavBar/NavBarDesktop';
import LoginForm from '@/app/components/Login/Templates/LoginForm';

export default function Login() {
  return (
    <div className={loginStyles.login}>
      <NavBarDesktop />
      <LoginForm />
    </div>
  );
}