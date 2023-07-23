import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/pc/Keywords/header';
import useHeader from '@/utils/useHeader';
import { RecoilRoot } from 'recoil';
import MobileHeader from '@/components/mobile/header';
import { useIsMobile } from '@/components/responsive';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   const headerVisible = useHeader();
   const isMobile = useIsMobile();

   return (
      <SessionProvider session={session}>
         <RecoilRoot>
            {isMobile ? (
               <div>mobile</div>
            ) : (
               <div className="container">
                  {!headerVisible && <Header />}
                  <Component {...pageProps} />
               </div>
            )}
         </RecoilRoot>
      </SessionProvider>
   );
}
