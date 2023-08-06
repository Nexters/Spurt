import { signIn } from 'next-auth/react';
import ButtonXl from './Buttons/button-xl';

export default function GoogleSignInButton() {
  return (
    <>
      <ButtonXl onClick={() => signIn('google', { callbackUrl: '/waiting' })}>
        구글로 로그인하기
      </ButtonXl>
    </>
  );
}
