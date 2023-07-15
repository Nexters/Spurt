import LoginBtn from '@/components/login-btn';
import Link from 'next/link';

export default function Home() {
   return (
      <div>
         <LoginBtn></LoginBtn>
         <div className="my-5"></div>
         <Link href="/search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            이동하기
         </Link>
      </div>
   );
}
