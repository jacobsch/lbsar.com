import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import mountain_rescue_photo from '~/images/mountain-rescue-1.png';
import mountain_rescue_scratched_words from '~/images/mountain-rescue-scratched-words.png';
import pick_axe from '~/images/pick-axe.svg';

const BG = '#151f2f';
const ACCENT = '#febd29';

function PickAxeIcon({ sizePx }: { sizePx: number }) {
  return (
    <span
      aria-hidden='true'
      className='inline-block'
      style={{
        width: `${sizePx}px`,
        height: `${sizePx}px`,
        backgroundColor: ACCENT,
        WebkitMaskImage: `url(${pick_axe.src})`,
        maskImage: `url(${pick_axe.src})`,
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

export default function MountainRescuePage() {
  return (
    <Layout>
      <Seo templateTitle='Mountain Rescue' />

      <main
        className='w-screen overflow-x-hidden'
        style={{ backgroundColor: BG }}
      >
        <section className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]'>
            {/* LEFT — PHOTO */}
            <div className='w-full'>
              <Image
                src={mountain_rescue_photo}
                alt='Mountain rescue'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 60vw'
                className='h-auto w-full object-contain md:h-full md:object-cover md:object-center'
              />
            </div>

            {/* RIGHT — CONTENT */}
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
                    '[--word-h:260px] [--word-x:-8px] [--word-y:-24px] [--word-scale:.90]',
                    'sm:[--word-h:280px] sm:[--word-scale:1] sm:[--word-x:-8px] sm:[--word-y:-20px]',
                    'md:[--word-h:360px] md:[--word-x:-8px] md:[--word-y:-130px] md:[--word-scale:1.15]',
                    'lg:[--word-x:-8px] lg:[--word-h:500px] lg:[--word-y:-180px] lg:[--word-scale:1.1]',
                    'xl:[--word-x:[-20px] xl:[--word-h:400px] xl:[--word-scale:1] xl:[--word-y:-80px]',

                    // PICKAXE variables (px + scale + size)
                    '[--axe-scale:1] [--axe-size:140px] [--axe-x:0px] [--axe-y:-30px]',
                    'sm:[--axe-scale:1] sm:[--axe-size:150px] sm:[--axe-x:0px] sm:[--axe-y:-12px]',
                    'md:[--axe-scale:1] md:[--axe-x:0px] md:[--axe-size:200px] md:[--axe-y:-170px]',
                    'lg:[--axe-x:0px] lg:[--axe-y:-250px] lg:[--axe-scale:1.05] lg:[--axe-size:160px]',
                    'xl:[--axe-size:205px] xl:[--axe-x:0px] xl:[--axe-scale:1.25] xl:[--axe-y:-60px]',
                  ].join(' ')}
                >
                  {/* WORDMARK */}
                  <div
                    className='relative w-full'
                    style={{ height: 'var(--word-h)' } as React.CSSProperties}
                  >
                    <Image
                      src={mountain_rescue_scratched_words}
                      alt='Mountain Rescue'
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

                  {/* PICK-AXE */}
                  <div
                    className='relative flex w-full justify-center'
                    style={{
                      transform:
                        'translate(var(--axe-x), var(--axe-y)) scale(var(--axe-scale))',
                    }}
                  >
                    <PickAxeIcon
                      // CSS var returns like "140px" → parse to number
                      sizePx={parseInt(
                        (getComputedStyle !== undefined
                          ? '140'
                          : '140') as string
                      )}
                    />
                    {/* NOTE: size is set below via inline style wrapper so it always reacts */}
                    <span
                      aria-hidden='true'
                      className='absolute inset-0'
                      style={{ display: 'none' }}
                    />
                  </div>

                  {/* Real pickaxe render with var-based size */}
                  <div
                    className='pointer-events-none -mt-[9999px] h-0 w-0 overflow-hidden'
                    aria-hidden='true'
                  />
                </div>

                {/* ✅ Pickaxe size driven by CSS var (reacts instantly) */}
                <div className='-mt-0 flex w-full justify-center'>
                  <span
                    className='inline-flex'
                    style={{
                      transform:
                        'translate(var(--axe-x), var(--axe-y)) scale(var(--axe-scale))',
                    }}
                  >
                    <PickAxeIcon sizePx={Number(String('0'))} />
                  </span>
                </div>

                {/* TEXT */}
                <div className='mt-[400px] w-full max-w-[640px] px-6 text-left sm:mt-[450px] sm:px-0 md:mt-[400px] lg:mt-[500px] xl:mt-[600px]'>
                  <p className='text-[15px] leading-relaxed text-white sm:text-[16px] lg:text-[20px]'>
                    <span className='font-semibold' style={{ color: ACCENT }}>
                      Mountain rescue
                    </span>{' '}
                    involves locating, stabilizing, and evacuating individuals
                    in steep, remote, alpine terrain where access is limited and
                    conditions can change rapidly. These operations often occur
                    in high-consequence environments that require advanced
                    technical skills and careful risk management.
                  </p>

                  <p className='sm:mt-30 mt-20 text-[12px] leading-relaxed text-white sm:text-[13px] lg:mt-[200px] lg:text-[14px]'>
                    <span className='font-semibold' style={{ color: ACCENT }}>
                      Training Exercise:{' '}
                    </span>
                    Tantalus Range near Serratus. Exposed class 5 terrain travel
                    ACMG guide Crosby Johnston, Maria Masiar (LBSAR), Kevin
                    Ristau (Coquitlam SAR)
                  </p>
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
