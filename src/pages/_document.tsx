import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='/' />

        <link
          rel='preload'
          href='/fonts/ChakraPetch-Regular.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />

        <link
          rel='preload'
          href='/fonts/ChakraPetch-Bold.ttf'
          as='font'
          type='font/ttf'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
