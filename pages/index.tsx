import LoginBtn from '@/components/login-btn';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
   return (
      <div>
         <LoginBtn></LoginBtn>
         <div className="my-5 text-title1">가나다라마바사</div>
         <div></div>
         <Link href="/search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            이동하기
         </Link>
      </div>
   );
}
