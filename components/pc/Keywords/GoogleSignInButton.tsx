import { signIn } from 'next-auth/react';
import ButtonXl from './Buttons/button-xl';

export default function GoogleSignInButton() {
  const handleLogin = async () => {
    await signIn('google', { callbackUrl: '/waiting' });
  };

  return (
    <>
      <ButtonXl onClick={() => handleLogin()}>구글로 로그인하기</ButtonXl>
    </>
  );
}
