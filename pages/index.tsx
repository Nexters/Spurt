import Header from '@/components/header';
import LoginBtn from '@/components/login-btn';
import { useSession } from 'next-auth/react';

export default function Home() {
   const { status, data: session } = useSession();

   const isLogin = !!session && status === 'authenticated';
   const token = isLogin ? session.access_token : '';

   return (
      <div>
         <Header></Header>
         <LoginBtn></LoginBtn>
         <div>{token}</div>
      </div>
   );
}
