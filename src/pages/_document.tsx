import { Head, Html, Main, NextScript } from 'next/document';
import { chakra } from '@/styles/fonts';

export default function Document() {
  return (
    <Html lang='en' className={chakra.variable}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
