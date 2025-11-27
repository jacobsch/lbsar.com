import Layout from '$/layout/Layout';
import Seo from '$/Seo';
import BackgroundImage from '$/ui/BackgroundImage';
import Section from '$/ui/Section';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <BackgroundImage imgClass='' />

        <Section
          header=''
          body=''
        />

        <BackgroundImage imgClass='' />

        <Section
          topNode={<a className='anchor' id='about-us'></a>}
          header=''
          body=''
        />

        <BackgroundImage imgClass='' />

        <Section
          topNode={<a className='anchor' id='sponsors'></a>}
          header=''
          body=''
        />

        <BackgroundImage imgClass='' />

      </main>
    </Layout>
  );
}
