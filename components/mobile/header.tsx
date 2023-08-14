import Logo from '@/img/logo-mobile.svg';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import CTA3 from './CTA3';

export default function MobileHeader() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row mt-[47px] border-b border-[#E9E9E9] justify-between">
      <div className="flex content-center items-center">
        <Logo></Logo>
      </div>
      <div className="flex flex-row items-center w-16 mb-[12px]">
        {session ? (
          <Image
            src={session.user!.image!}
            width="61"
            height="61"
            className="rounded-full"
            alt="프로필 사진"
          ></Image>
        ) : (
          <div onClick={() => signIn('google', { callbackUrl: '/note' })}>
            <CTA3 text="로그인"></CTA3>
          </div>
        )}
      </div>
    </div>
  );
}
