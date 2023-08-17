import Logo from '@/img/logo_mobile.svg';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import CTA3 from './CTA3';

export default function MobileHeader() {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex flex-row pb-[16px] items-end h-[90px] border-b border-[#E9E9E9] justify-between p-[16px] bg-main-100">
        <div className="flex content-center ">
          <Logo></Logo>
        </div>
        <div className="flex flex-row w-16">
          {session ? (
            <Image
              src={session?.user?.image!}
              width="40"
              height="40"
              className="rounded-full "
              alt="프로필 사진"
            ></Image>
          ) : (
            <div onClick={() => signIn('google', { callbackUrl: '/note' })}>
              <CTA3 text="로그인"></CTA3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
