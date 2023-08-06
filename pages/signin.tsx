import Logo from '@/img/logo.svg';
import GoogleSignInButton from '@/components/pc/Keywords/GoogleSignInButton';

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <div className="mt-[50px] mb-[100px] text-title2 text-gray-700 text-center">
        <p>마지막 관문, 면접까지</p>

        <p>차근차근 스퍼트와 함께 준비해요</p>
      </div>
      <GoogleSignInButton></GoogleSignInButton>
    </div>
  );
}
