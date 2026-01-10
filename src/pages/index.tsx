import Image from 'next/image';
import Layout from '$/layout/Layout';
import Seo from '$/Seo';

import triangles_logo from '~/images/triangles-logo.png';
import lbsar_scratched_words from '~/images/lbsar-scratched-words.png';
import trees from '~/images/trees.jpg';
import call_911 from '~/images/call-911.png';
import bottom_triangles from '~/images/bottom-triangles.png';
import lbsar_map_word from '~/images/lbsar-map-word.png';
import lbsar_map from '~/images/lbsar-map.jpg';

/** --------- Grid framework --------- */
function GridContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        'max-w-[1320px] 2xl:w-[1320px]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

function Grid12({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

/** ----------------- HERO ----------------- */
const Hero = () => {
  const ORANGE = '#FC6421';

  return (
    <section id='home' className='relative isolate overflow-visible'>
      <div
        className={[
          'pointer-events-none absolute z-[40]',
          'hidden [@media(min-width:1070px)]:block',
          'lg:[--tri-h:800px] lg:[--tri-right:-10vw] lg:[--tri-top:-0px] lg:[--tri-tx:-9.5vw] lg:[--tri-w:800px]',
          'xl:[--tri-h:800px] xl:[--tri-right:-10vw] xl:[--tri-top:-0px] xl:[--tri-tx:-10vw] xl:[--tri-w:800px]',
        ].join(' ')}
        style={{
          width: 'var(--tri-w)',
          height: 'var(--tri-h)',
          top: 'var(--tri-top)',
          right: 'var(--tri-right)',
          transform: 'translateX(var(--tri-tx))',
        }}
      >
        <Image
          src={triangles_logo}
          alt='LBSAR Logo with Triangles Pattern'
          fill
          loading='eager'
          sizes='(min-width:1070px) 700px, 0px'
          className='object-contain object-right-top'
        />
      </div>

      <div
        className={[
          'pointer-events-none absolute z-[45]',
          '[--wm-left:10px] [--wm-top:520px] [--wm-w:200px]',
          'sm:[--wm-left:10px] sm:[--wm-top:660px] sm:[--wm-w:300px]',
          'md:[--wm-left:10px] md:[--wm-top:630px] md:[--wm-w:400px]',
          'lg:[--wm-left:10px] lg:[--wm-top:620px] lg:[--wm-w:500px]',
        ].join(' ')}
        style={{
          top: 'var(--wm-top)',
          left: 'var(--wm-left)',
          width: 'var(--wm-w)',
        }}
      >
        <Image
          src={lbsar_scratched_words}
          alt='LBSAR scratched lettering'
          width={1800}
          height={650}
          loading='eager'
          sizes='(max-width: 639px) 200px, (max-width: 767px) 300px, (max-width: 1023px) 350px, 500px'
          className='h-auto w-full drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]'
        />
      </div>

      <div className='relative'>
        <div
          className={[
            'absolute inset-0 z-0',

            'h-[705px]',
            'sm:h-[850px]',
            'md:h-[900px]',
            'lg:h-[1000px]',
          ].join(' ')}
        >
          <Image
            src='/images/lions.svg' // TODO: fix longer load on desktop but importing the jpg is fuzzy on mobile
            alt='Lions Mountains'
            fill
            priority
            sizes='100vw'
            className='object-cover'
          />
          <div className='from-black/55 absolute inset-0 bg-gradient-to-b via-black/30 to-black/10' />
        </div>

        <div className='relative z-10 pb-14 pt-24 sm:pt-20 lg:pb-16 lg:pt-0'>
          <GridContainer>
            <Grid12 className='min-h-[560px] items-end sm:min-h-[640px] lg:min-h-[740px]'>
              <div className='col-span-12 lg:col-span-7'>
                <div className='bg-black/35 mt-6 h-10 w-full max-w-[560px] sm:h-11' />
              </div>

              <div className='col-span-12 lg:col-span-5' />
            </Grid12>
          </GridContainer>
        </div>

        <section
          id='about'
          className='relative -mt-28 sm:-mt-2 md:-mt-2 lg:-mt-2'
        >
          <div
            className='absolute inset-0'
            style={{ backgroundColor: ORANGE }}
            aria-hidden
          />

          <div className='relative z-10'>
            <GridContainer
              className={[
                'sm:pb-13 pb-14 md:pb-28 lg:pb-32',

                'pt-3',
                'sm:pt-1',
                'md:pt-10',
                'lg:pt-20',
              ].join(' ')}
            >
              <Grid12 className='mt-12 gap-y-10 sm:mt-16 lg:mt-20'>
                <p className='col-span-12 text-[15px] leading-7 text-white/90 sm:text-[16px] sm:leading-8 md:col-span-6 lg:text-[20px]'>
                  Lions Bay Search and Rescue (LBSAR) is a volunteer emergency
                  response organization providing search and rescue services in
                  the Sea-to-Sky corridor. Our response area includes the
                  village of Lions Bay, the mountains of the Howe Sound Crest,
                  and remote wilderness terrain that reaches into the Capilano
                  watershed. The most popular trails we support include the Howe
                  Sound Crest Trail which leads to the iconic Lions, Mount
                  Brunswick, Mount Harvey, Deeks Lakes, and the Tunnel Bluffs
                  lookout trail. We also provide mutual aid assistance to SAR
                  teams in all areas of British Columbia, and have also been
                  requested for Canada-wide SAR assistance.
                </p>

                <p className='col-span-12 text-[15px] leading-7 text-white/90 sm:text-[16px] sm:leading-8 md:col-span-6 lg:text-[20px]'>
                  We assist people who are lost, missing, injured, or in
                  distress in a wide range of environments. Incidents may
                  involve urban searches, lost or injured hikers, or complex
                  rescues in steep and technical terrain.
                  <br />
                  <br />
                  Operating under Emergency Management and Climate Readiness
                  (EMCR), LBSAR works closely with neighbouring search and
                  rescue teams and other emergency services like the RCMP, Fire,
                  and Ambulance. Our volunteers train year-round to maintain
                  operational readiness and to respond effectively in all
                  weather and terrain conditions.
                </p>
              </Grid12>
            </GridContainer>
          </div>
        </section>
      </div>
    </section>
  );
};

/** ----------------- EMERGENCY BANNER ----------------- */
const EmergencyBanner = () => (
  <section className='relative isolate overflow-visible'>
    {/* Background */}
    <div className='absolute inset-0 z-0 bg-[#121d2f]'>
      <Image
        src={trees}
        alt='Forest'
        fill
        sizes='100vw'
        className='object-cover'
        loading='lazy'
      />
      <div className='bg-black/55 absolute inset-0' />
    </div>

    {/* Foreground */}
    <div
      className={[
        'relative z-10',
        'py-20 sm:py-24 lg:py-28',
        'min-h-[340px]',
        'sm:min-h-[480px]',
        'md:min-h-[480px]',
        'lg:min-h-[660px]',
        'xl:min-h-[720px]',
      ].join(' ')}
    >
      {/* Call 911 PNG */}
      <div
        className={[
          'pointer-events-none absolute z-20',

          // MOBILE: centered
          'left-1/2 -translate-x-1/2',

          // DESKTOP
          'sm:left-auto sm:right-0',
          'sm:-translate-x-[80px]',
          'md:-translate-x-[80px]',
          'lg:-translate-x-[80px]',
          'xl:-translate-x-[80px]',

          // vertical positioning
          'top-[-75px]',
          'sm:top-[-80px]',
          'md:top-[-100px]',
          'lg:top-[-100px]',

          // sizing
          'w-[260px]',
          'sm:w-[320px]',
          'md:w-[360px]',
          'lg:w-[420px]',
        ].join(' ')}
      >
        <Image
          src={call_911}
          alt='Call 911'
          width={1200}
          height={600}
          sizes='(max-width: 639px) 260px, (max-width: 767px) 320px, (max-width: 1023px) 360px, 420px'
          className='h-auto w-full'
          quality={75}
        />
      </div>

      {/* Bottom triangle: bottom-left, hidden on mobile, with X/Y translate knobs */}
      <div
        className={[
          'pointer-events-none absolute bottom-0 left-0 z-20',
          'hidden sm:block',

          // scale smaller
          'w-[140px]',
          'sm:w-[170px]',
          'md:w-[210px]',
          'lg:w-[250px]',
          'xl:w-[250px]',

          // translate knobs
          '[--bt-x:0px] [--bt-y:0px]',
          'sm:[--bt-x:0px] sm:[--bt-y:0px]',
          'md:[--bt-x:0px] md:[--bt-y:0px]',
          'lg:[--bt-x:50px] lg:[--bt-y:0px]',
        ].join(' ')}
        style={{
          transform: 'translate(var(--bt-x), var(--bt-y))',
        }}
      >
        <Image
          src={bottom_triangles}
          alt='Triangle Pattern'
          width={1200}
          height={1200}
          sizes='(max-width: 639px) 0px, (max-width: 767px) 170px, (max-width: 1023px) 210px, (max-width: 1279px) 260px, 300px'
          className='h-auto w-full object-contain'
          quality={75}
        />
      </div>

      <GridContainer>
        <Grid12 className='items-end gap-y-10'>
          <div className='col-span-12' />
        </Grid12>
      </GridContainer>
    </div>
  </section>
);

/** ----------------- AREA MAP ----------------- */
const AreaMapSection = () => {
  const ORANGE = '#FC6421';

  return (
    <section
      id='area-map'
      className='relative isolate w-full overflow-hidden bg-white'
    >
      {/* Orange bar */}
      <div
        aria-hidden
        className='w-full'
        style={{ backgroundColor: ORANGE, height: 40 }}
      />

      <div className='relative'>
        {/* Wordmark */}
        <div className='mx-auto w-full max-w-[1320px] px-5 pb-3 pt-6 sm:px-8 lg:px-12'>
          <Image
            src={lbsar_map_word}
            alt='Lions Bay Area Map'
            width={1200}
            height={220}
            sizes='(max-width: 639px) 320px, (max-width: 1023px) 520px, 680px'
            className='h-auto w-[260px] sm:w-[340px] md:w-[420px] lg:w-[520px]'
            loading='lazy'
          />
        </div>

        {/* Map container with size + position controls */}
        <div
          className={[
            'relative mx-auto w-full max-w-[1320px] px-5 pb-10 sm:px-8 lg:px-12',

            // size knobs
            '[--map-max:920px] [--map-w:100%] [--map-x:0px] [--map-y:0px]',
            'sm:[--map-max:980px] sm:[--map-x:0px] sm:[--map-y:0px]',
            'md:[--map-max:1040px] md:[--map-x:0px] md:[--map-y:0px]',
            'lg:[--map-max:1120px] lg:[--map-x:0px] lg:[--map-y:0px]',
            'xl:[--map-max:1180px] xl:[--map-x:0px] xl:[--map-y:0px]',
          ].join(' ')}
        >
          <div
            className='relative'
            style={{
              width: 'var(--map-w)',
              maxWidth: 'var(--map-max)',
              transform: 'translate(var(--map-x), var(--map-y))',
            }}
          >
            <Image
              src={lbsar_map}
              alt='LBSAR Area Map'
              width={1600}
              height={2400}
              sizes='(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1120px'
              className='h-auto w-full bg-white'
              loading='lazy'
              style={{ transform: 'translateZ(0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/** ----------------- PAGE ----------------- */
export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-[#121d2f]' style={{ overflowX: 'hidden' }}>
        <Hero />
        <EmergencyBanner />
        <AreaMapSection />
      </main>
    </Layout>
  );
}
