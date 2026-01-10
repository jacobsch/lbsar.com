import localFont from 'next/font/local';

export const chakra = localFont({
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
