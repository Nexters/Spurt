import GoogleSignInButton from '@/components/pc/GoogleSignInButton';
import IllustSignIn from '@/img/Illust_signIn.png';
import Image from 'next/image';

export default function Signin() {
  return (
    <>
      <div className="absolute top-0 left-0 bg-main_bg h-full">
        <Image src={IllustSignIn} alt="signin" />
        <div className="mt-[50px] flex justify-center">
          <GoogleSignInButton></GoogleSignInButton>
        </div>
      </div>
    </>
  );
}
