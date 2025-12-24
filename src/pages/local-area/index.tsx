import Layout from '$/layout/Layout';
import Seo from '$/Seo';
import ArrowLink from '@/components/ui/links/ArrowLink';
import { RiAlarmWarningFill } from 'react-icons/ri';

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
        {/* DELETE THE ENTIRE SECTION WHEN READY, and unused imports */}
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-blue-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Coming Soon</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
