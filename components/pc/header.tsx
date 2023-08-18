import Logo from '@/img/logo.svg';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CTA3 from './Buttons/CTA3';

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;

  return (
    <>
      <div className="flex flex-row h-[100px] justify-between">
        <div className="flex content-center items-center">
          <button onClick={() => router.push('/')}>
            <Logo></Logo>
          </button>
          {/* <Logo /> */}

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
              요약 노트
            </Link>
            <Link
              href="/experience"
              className={`${
                router.pathname === '/experience'
                  ? 'text-heading1'
                  : 'text-heading4'
              }`}
            >
              나의 경험
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center">
          {user ? (
            <Image
              src={user.image!}
              width="50"
              height="50"
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
    </>
  );
}
