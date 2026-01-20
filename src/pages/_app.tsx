import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Script from 'next/script';

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

      {/* Google tag (gtag.js) */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-XL1ZCW0XPY'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XL1ZCW0XPY', { anonymize_ip: true });
        `}
      </Script>

      <div className={`${chakra.variable} font-primary`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
