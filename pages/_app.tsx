import MobileHeader from '@/components/mobile/header';
import MobileHome from '@/components/mobile/home';
import Header from '@/components/pc/Keywords/header';
import { useIsMobile } from '@/components/responsive';
import useHeader from '@/utils/useHeader';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const headerVisible = useHeader();
  const isMobile = useIsMobile();

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        {isMobile ? (
          <div>
            {!headerVisible && <MobileHeader />}
            <MobileHome></MobileHome>
          </div>
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
