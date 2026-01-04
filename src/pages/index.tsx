import Image from 'next/image'
import Layout from '$/layout/Layout'
import Seo from '$/Seo'

/** --------- Grid framework --------- */
function GridContainer({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
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
  )
}

function Grid12({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
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
  )
}

/** ----------------- HERO ----------------- */
const Hero = () => {
  const HEADER_BG = '#151f2f'
  const BAR_BG = '#121d2f'
  const ORANGE = '#FC6421'

  const BAR_HEIGHT = 50
  const SEAM_HEIGHT = 32

  return (
    <section id='home' className='relative isolate overflow-visible'>
      <div
        aria-hidden='true'
        style={{
          height: BAR_HEIGHT,
          background: `
            linear-gradient(to bottom, ${HEADER_BG} 0%, ${BAR_BG} 100%)
            top / 100% ${SEAM_HEIGHT}px no-repeat,
            ${BAR_BG}
          `,
        }}
      />

      <div
        aria-hidden
        className={[
          'pointer-events-none absolute z-[40]',
          'hidden lg:block',
          'md:[--tri-w:700px] md:[--tri-h:700px] md:[--tri-top:0.5vh] md:[--tri-right:-14vw] md:[--tri-tx:-14vw]',
          'lg:[--tri-w:1500px] lg:[--tri-h:1100px] lg:[--tri-top:0.20vh] lg:[--tri-right:-16.5vw] lg:[--tri-tx:-16vw]',
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
          src='/images/triangles-logo.png'
          alt=''
          fill
          priority
          sizes='(max-width: 1023px) 700px, 1500px'
          className='object-contain object-top-right'
        />
      </div>

      <div
        className={[
          'pointer-events-none absolute z-[45]',
          '[--wm-top:730px] [--wm-left:0px] [--wm-w:200px]',
          'sm:[--wm-top:810px] sm:[--wm-left:0px] sm:[--wm-w:300px]',
          'md:[--wm-top:800px] md:[--wm-left:0px] md:[--wm-w:350px]',
          'lg:[--wm-top:900px] lg:[--wm-left:0px] lg:[--wm-w:500px]',
        ].join(' ')}
        style={{
          top: 'var(--wm-top)',
          left: 'var(--wm-left)',
          width: 'var(--wm-w)',
        }}
      >
        <Image
          src='/images/lbsar-scratched-words.png'
          alt='LBSAR'
          width={1800}
          height={650}
          priority
          sizes='(max-width: 639px) 200px, (max-width: 767px) 300px, (max-width: 1023px) 350px, 500px'
          className='h-auto w-full drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]'
        />
      </div>

      <div className='relative'>
        <div className='absolute inset-0 z-0' style={{ top: BAR_HEIGHT }}>
          <Image
            src='/images/hets-rescue.jpg'
            alt=''
            fill
            priority
            fetchPriority="high"
            sizes='100vw'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/10' />
        </div>

        <div className='relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-16'>
          <GridContainer>
            <Grid12 className='items-end min-h-[560px] sm:min-h-[640px] lg:min-h-[740px]'>
              <div className='col-span-12 lg:col-span-7'>
                <div className='mt-6 h-10 sm:h-11 w-full max-w-[560px] bg-black/35' />
              </div>

              <div className='col-span-12 lg:col-span-5' />
            </Grid12>
          </GridContainer>
        </div>

        <section id='about' className='relative'>
          <div className='absolute inset-0' style={{ backgroundColor: ORANGE }} aria-hidden />

          <div className='relative z-10'>
            <GridContainer className='py-20 sm:py-24 lg:py-28'>
              <Grid12 className='gap-y-10 mt-12 sm:mt-16 lg:mt-20'>
                <p className='col-span-12 md:col-span-6 text-[15px] sm:text-[16px] lg:text-[20px] leading-7 sm:leading-8 text-white/90'>
                  Lions Bay Search and Rescue (LBSAR) is a volunteer emergency response organization
                  providing search and rescue services in the Sea-to-Sky corridor. Our response area
                  includes the village of Lions Bay, the mountains of the Howe Sound Crest, and remote
                  wilderness terrain that reaches into the Capilano watershed. The most popular trails
                  we support include the Howe Sound Crest Trail which leads to the iconic Lions, Mount
                  Brunswick, Mount Harvey, Deeks Lakes, and the Tunnel Bluffs lookout trail. We also
                  provide mutual aid assistance to SAR teams in all areas of British Columbia, and have
                  also been requested for Canada-wide SAR assistance.
                </p>

                <p className='col-span-12 md:col-span-6 text-[15px] sm:text-[16px] lg:text-[20px] leading-7 sm:leading-8 text-white/90'>
                  We assist people who are lost, missing, injured, or in distress in a wide range of
                  environments. Incidents may involve urban searches, lost or injured hikers, or complex
                  rescues in steep and technical terrain.
                  <br />
                  <br />
                  Operating under Emergency Management and Climate Readiness (EMCR), LBSAR works closely
                  with neighbouring search and rescue teams and other emergency services like the RCMP,
                  Fire, and Ambulance. Our volunteers train year-round to maintain operational readiness
                  and to respond effectively in all weather and terrain conditions.
                </p>
              </Grid12>
            </GridContainer>
          </div>
        </section>
      </div>
    </section>
  )
}

/** ----------------- EMERGENCY BANNER ----------------- */
const EmergencyBanner = () => (
  <section className="relative isolate overflow-visible">
    {/* Background */}
    <div className="absolute inset-0 z-0 bg-[#121d2f]">
      <Image
        src="/images/lions-sunset.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
    </div>

    {/* Foreground: bigger min-height so nothing clips */}
    <div
      className={[
        'relative z-10',
        'py-20 sm:py-24 lg:py-28',
        // bigger heights across breakpoints
        'min-h-[340px]',
        'sm:min-h-[480px]',
        'md:min-h-[480px]',
        'lg:min-h-[660px]',
        'xl:min-h-[720px]',
      ].join(' ')}
    >
      {/* 911 PNG: glued to the RIGHT edge of the viewport */}
      <div
        className={[
          'pointer-events-none absolute z-20 right-0',

          // vertical position (tuned so it sits nicely in the taller section)
          'top-[-75px]',
          'sm:top-[-80px]',
          'md:top-[-100px]',
          'lg:top-[-100px]',

          // size
          'w-[260px]',
          'sm:w-[320px]',
          'md:w-[360px]',
          'lg:w-[420px]',

          // pull LEFT from the right edge (safe offsets)
          'translate-x-[-110px]',
          'sm:-translate-x-[80px]',
          'md:-translate-x-[80px]',
          'lg:-translate-x-[80px]',
          'xl:-translate-x-[80px]',
        ].join(' ')}
      >
        <Image
          src="/images/call-911.png"
          alt="Call 911"
          width={1200}
          height={600}
          sizes="(max-width: 639px) 260px, (max-width: 767px) 320px, (max-width: 1023px) 360px, 420px"
          className="h-auto w-full"
        />
      </div>

      {/* Optional: keep your grid for future content */}
      <GridContainer>
        <Grid12 className="items-end gap-y-10">
          <div className="col-span-12" />
        </Grid12>
      </GridContainer>
    </div>
  </section>
)


/** ----------------- PAGE ----------------- */
export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-[#121d2f]' style={{ overflowX: 'hidden' }}>
        <Hero />
        <EmergencyBanner />
      </main>
    </Layout>
  )
}
