import Image from 'next/image';
import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import rope_rescue_photo from '~/images/rope-rescue.jpg';
import rope_rescue_scratched_words from '~/images/rope-rescue-scratched-words.png';
import rope from '~/images/rope.svg';

const BG = '#151f2f';
const ACCENT = '#febd29';

function PickropeIcon({ sizePx }: { sizePx: number }) {
  return (
    <span
      aria-hidden='true'
      className='inline-block'
      style={{
        width: `${sizePx}px`,
        height: `${sizePx}px`,
        backgroundColor: ACCENT,
        WebkitMaskImage: `url(${rope.src})`,
        maskImage: `url(${rope.src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}

export default function RopeRescuePage() {
  return (
    <Layout>
      <Seo templateTitle='Rope Rescue' />

      <div
        className='w-screen overflow-x-hidden'
        style={{ backgroundColor: BG }}
      >
        <section className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-[0.85fr_0.85fr]'>
            <div className='w-full'>
              <Image
                src={rope_rescue_photo}
                alt='Rope Rescue'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 60vw'
                className='h-auto w-full object-contain md:h-full md:object-cover md:object-center'
              />
            </div>

            <div className='relative' style={{ backgroundColor: BG }}>
              <div
                className={[
                  'h-full',
                  'px-0',
                  'sm:px-10 md:px-12 lg:px-14',
                  'pb-12 pt-0 sm:pb-14 sm:pt-4 md:pb-20 md:pt-[30] lg:pb-24 lg:pt-6',
                ].join(' ')}
              >
                {/* ======================
                    CONTROL PANEL (edit px/scale here)
                    ====================== */}
                <div
                  className={[
                    'relative flex w-full flex-col items-center',

                    // WORDMARK variables (px + scale)
                    '[--word-h:260px] [--word-scale:.80] [--word-y:-15px] [--word-x:0px]',
                    'sm:[--word-h:280px] sm:[--word-scale:1] sm:[--word-y:0px] sm:[--word-x:0px]',
                    'md:[--word-h:360px] md:[--word-scale:0.8] md:[--word-y:-90px] md:[--word-x:0px]',
                    'lg:[--word-h:500px] lg:[--word-y:-100px] lg:[--word-scale:0.9] lg:[--word-x:0px]',
                    'xl:[--word-h:400px] xl:[--word-scale:1.0] xl:[--word-y:0px] xl:[--word-x:0px]',

                    // ROPE variables (px + scale + size)
                    '[--rope-scale:1] [--rope-size:140px] [--rope-x:0px] [--rope-y:-10px]',
                    'sm:[--rope-scale:1] sm:[--rope-size:150px] sm:[--rope-x:0px] sm:[--rope-y:30px]',
                    'md:[--rope-scale:1] md:[--rope-size:200px] md:[--rope-x:0px] md:[--rope-y:-100px]',
                    'lg:[--rope-size:160px] lg:[--rope-x:0px] lg:[--rope-scale:1.3] lg:[--rope-y:-100px]',
                    'xl:[--rope-size:205px] xl:[--rope-x:0px] xl:[--rope-scale:1.5] xl:[--rope-y:150px]',
                  ].join(' ')}
                >
                  <div
                    className='relative w-full'
                    style={{ height: 'var(--word-h)' } as React.CSSProperties}
                  >
                    <Image
                      src={rope_rescue_scratched_words}
                      alt='Rope Rescue'
                      fill
                      priority
                      sizes='100vw'
                      className='object-contain object-center'
                      style={{
                        transform:
                          'translate(var(--word-x), var(--word-y)) scale(var(--word-scale))',
                      }}
                    />
                  </div>

                  <div
                    className='relative flex w-full justify-center'
                    style={{
                      transform:
                        'translate(var(--rope-x), var(--rope-y)) scale(var(--rope-scale))',
                    }}
                  >
                    <PickropeIcon sizePx={140} />
                    <span
                      aria-hidden='true'
                      className='absolute inset-0'
                      style={{ display: 'none' }}
                    />
                  </div>

                  <div
                    className='pointer-events-none -mt-[9999px] h-0 w-0 overflow-hidden'
                    aria-hidden='true'
                  />
                </div>

                <div className='-mt-0 flex w-full justify-center'></div>

                <div className='mx-auto mt-[450px] w-full max-w-[640px] px-6 text-left sm:mt-[500px] sm:px-0 md:mt-[500px] lg:mt-[700px] xl:mt-[850px]'>
                  <p className='leading-relroped text-[15px] text-white sm:text-[16px] lg:text-[20px]'>
                    Many search and rescue incidents in Lions Bay involve steep
                    slopes, cliffs, gullies, and drainage features.{' '}
                    <span className='font-semibold' style={{ color: ACCENT }}>
                      Rope rescue
                    </span>{' '}
                    capabilities are therefore essential to safely access
                    subjects, manage exposure, and conduct controlled
                    evacuations in complex terrain.
                  </p>

                  <p className='leading-relroped mt-20 text-[12px] text-white sm:mt-[80px] sm:text-[13px] lg:mt-[200px] lg:text-[14px]'>
                    <span className='font-semibold' style={{ color: ACCENT }}>
                      Training Exercise:{' '}
                    </span>
                    Vancouver Island, “Over the Edge” rope rescue practice
                    organized by Cowichan SAR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='h-[8px] w-full bg-white' />
      </div>
    </Layout>
  );
}
