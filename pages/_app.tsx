import MobileHeader from '@/components/mobile/header';
import MobileHome from '@/components/mobile/home';
import { useIsMobile } from '@/components/responsive';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const isMobile = useIsMobile();

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Spurt!</title>
      </Head>
      <RecoilRoot>
        {isMobile ? (
          <div>
            <MobileHeader />
            <MobileHome></MobileHome>
          </div>
        ) : (
          <div className="container">
            <Component {...pageProps} />
          </div>
        )}
      </RecoilRoot>
    </SessionProvider>
  );
}
