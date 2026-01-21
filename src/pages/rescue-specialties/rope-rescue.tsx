import Image from 'next/image';
import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import rope_rescue_photo from '~/images/rescue-specialties/rope-rescue/rope-rescue.jpg';
import rope_rescue_scratched_words from '~/images/rescue-specialties/rope-rescue/rope-rescue-scratched-words.png';
import rope from '~/images/rescue-specialties/rope.svg';
import ropeRescue2 from '~/images/rescue-specialties/rope-rescue/rope-rescue-2.jpg';
import ropeRescue3 from '~/images/rescue-specialties/rope-rescue/rope-rescue-3.jpg';
import dcttrsWords from '~/images/rescue-specialties/rope-rescue/dcttrs-scratched-words.png';
import ropeRescue4 from '~/images/rescue-specialties/rope-rescue/rope-rescue-4.jpg';

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

      <div className='w-full overflow-x-hidden' style={{ backgroundColor: BG }}>
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
                        CONTROL PANEL
                    ====================== */}
                <div
                  className={[
                    'relative flex w-full flex-col items-center',

                    // WORDMARK variables
                    '[--word-h:260px] [--word-scale:.80] [--word-x:0px] [--word-y:-15px]',
                    'sm:[--word-h:280px] sm:[--word-scale:1] sm:[--word-x:0px] sm:[--word-y:0px]',
                    'md:[--word-h:360px] md:[--word-scale:0.8] md:[--word-x:0px] md:[--word-y:-90px]',
                    'lg:[--word-h:500px] lg:[--word-scale:0.9] lg:[--word-x:0px] lg:[--word-y:-100px]',
                    'xl:[--word-h:400px] xl:[--word-scale:0.9] xl:[--word-x:0px] xl:[--word-y:0px]',

                    // ROPE variables
                    '[--rope-scale:1] [--rope-size:140px] [--rope-x:0px] [--rope-y:-10px]',
                    'sm:[--rope-scale:1] sm:[--rope-size:150px] sm:[--rope-x:0px] sm:[--rope-y:30px]',
                    'md:[--rope-scale:1] md:[--rope-size:200px] md:[--rope-x:0px] md:[--rope-y:-100px]',
                    'lg:[--rope-scale:1.3] lg:[--rope-size:160px] lg:[--rope-x:0px] lg:[--rope-y:-100px]',
                    'xl:[--rope-scale:1.5] xl:[--rope-size:205px] xl:[--rope-x:0px] xl:[--rope-y:125px]',
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

                <div className='mx-auto mt-[450px] w-full max-w-[640px] px-8 text-left sm:mt-[500px] sm:px-0 md:mt-[500px] lg:mt-[700px] xl:mt-[850px]'>
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

        {/* ======================
                DCTTRS 2x2 GRID
            ====================== */}
        <section className='w-full bg-[#2e431b]'>
          <div
            className={[
              'grid w-full',
              'grid-cols-1',
              'md:grid-cols-[0.72fr_1.28fr]',
              'md:grid-rows-[minmax(560px,1fr)_minmax(720px,1fr)]',
              'md:min-h-[1280px] lg:min-h-[1460px] xl:min-h-[1680px]',
            ].join(' ')}
          >
            <div className='order-3 flex items-center justify-center bg-[#2e431b] px-10 pb-10 pt-10 text-white sm:pb-10 sm:pt-10 md:order-1 md:pt-0'>
              <p className='max-w-[36ch] text-left text-[15px] leading-[1.7] md:text-[16px] lg:text-[20px]'>
                Lions Bay Search and Rescue maintains proficiency in both
                low-angle and high-angle rope rescue using{' '}
                <span className='font-semibold text-[#febd29]'>
                  Dual-Capability Two-Tensioned Rope Systems (DCTTRS)
                </span>
                . This top-down system employs two independently tensioned
                ropes, each capable of supporting the full rescue load.
              </p>
            </div>

            <div className='relative order-2 h-[380px] overflow-hidden sm:h-[460px] md:order-2 md:h-full'>
              <Image
                src={ropeRescue2}
                alt='Rope rescue system setup'
                fill
                sizes='(max-width: 768px) 100vw, 65vw'
                className='object-cover object-center'
              />
            </div>

            <div className='relative order-4 h-[380px] overflow-hidden sm:h-[460px] md:order-3 md:h-full'>
              <Image
                src={ropeRescue3}
                alt='Rope rescue in forest terrain'
                fill
                sizes='(max-width: 768px) 100vw, 35vw'
                className='object-cover object-center'
              />
            </div>

            <div className='order-1 flex flex-col items-center justify-center bg-[#2e431b] px-10 pb-20 pt-14 text-white md:order-4 md:pb-28 md:pt-20 lg:pb-36 lg:pt-28 xl:pb-36'>
              <div className='w-full max-w-[560px]'>
                <Image
                  src={dcttrsWords}
                  alt='DCTTRS'
                  width={1400}
                  height={360}
                  className='h-auto w-full object-contain'
                />
              </div>

              <div className='mt-8 max-w-[62ch] space-y-6 text-left'>
                <p className='text-[15px] leading-[1.8] md:text-[16px] lg:text-[20px]'>
                  Rescue teams utilize a combination of natural and artificial
                  anchors and construct a variety of rope systems, including
                  lowering, raising, hauling, and directional systems, to safely
                  move rescuers and patients through exposed terrain to
                  extraction points.
                </p>

                <p className='text-[15px] leading-[1.8] md:text-[16px] lg:text-[20px]'>
                  Rope rescue qualifications are structured in progressive
                  levels.{' '}
                  <span className='font-semibold text-[#febd29]'>
                    Rope Rescue Level 1 (RR1)
                  </span>{' '}
                  members operate within defined safe zones at the top of an
                  edge and support system setup and operations.
                </p>

                <p className='text-[15px] leading-[1.8] md:text-[16px] lg:text-[20px]'>
                  <span className='font-semibold text-[#febd29]'>
                    Rope Rescue Level 2 (RR2)
                  </span>{' '}
                  technicians are qualified to operate over the edge in
                  high-angle terrain. Rope Rescue Team Leaders oversee all rope
                  rescue operations and coordinate with the Search Manager.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='h-[8px] w-full bg-white' />

        {/* ======================
            ROPE RESCUE TRAINING
            ====================== */}
        <section className='w-full' style={{ backgroundColor: '#392e29' }}>
          <div className='relative w-full'>
            <div className='flex h-[360px] items-center justify-center px-6 pt-10 sm:h-[420px] sm:px-10 sm:pt-14 md:h-[480px] md:pt-16 lg:h-[540px] lg:pt-20'>
              <Image
                src={ropeRescue4}
                alt='Rope rescue training exercise'
                sizes='100vw'
                className='max-h-full w-auto max-w-full object-contain'
              />
            </div>

            <div
              className='w-full px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14'
              style={{ backgroundColor: '#392e29' }}
            >
              <p className='mx-auto max-w-[90ch] text-center text-[13px] leading-[1.7] text-white sm:text-[15px] md:text-[16px] lg:text-[20px]'>
                All rope rescue personnel must successfully complete provincial
                certification examinations and maintain operational readiness
                through a minimum of 20 hours of annual rope rescue training and
                recurrency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
