import { useSession } from 'next-auth/react';
import Title from '../img/Frame 2609495.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
   const { data: session } = useSession();
   const router = useRouter();

   return (
      <div className="w-full justify-center justify-items-center grid">
         <div className="flex flex-row w-560 h-32">
            <div className="grid content-center mr-9">
               <Title></Title>
            </div>
            <div className="flex flex-row items-center">
               <div className="w-72 flex justify-between">
                  <Link href="/" className={`${router.pathname === '/' ? 'font-bold' : ''}`}>
                     질문 모음
                  </Link>
                  <Link href="/note" className={`${router.pathname === '/note' ? 'font-bold' : ''}`}>
                     10분 노트
                  </Link>
                  <Link href="/project">나의 프로젝트</Link>
               </div>
            </div>
            <div className="flex flex-row items-center ml-24">
               {session ? <img src={session.user!.image!} className="flex w-16 h-16 rounded-full"></img> : ''}
            </div>
         </div>
      </div>
   );
}
