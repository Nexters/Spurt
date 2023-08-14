import Logo from '@/img/logo.svg';
import Image from 'next/image';
import IllustSignIn from '@/img/Illust_Signin.png';
import GoogleSignInButton from '@/components/pc/Keywords/GoogleSignInButton';

export default function Signin() {
  return (
    <>
      <div className="absolute top-0 left-0 bg-main_bg h-full">
        <Image src={IllustSignIn} alt="signin" />
        <div className="mt-[130px] flex justify-center">
          <GoogleSignInButton></GoogleSignInButton>
        </div>
      </div>
    </>
  );
}
