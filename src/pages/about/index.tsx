import { ReactNode } from 'react';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { VolunteerStats } from './volunteerstats';

const SCRATCH_TOP = {
  mobile: '90%',
  sm: '90%',
  md: '91%',
  lg: '94%',
} as const;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen w-full'>
      <Header />

      <main className='flex-1 pt-[72px] lg:pt-[80px]'>
        {children}

        {/* ----------------- TEAM PHOTO (FULL WIDTH, FIXED RATIO) ----------------- */}
        <section className='relative w-full bg-[#121d2f]'>
          <div className='relative aspect-[3/1] w-full'>
            <Image
              src='/images/teamphoto.svg'
              alt='LBSAR Team'
              fill
              sizes='100vw'
              className='object-cover'
              priority
            />

            {/* ----------------- SCRATCHED WORDS OVERLAY ----------------- */}
            <div
              className='scratchOverlay pointer-events-none absolute inset-x-0 z-10 flex -translate-y-1/2 justify-center'
              style={
                {
                  '--scratch-top-mobile': SCRATCH_TOP.mobile,
                  '--scratch-top-sm': SCRATCH_TOP.sm,
                  '--scratch-top-md': SCRATCH_TOP.md,
                  '--scratch-top-lg': SCRATCH_TOP.lg,
                } as React.CSSProperties
              }
            >
              <div className='flex flex-col items-center gap-4 sm:gap-5 lg:gap-6'>
                <Image
                  src='/images/lbsar-scratched-words.png'
                  alt='LBSAR'
                  width={420}
                  height={120}
                  sizes='(max-width: 639px) 200px, (max-width: 1023px) 300px, 460px'
                  className='h-auto w-[180px] sm:w-[300px] lg:w-[400px]'
                />

                <Image
                  src='/images/team-2026-scratched-words.png'
                  alt='Team 2026'
                  width={420}
                  height={120}
                  sizes='(max-width: 639px) 200px, (max-width: 1023px) 300px, 460px'
                  className='h-auto w-[180px] sm:w-[300px] lg:w-[400px]'
                />
              </div>
            </div>

            <style jsx>{`
              .scratchOverlay {
                top: var(--scratch-top-mobile);
              }
              @media (min-width: 640px) {
                .scratchOverlay {
                  top: var(--scratch-top-sm);
                }
              }
              @media (min-width: 768px) {
                .scratchOverlay {
                  top: var(--scratch-top-md);
                }
              }
              @media (min-width: 1024px) {
                .scratchOverlay {
                  top: var(--scratch-top-lg);
                }
              }
            `}</style>
          </div>

          {/* ----------------- BLUE TEXT BOX ----------------- */}
          <div className="flex w-full justify-center bg-[#121d2f] font-['Chakra_Petch'] text-white">
            <div
              className='
                mx-auto flex w-full max-w-[1320px]
                flex-col items-center gap-6
                px-6 pb-16 pt-20
                text-center
                sm:flex-row sm:justify-center sm:gap-8 sm:px-8 sm:pb-20 sm:pt-24 sm:text-left
                lg:px-12 lg:pb-24 lg:pt-28
              '
            >
              <div className='shrink-0'>
                <Image
                  src='/images/lbsar-logo.png'
                  alt='LBSAR Logo'
                  width={180}
                  height={180}
                  sizes='(max-width: 639px) 110px, 160px'
                  className='h-auto w-[110px] sm:w-[140px] lg:w-[170px]'
                />
              </div>

              <p className='max-w-[820px] text-[13px] leading-6 text-white/90 sm:text-[15px] sm:leading-7 lg:text-[16px]'>
                LBSAR is over 40 members strong, and in 2025 the team responded
                to a record 35 calls, reflecting both the growing use of the
                backcountry and the ongoing need for highly trained professional
                volunteers in natural disasters like flooding and landslides.
              </p>
            </div>
          </div>
        </section>

        <VolunteerStats />
      </main>

      <Footer />
    </div>
  );
}
