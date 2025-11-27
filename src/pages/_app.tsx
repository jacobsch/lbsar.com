import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/header.css';
import '@/styles/layout.css';
import '@/styles/parallax.css';

// Note: `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
