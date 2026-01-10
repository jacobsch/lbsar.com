import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/header.css';
import '@/styles/layout.css';

import Seo from '$/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
