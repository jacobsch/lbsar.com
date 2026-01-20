import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const defaultMeta = {
  title: 'Lions Bay Search and Rescue',
  siteName: 'Lions Bay Search and Rescue',
  description: `Lions Bay Search and Rescue (LBSAR) is a volunteer emergency response organization providing search and rescue services in the 
  Sea-to-Sky corridor. Our response area includes the village of Lions Bay, the mountains of the Howe Sound Crest, and remote wilderness terrain that 
  reaches into the Capilano watershed. The most popular trails we support include the Howe Sound Crest Trail which leads to the iconic Lions, Mount Brunswick, Mount Harvey, 
  Deeks Lakes, and the Tunnel Bluffs lookout trail. We also provide mutual aid assistance to SAR teams in all areas of British Columbia, and have also been requested for 
  Canada-wide SAR assistance. We assist people who are lost, missing, injured, or in distress in a wide range of environments. Incidents may involve urban searches, 
  lost or injured hikers, or complex rescues in steep and technical terrain. Operating under Emergency Management and Climate Readiness (EMCR), 
  LBSAR works closely with neighbouring search and rescue teams and other emergency services like the RCMP, Fire, and Ambulance. Our volunteers train year-round 
  to maintain operational readiness and to respond effectively in all weather and terrain conditions.`,
  url: 'https://lions-bay-sar.vercel.app',
  type: 'website',
  robots: 'follow, index',
  image: '/images/og.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const rawPath = router.asPath.split('?')[0].split('#')[0];
  const cleanPath = rawPath === '/' ? '' : rawPath;

  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  const pageUrl = `${meta.url}${cleanPath}`;

  const ogImageAbs = meta.image.startsWith('http')
    ? meta.image
    : `${meta.url}${meta.image}`;

  return (
    <Head>
      <title>{meta.title}</title>

      {isHome && (
        <>
          <link rel='preload' as='image' href='/images/triangles-logo.png' />
          <link
            rel='preload'
            as='image'
            href='/images/lbsar-scratched-words.png'
          />
        </>
      )}

      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta.description} />

      <link rel='canonical' href={pageUrl} />

      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:url' content={pageUrl} />

      <meta property='og:image' content={ogImageAbs} />
      <meta property='og:image:secure_url' content={ogImageAbs} />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={ogImageAbs} />

      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
        </>
      )}

      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}

      <meta name='msapplication-TileColor' content='#121d2f' />
      <meta name='theme-color' content='#121d2f' />
    </Head>
  );
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '48x48',
    href: '/favicon/favicon-48x48.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '64x64',
    href: '/favicon/favicon-64x64.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    href: '/favicon/icon-512x512.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/icon-192x192.png',
  },
];
