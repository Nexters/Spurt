import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/header';
import useHeader from '@/utils/useHeader';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   const headerVisible = useHeader();

   return (
      <SessionProvider session={session}>
         <RecoilRoot>
            <div className="container">
               {!headerVisible && <Header />}
               <Component {...pageProps} />
            </div>
         </RecoilRoot>
      </SessionProvider>
   );
}
