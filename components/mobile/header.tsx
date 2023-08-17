import Logo from '@/img/logo_mobile.svg';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import CTA3 from './CTA3';

export default function MobileHeader() {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex flex-row pb-[16px] items-end h-[90px] border-b border-b-gray_line justify-between px-[16px] bg-main-100">
        <div className="flex content-center ">
          <Logo></Logo>
        </div>
        <div className="flex flex-row">
          {session ? (
            <Image
              src={session?.user?.image!}
              width="32"
              height="32"
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
