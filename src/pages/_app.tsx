import type { AppProps } from 'next/app';
import React from 'react';
import { Noto_Sans } from '@next/font/google';

import type { NextPageWithLayout } from '@app/features/ui/layouts';
import '@app/styles/globals.scss';
import { SessionProvider } from 'next-auth/react';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

type DefaultPageProps = {
  children: React.ReactElement;
};

const NotoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { session, ...props } = pageProps;
  const Layout =
    Component.layout ?? (({ children }: DefaultPageProps) => children);

  return (
    <SessionProvider session={session}>
      <div className={`${NotoSans.variable} font-sans`}>
        <Layout>
          <Component {...props} />
        </Layout>
      </div>
    </SessionProvider>
  );
}
