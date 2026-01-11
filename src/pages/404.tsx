import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/ui/links/ArrowLink';
import UnstyledLink from '@/components/ui/links/UnstyledLink';

export default function NotFoundPage() {
  return (
    <Layout>
      <main>
        <section className='relative min-h-screen bg-[#121d2f]'>
          {/* subtle background glow */}
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]' />

          {/* centering wrapper */}
          <div className='relative flex min-h-screen items-center justify-center'>
            {/* content */}
            <div className='mx-auto flex max-w-md flex-col items-center text-center text-white'>
              <RiAlarmWarningFill
                size={72}
                className='animate-pulse text-[#febd29] drop-shadow-[0_0_25px_rgba(254,189,41,0.35)]'
              />

              <h1 className='mt-6 text-6xl font-extrabold tracking-tight sm:text-7xl'>
                404
              </h1>

              <p className='mt-4 text-base text-white/80 sm:text-lg'>
                The page you’re looking for doesn’t exist or may have been
                moved.
              </p>

              <div className='my-8 h-px w-24 bg-[#febd29]/60' />

              <ArrowLink
                as={UnstyledLink}
                href='/'
                className='inline-flex items-center gap-2 rounded-full border border-[#febd29] px-6 py-3 text-base font-medium text-[#febd29] transition hover:bg-[#febd29] hover:text-[#121d2f]'
              >
                Back to Home
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
