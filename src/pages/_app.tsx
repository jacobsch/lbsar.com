import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

import '@/styles/globals.css';
import '@/styles/header.css';
import '@/styles/layout.css';

import Seo from '$/Seo';

const chakra = localFont({
  src: [
    {
      path: '../../public/fonts/ChakraPetch-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ChakraPetch-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-chakra',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <div className={`${chakra.variable} font-primary`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
