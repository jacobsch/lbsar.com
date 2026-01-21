import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import mountain_rescue_photo from '~/images/rescue-specialties/mountain-rescue/mountain-rescue-1.png';
import mountain_rescue_scratched_words from '~/images/rescue-specialties/mountain-rescue/mountain-rescue-scratched-words.png';
import pick_axe from '~/images/rescue-specialties/pick-axe.svg';
import class4ScratchedWords from '~/images/rescue-specialties/mountain-rescue/class-4-scratched-words.png';
import exposureScratchedWords from '~/images/rescue-specialties/mountain-rescue/exposure-scratched-words.png';
import class4ExposedPhoto from '~/images/rescue-specialties/mountain-rescue/class-4-exposed-photo.jpeg';
import skypilotPhoto from '~/images/rescue-specialties/mountain-rescue/skypilot-photo.jpg';
import mountainRescueTriangles from '~/images/rescue-specialties/mountain-rescue/mountain-rescue-triangles.png';
import mountainRescueImageBlock from '~/images/rescue-specialties/mountain-rescue/mountain-rescue-image-block.png';
import harveySunset from '~/images/rescue-specialties/mountain-rescue/harvey-sunset.png';

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

      <div className='w-full overflow-x-hidden' style={{ backgroundColor: BG }}>
        <section className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]'>
            <div className='w-full'>
              <Image
                src={mountain_rescue_photo}
                alt='Mountain rescue'
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
                    '[--word-h:260px] [--word-scale:.90] [--word-x:-0px] [--word-y:-24px]',
                    'sm:[--word-h:280px] sm:[--word-scale:1] sm:[--word-x:-8px] sm:[--word-y:-20px]',
                    'md:[--word-h:360px] md:[--word-scale:1.15] md:[--word-x:-8px] md:[--word-y:-130px]',
                    'lg:[--word-h:500px] lg:[--word-scale:1.1] lg:[--word-x:-0px] lg:[--word-y:-180px]',
                    'xl:[--word-h:400px] xl:[--word-scale:1] xl:[--word-x:-0px] xl:[--word-y:-80px]',

                    // PICKAXE variables
                    '[--axe-scale:1] [--axe-size:140px] [--axe-x:0px] [--axe-y:-50px]',
                    'sm:[--axe-scale:1] sm:[--axe-size:150px] sm:[--axe-x:0px] sm:[--axe-y:-12px]',
                    'md:[--axe-scale:1] md:[--axe-size:200px] md:[--axe-x:0px] md:[--axe-y:-170px]',
                    'lg:[--axe-scale:1.05] lg:[--axe-size:160px] lg:[--axe-x:0px] lg:[--axe-y:-250px]',
                    'xl:[--axe-scale:1.25] xl:[--axe-size:205px] xl:[--axe-x:0px] xl:[--axe-y:-60px]',
                  ].join(' ')}
                >
                  <div className='w-full px-6 sm:px-10 md:px-0'>
                    <div
                      className='relative mx-auto w-full max-w-[560px] md:max-w-none'
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
                  </div>

                  <div
                    className='relative flex w-full justify-center'
                    style={{
                      transform:
                        'translate(var(--axe-x), var(--axe-y)) scale(var(--axe-scale))',
                    }}
                  >
                    <PickAxeIcon sizePx={140} />
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
          </div>
        </section>
        <div className='h-[8px] w-full bg-white' />

        {/* =========================
                    CLASS 4
            ========================= */}

        <section className='w-full'>
          <div className='grid min-h-[900px] grid-cols-1 md:min-h-[1100px] md:grid-cols-[0.85fr_1.15fr] lg:min-h-[1200px]'>
            <div
              className='relative flex flex-col items-center px-6 pb-20 pt-24 sm:px-10 sm:pt-28 md:px-12 md:pt-32 lg:px-14 lg:pt-48'
              style={{ backgroundColor: '#fc6421' }}
            >
              <div className='relative flex w-full max-w-[560px] translate-x-0 justify-center px-2 sm:-translate-x-[6px] sm:px-3'>
                <Image
                  src={class4ScratchedWords}
                  alt='Class 4'
                  className='h-auto w-full scale-[1.0] object-contain sm:scale-[1.06] md:scale-[1.1] lg:scale-[1.12]'
                />
              </div>

              <div className='mx-auto mt-24 w-full max-w-[560px] space-y-10 text-white/95 sm:mt-28 md:mt-32 lg:mt-36'>
                <p className='text-[15px] leading-relaxed sm:text-[16px] lg:text-[20px]'>
                  Lions Bay Search and Rescue combines strong mountaineering
                  foundations with technical rope rescue to respond to falls,
                  lost or injured hikers, climbers, and other mountain-related
                  emergencies.
                </p>

                <p className='text-[15px] leading-relaxed sm:text-[16px] lg:text-[20px]'>
                  Operations frequently take place in Class 4 and Class 5
                  terrain, on rock, ice, and snow, and may involve long approach
                  times, exposure, and complex evacuations.
                </p>
              </div>

              <p
                className='mt-28 w-full max-w-[560px] text-[12px] leading-relaxed text-white/90
                sm:mt-44 sm:text-[13px]
                md:mt-72
                lg:mt-72 lg:text-[14px]'
              >
                <span className='font-semibold' style={{ color: ACCENT }}>
                  Rescue:
                </span>{' '}
                Mount Brunswick. Exposed class 4 terrain. Doug Brown (LBSAR
                doctor), Maria Masiar (LBSAR Mountain Rescue)
              </p>
            </div>

            <div className='relative h-full min-h-[420px]'>
              <div className='absolute inset-0 overflow-hidden'>
                <Image
                  src={class4ExposedPhoto}
                  alt='Exposed class 4 terrain'
                  fill
                  sizes='(max-width: 768px) 100vw, 60vw'
                  className='object-cover object-center'
                />
              </div>

              <div className='pointer-events-none absolute inset-x-0 bottom-[5px] px-3 sm:bottom-[8px] sm:px-4 md:bottom-[10px] md:px-7 lg:px-11'>
                <Image
                  src={exposureScratchedWords}
                  alt='Exposure'
                  className='block h-auto w-full translate-x-0 scale-[0.96] object-contain sm:-translate-x-[6px] sm:scale-[0.99] md:-translate-x-[8px] md:scale-[1.02]'
                />
              </div>
            </div>
          </div>
        </section>
        <div className='h-[8px] w-full bg-white' />

        {/* =========================
                    SKYPILOT
            ========================= */}
        <section className='w-full' style={{ backgroundColor: '#151f2f' }}>
          <div className='relative mx-auto w-full max-w-[1400px] px-6 pt-12 sm:px-10 sm:pt-16 md:px-14 md:pt-20'>
            <div className='relative h-[360px] translate-x-0 overflow-hidden sm:h-[420px] sm:-translate-x-[2px] md:h-[480px] lg:h-[520px]'>
              <Image
                src={skypilotPhoto}
                alt='Mountain rescue specialists in alpine terrain'
                fill
                sizes='100vw'
                className='object-cover object-center'
              />

              <div className='pointer-events-none absolute left-0 top-0 z-10 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[210px] xl:w-[240px]'>
                <Image
                  src={mountainRescueTriangles}
                  alt=''
                  className='h-auto w-full object-contain'
                />
              </div>
            </div>
          </div>

          <div className='w-full px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14'>
            <div className='mx-auto w-full max-w-[980px]'>
              <p className='text-[15px] leading-relaxed text-white sm:text-[16px] lg:text-[20px]'>
                Mountain Rescue specialists are trained and proficient in a wide
                range of disciplines, including exposed terrain travel,
                climbing, crevasse rescue, companion rescue, avalanche rescue,
                and advanced wilderness medical care. These members are
                multi-disciplined and are certified by ACMG guides to operate
                safely in technical alpine environments.
              </p>
            </div>
          </div>
        </section>

        <div className='h-[8px] w-full bg-white' />

        {/* =========================
                  IMAGE BLOCK
            ========================= */}

        <section className='w-full bg-white'>
          <div className='px-6 sm:px-8 md:px-10 lg:px-12'>
            <div className='mx-auto flex w-full max-w-[1400px] translate-x-0 justify-center sm:-translate-x-[7px]'>
              <Image
                src={mountainRescueImageBlock}
                alt='Mountain rescue'
                className='h-auto w-full object-contain'
                sizes='100vw'
              />
            </div>
          </div>
        </section>
        <div className='h-[8px] w-full bg-white' />

        {/* =========================
                  IMAGE ONLY
            ========================= */}

        <section className='w-full' style={{ backgroundColor: '#151f2f' }}>
          <div className='flex items-center justify-center px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14'>
            <Image
              src={harveySunset}
              alt='Mountain rescue'
              sizes='100vw'
              className='h-auto w-full max-w-[1200px] object-contain'
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
