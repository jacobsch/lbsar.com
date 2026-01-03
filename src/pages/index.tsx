import Image from 'next/image';
import Layout from '$/layout/Layout';
import Seo from '$/Seo';

/** --------- Grid framework --------- */
function GridContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 lg:px-12 max-w-[1320px] 2xl:w-[1320px] ${className}`}>
      {children}
    </div>
  );
}

function Grid12({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        'grid grid-cols-12 gap-x-4 sm:gap-x-6 lg:gap-x-8',
        '2xl:grid-cols-[repeat(12,88px)] 2xl:gap-x-[24px]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

/** ----------------- HERO TRIANGLES PLACEHOLDER ----------------- */
const HeroTrianglesPlaceholder = () => {
  return (
    <div
      className='
        pointer-events-none select-none
        relative
        w-[clamp(280px,40vw,760px)]
        aspect-[1/1.25]
      '
    >
      <div className='absolute inset-0 rounded-lg border border-white/25 bg-white/10 backdrop-blur-[1px]' />
      <div className='absolute right-4 top-4 text-white/70 text-xs font-semibold tracking-[0.18em]'>
        TRIANGLES SVG PLACEHOLDER
      </div>
      <div className='absolute left-4 bottom-4 text-white/60 text-xs'>
        Replace with exported SVG
      </div>
    </div>
  );
};

/** ----------------- HERO ----------------- */
const Hero = () => {
  return (
    <section id='home' className='relative overflow-hidden'>
      {/* Background image placeholder */}
      <div className='absolute inset-0'>
        <Image
          src='/images/hero-mountains-placeholder.jpg'
          alt=''
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/15' />
      </div>

      {/* Top padding kept so future Header can sit above */}
      <div className='relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-16'>
        <GridContainer>
          <Grid12 className='items-end min-h-[560px] sm:min-h-[640px] lg:min-h-[740px]'>
            {/* Left: LBSAR */}
            <div className='col-span-12 lg:col-span-7'>
              <h1
                className='
                  font-rugged
                  text-white
                  uppercase
                  leading-[0.85]
                  tracking-[0.08em]
                  drop-shadow
                  text-[56px]
                  sm:text-[74px]
                  lg:text-[96px]
                '
                style={{ textShadow: '0 2px 18px rgba(0,0,0,0.55)' }}
              >
                LBSAR
              </h1>

              <div className='mt-4 h-9 sm:h-10 w-full max-w-[520px] bg-black/35' />
            </div>

            {/* Right: triangle artwork */}
            <div className='col-span-12 lg:col-span-5 relative'>
              <div className='hidden lg:block absolute right-[-60px] top-[-110px]'>
                <HeroTrianglesPlaceholder />
              </div>

              <div className='lg:hidden absolute right-[-20px] top-[-60px] scale-[0.68] origin-top-right'>
                <HeroTrianglesPlaceholder />
              </div>
            </div>
          </Grid12>
        </GridContainer>
      </div>
    </section>
  );
};

/** ----------------- ABOUT BAND ----------------- */
const AboutBand = () => (
  <section id='about' className='bg-orange-600'>
    <GridContainer className='py-12 sm:py-14'>
      <Grid12 className='gap-y-8'>
        <p className='col-span-12 md:col-span-6 text-sm leading-7 text-white/90'>
          Lions Bay Search and Rescue (LBSAR) is a volunteer emergency response organization providing
          search and rescue services in the Sea-to-Sky corridor. Our response area includes the
          village of Lions Bay, the mountains of the Howe Sound Crest, and remote wilderness terrain
          that reaches into the Capilano watershed.
        </p>

        <p className='col-span-12 md:col-span-6 text-sm leading-7 text-white/90'>
          We assist people who are lost, missing, injured, or in distress in a wide range of
          environments. Incidents may involve urban searches, lost or injured hikers, or complex
          rescues in steep and technical terrain.
        </p>
      </Grid12>
    </GridContainer>
  </section>
);

/** ----------------- EMERGENCY BANNER ----------------- */
const EmergencyBanner = () => (
  <section className='relative overflow-hidden'>
    <div className='absolute inset-0'>
      <Image
        src='/images/forest-placeholder.jpg'
        alt=''
        fill
        className='object-cover'
      />
      <div className='absolute inset-0 bg-black/55' />
    </div>

    <div className='relative z-10 py-16 sm:py-20'>
      <GridContainer>
        <Grid12 className='items-end gap-y-10'>
          <div className='col-span-12 md:col-span-7 md:justify-self-end'>
            <div className='max-w-xl text-right'>
              <div className='text-sm font-extrabold tracking-[0.22em] text-yellow-300'>
                SEARCH &amp; RESCUE
              </div>
              <div className='mt-3 text-5xl font-extrabold tracking-[0.12em] text-white sm:text-6xl'>
                NO COST
              </div>
              <div className='mt-4 text-sm text-white/85'>
                If you, or someone else, needs help, call
              </div>
              <div className='mt-2 flex items-end justify-end gap-3'>
                <div className='text-6xl font-black text-yellow-300 sm:text-7xl'>
                  911
                </div>
                <div className='pb-2 text-sm font-bold tracking-[0.2em] text-yellow-300'>
                  IMMEDIATELY
                </div>
              </div>
            </div>
          </div>
        </Grid12>
      </GridContainer>
    </div>
  </section>
);

/** ----------------- PAGE ----------------- */
export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <Hero />
        <AboutBand />
        <EmergencyBanner />
      </main>
    </Layout>
  );
}
