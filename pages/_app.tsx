import MobileHeader from '@/components/mobile/header';
import MobileHome from '@/components/mobile/home';
import Header from '@/components/pc/Keywords/header';
import { useIsMobile } from '@/components/responsive';
import useHeader from '@/utils/useHeader';
import { SessionProvider, signIn } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const headerVisible = useHeader();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);

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
