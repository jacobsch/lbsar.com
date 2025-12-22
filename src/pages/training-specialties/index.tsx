import Layout from '$/layout/Layout';
import Seo from '$/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function VolunteerPage() {
  return (
    <Layout transparentHeader={false}>
      <Seo templateTitle='Volunteer' />
      <main>
      </main>
    </Layout>
  );
}
