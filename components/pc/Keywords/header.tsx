import { useSession } from 'next-auth/react';
import Logo from '@/img/logo.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import CTA3 from './Buttons/CTA3';

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;

  return (
    <div className="flex flex-row h-[100px] justify-between border-b border-[#E9E9E9]">
      <div className="flex content-center items-center">
        <Logo></Logo>

        <div className="flex justify-between ml-[130px]">
          <Link
            href="/"
            className={`${
              router.pathname === '/' ? 'text-heading1' : 'text-heading4'
            } mr-[50px]`}
          >
            질문 모음
          </Link>
          <Link
            href="/note"
            className={`${
              router.pathname === '/note' ? 'text-heading1' : 'text-heading4'
            } mr-[50px]`}
          >
            10분 노트
          </Link>
          <Link
            href="/project"
            className={`${
              router.pathname === '/project' ? 'text-heading1' : 'text-heading4'
            }`}
          >
            나의 프로젝트
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center">
        {user ? (
          <Image
            src={user.image!}
            width="61"
            height="61"
            className="rounded-full"
            alt="프로필 사진"
          ></Image>
        ) : (
          <Link href="/signin">
            <CTA3 text="로그인"></CTA3>
          </Link>
        )}
      </div>
    </div>
  );
}
