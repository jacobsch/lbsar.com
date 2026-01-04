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

  /**
   * TRIANGLES CONTROLS (your original)
   */
  const TRI_W = '78vw'
  const TRI_H = '120vh'
  const TRI_TOP = '.5vh'
  const TRI_RIGHT = '-16.5vw'
  const TRI_SHIFT_LEFT = '-16vw'

  /**
   * ✅ LBSAR WORDMARK MANUAL CONTROLS (EDIT THESE)
   * These are the ONLY values you change to move/resize the wordmark.
   */
  const WM_TOP = 850 // px from top of the section
  const WM_LEFT = 0 // px from left of the section
  const WM_WIDTH = 760 // px width of the wordmark

  // Optional: different values at a specific screen size (example: lg and up)
  // const WM_TOP_LG = 260
  // const WM_LEFT_LG = 60
  // const WM_WIDTH_LG = 760

  return (
    <section id="home" className="relative isolate overflow-visible">
      {/* Top bar (prevents any light gap) */}
      <div
        aria-hidden="true"
        style={{
          height: BAR_HEIGHT,
          background: `
            linear-gradient(to bottom, ${HEADER_BG} 0%, ${BAR_BG} 100%)
            top / 100% ${SEAM_HEIGHT}px no-repeat,
            ${BAR_BG}
          `,
        }}
      />

      {/* Triangles/logo overlay (original sizing/position) */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-[40]"
        style={{
          width: TRI_W,
          height: TRI_H,
          top: TRI_TOP,
          right: TRI_RIGHT,
          transform: `translateX(${TRI_SHIFT_LEFT})`,
        }}
      >
        <Image
          src="/images/triangles-logo.png"
          alt=""
          fill
          priority
          sizes="80vw"
          className="object-contain object-top-right"
        />
      </div>

      {/* ✅ LBSAR wordmark overlay (MANUAL POSITIONING) */}
      <div
        className="pointer-events-none absolute z-[45]"
        style={{
          top: WM_TOP,
          left: WM_LEFT,
          width: WM_WIDTH,
        }}
      >
        <Image
          src="/images/lbsar-scratched-words.png"
          alt="LBSAR"
          width={1800}
          height={650}
          priority
          sizes="760px"
          className="h-auto w-full drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* Hero background image */}
      <div className="relative">
        <div className="absolute inset-0 z-0" style={{ top: BAR_HEIGHT }}>
          <Image
            src="/images/hets-rescue.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/10" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-16">
          <GridContainer>
            <Grid12 className="items-end min-h-[560px] sm:min-h-[640px] lg:min-h-[740px]">
              <div className="col-span-12 lg:col-span-7">
                {/* NOTE:
                    The wordmark is no longer inside the grid,
                    so it won’t drift off-screen when the grid changes.
                */}
                <div className="mt-6 h-10 sm:h-11 w-full max-w-[560px] bg-black/35" />
              </div>

              <div className="col-span-12 lg:col-span-5" />
            </Grid12>
          </GridContainer>
        </div>

        {/* Orange band (taller + text moved down) */}
        <section id="about" className="relative">
          <div className="absolute inset-0" style={{ backgroundColor: ORANGE }} aria-hidden />

          <div className="relative z-10">
            {/* Taller orange band */}
            <GridContainer className="py-20 sm:py-24 lg:py-28">
              {/* Push text downward */}
              <Grid12 className="gap-y-10 mt-12 sm:mt-16 lg:mt-20">
                <p className="col-span-12 md:col-span-6 text-[15px] sm:text-[16px] lg:text-[20px] leading-7 sm:leading-8 text-white/90">
                  Lions Bay Search and Rescue (LBSAR) is a volunteer emergency response organization
                  providing search and rescue services in the Sea-to-Sky corridor. Our response area
                  includes the village of Lions Bay, the mountains of the Howe Sound Crest, and remote
                  wilderness terrain that reaches into the Capilano watershed. The most popular trails
                  we support include the Howe Sound Crest Trail which leads to the iconic Lions, Mount
                  Brunswick, Mount Harvey, Deeks Lakes, and the Tunnel Bluffs lookout trail. We also
                  provide mutual aid assistance to SAR teams in all areas of British Columbia, and have
                  also been requested for Canada-wide SAR assistance.
                </p>

                <p className="col-span-12 md:col-span-6 text-[15px] sm:text-[16px] lg:text-[20px] leading-7 sm:leading-8 text-white/90">
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
  <section className="relative isolate overflow-hidden">
    <div className="absolute inset-0 z-0" style={{ backgroundColor: '#121d2f' }}>
      <Image src="/images/lions-sunset.jpg" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-black/55" />
    </div>

    <div className="relative z-10 py-16 sm:py-20">
      <GridContainer>
        <Grid12 className="items-end gap-y-10">
          <div className="col-span-12 md:col-span-7 md:justify-self-end">
            <div className="max-w-xl text-right">
              <div className="text-sm font-extrabold tracking-[0.22em] text-yellow-300">
                SEARCH &amp; RESCUE
              </div>
              <div className="mt-3 text-5xl font-extrabold tracking-[0.12em] text-white sm:text-6xl">
                NO COST
              </div>
              <div className="mt-4 text-sm text-white/85">If you, or someone else, needs help, call</div>
              <div className="mt-2 flex items-end justify-end gap-3">
                <div className="text-6xl font-black text-yellow-300 sm:text-7xl">911</div>
                <div className="pb-2 text-sm font-bold tracking-[0.2em] text-yellow-300">
                  IMMEDIATELY
                </div>
              </div>
            </div>
          </div>
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
      <main className="bg-[#121d2f]">
        <Hero />
        <EmergencyBanner />
      </main>
    </Layout>
  )
}
