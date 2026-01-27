import type { CSSProperties } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import VolunteerStats from '@/components/VolunteerStats';

import teamphoto from '~/images/about/teamphoto.svg';
import lbsarScratchedWords from '~/images//home/lbsar-scratched-words.png';
import team2026ScratchedWords from '~/images/about/team-2026-scratched-words.png';
import lbsarLogo from '~/images/lbsar-logo.png';
import generalStore from '~/images/about/general-store.svg';
import historyScratchedWords from '~/images/about/history-scratched-words.png';
import beachTriangles from '~/images/about/beach-triangles.png';
import lionsBayBeach from '~/images/about/lions-bay-beach.svg';
import scratched1982 from '~/images/about/1982-scratched-words.png';
import mudSlideCbc from '~/images/about/mud-slide-cbc.svg';
import marcelTriangles from '~/images/about/marcel-triangles.png';
import marcelPhoto from '~/images/about/marcel-photo.svg';
import marcelScratchedWords from '~/images/about/marcel-scratched-words.png';
import andrie1983ScratchedWords from '~/images/about/1983-andrie-scratched-words.png';
import base1992ScratchedWords from '~/images/about/1992-base-scratched-words.png';
import basePhoto from '~/images/about/base.svg';
import landslide2024Title from '~/images/about/2024-landslide-scratched-words.png';
import landslide2 from '~/images/about/landslide-2.svg';
import landslide1 from '~/images/about/landslide-1.svg';

const SCRATCH_TOP = {
  mobile: '91%',
  sm: '90%',
  md: '93%',
  lg: '96%',
} as const;

export default function AboutUsPage() {
  return (
    <Layout>
      <Seo templateTitle='About Us' />

      <div className='min-h-screen w-full'>
        <section className='relative w-full bg-[#121d2f]'>
          <div className='relative aspect-[3/1] w-full'>
            <Image
              src={teamphoto}
              alt='LBSAR Team Photo'
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
                } as CSSProperties
              }
            >
              <div className='flex flex-col items-center gap-2 sm:gap-5 lg:gap-6'>
                <Image
                  src={lbsarScratchedWords}
                  alt=''
                  width={420}
                  height={120}
                  sizes='(max-width: 639px) 200px, (max-width: 1023px) 300px, 460px'
                  className='h-auto w-[180px] sm:w-[300px] lg:w-[400px]'
                />

                <Image
                  src={team2026ScratchedWords}
                  alt=''
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
          <div className='font-primary flex w-full justify-center bg-[#121d2f] text-white'>
            <div
              className='
                mx-auto flex w-full max-w-[1320px]
                flex-col items-center gap-6
                px-6 pb-16 pt-[60px]
                text-center
                sm:flex-row sm:justify-center sm:gap-8 sm:px-8 sm:pb-20 sm:pt-24 sm:text-left
                lg:px-12 lg:pb-24 lg:pt-28
              '
            >
              <div className='shrink-0'>
                <Image
                  src={lbsarLogo}
                  alt='Lions Bay Search and Rescue Society Logo'
                  width={180}
                  height={180}
                  sizes='(max-width: 639px) 110px, 160px'
                  className='h-auto w-[110px] sm:w-[140px] lg:w-[170px]'
                />
              </div>

              <p className='max-w-[820px] pt-[19px] text-[15px] leading-6 text-white/90 sm:text-[16px] sm:leading-7 lg:text-[20px]'>
                LBSAR is over 40 members strong, and in 2025 the team responded
                to a record 35 calls, reflecting both the growing use of the
                backcountry and the ongoing need for highly trained professional
                volunteers in natural disasters like flooding and landslides.
              </p>
            </div>
          </div>
        </section>

        <VolunteerStats />

        <section className='w-full bg-[#66051b]'>
          <div className='mx-auto flex max-w-[1600px] justify-center px-4 py-8 sm:px-6 sm:py-10 lg:py-12'>
            <Image
              src={generalStore}
              alt='Lions Bay General Store'
              width={1400}
              height={620}
              sizes='(max-width: 640px) 92vw, (max-width: 1024px) 900px, 980px'
              className='h-auto w-full max-w-[980px] object-contain lg:max-w-[900px] xl:max-w-[860px]'
            />
          </div>

          <div className='font-primary flex flex-col items-center gap-4 px-6 pb-8 text-center text-white'>
            <Image
              src={historyScratchedWords}
              alt=''
              width={420}
              height={120}
              sizes='(max-width: 640px) 200px, 360px'
              className='h-auto w-[180px] sm:w-[240px] lg:w-[280px]'
            />

            <p className='max-w-[900px] text-[15px] leading-6 sm:text-[16px] sm:leading-7 lg:text-[20px]'>
              The Lions Bay General Store located at 350 Centre Road Lions Bay,
              BC V0N 2E0 Canada
            </p>
          </div>
        </section>

        <section className='relative w-full overflow-hidden'>
          <Image
            src={beachTriangles}
            alt=''
            aria-hidden
            width={800}
            height={800}
            className='
              pointer-events-none
              absolute left-0
              top-[50px] z-[999]
              hidden
              w-[220px]
              sm:top-[80px]
              sm:w-[300px] lg:top-[140px]
              lg:w-[380px] xl:top-[18px]
              xl:w-[480px] min-[1700px]:block
            '
          />

          {/* ----------------- RED INFO BOX ----------------- */}
          <div className='font-primary relative z-10 w-full bg-[#b2092d] text-white'>
            <div
              className='
                mx-auto grid max-w-[1320px]
                grid-cols-1 gap-6
                px-6 py-10
                text-[16px] leading-6
                sm:grid-cols-2 sm:gap-10 sm:text-[15px] sm:leading-7
                lg:px-12 lg:py-14 lg:text-[20px]
              '
            >
              <p>
                Lions Bay is a small oceanside village on the eastern shore of
                Howe Sound, located along the Sea-to-Sky Highway about 25 km
                northwest of downtown Vancouver. Framed by steep coastal
                mountains and ocean beaches, it is one of the Lower Mainland’s
                most scenic—and geographically constrained— communities.
              </p>

              <p>
                With a population of roughly 3,000 residents, Lions Bay has a
                strong sense of community and a deep connection to the outdoors.
                The village has a quaint general store, a fire hall with
                ambulance service, an elementary school, and sits at the base of
                several popular backcountry hiking routes and alpine objectives.
              </p>
            </div>
          </div>

          {/* ----------------- BEACH IMAGE ----------------- */}
          <div className='relative z-10 w-full bg-[#121d2f]'>
            <div className='mx-auto flex max-w-[1400px] justify-center px-4 py-8 sm:px-6 sm:py-10 lg:py-12'>
              <Image
                src={lionsBayBeach}
                alt='Lions Bay Beach'
                width={1400}
                height={600}
                sizes='(max-width: 640px) 88vw, (max-width: 1280px) 900px, 1100px'
                className='h-auto w-full max-w-[1100px] object-contain lg:max-w-[900px] xl:max-w-[860px]'
              />
            </div>
          </div>
        </section>

        {/* ----------------- BROWN HISTORY BOX ----------------- */}
        <section className='w-full bg-[#403218]'>
          <div
            className='
            sm:py-15 lg:py-17 font-primary
            mx-auto flex
            max-w-[1400px]
            flex-col items-center
            gap-6
            px-6
            py-11
            text-center text-white
            sm:gap-8 lg:gap-9
          '
          >
            <div className='flex w-full justify-center'>
              <Image
                src={scratched1982}
                alt=''
                width={480}
                height={140}
                sizes='(max-width: 640px) 200px, (max-width: 1024px) 340px, 440px'
                className='h-auto w-[180px] sm:w-[300px] lg:w-[400px] xl:w-[440px]'
              />
            </div>

            <p className='max-w-[940px] text-[15px] leading-6 text-white/90 sm:text-[15px] sm:leading-7 lg:text-[20px] lg:leading-8'>
              Over the years, as recreation in the surrounding backcountry
              increased, so did the need for organized assistance when people
              became lost or injured. In the early years, local residents often
              came together informally to support rescue efforts.
            </p>

            <Image
              src={mudSlideCbc}
              alt='Lions Bay Mudslide'
              aria-hidden
              width={760}
              height={620}
              sizes='(max-width: 640px) 84vw, (max-width: 1024px) 540px, 720px'
              className='h-auto w-[84vw] max-w-[400px] sm:max-w-[540px] lg:max-w-[720px]'
            />

            <p className='max-w-[940px] text-[16px] leading-6 text-white/90 sm:text-[15px] sm:leading-7 lg:text-[20px] lg:leading-8'>
              In 1982, a devastating flood along Alberta Creek caused
              significant damage within the village and tragically claimed the
              lives of two young residents. The scale of the response
              highlighted the need for a dedicated emergency organization,
              leading to the formation of Lions Bay Search and Rescue in 1983.
            </p>
          </div>
        </section>

        {/* ----------------- MARCEL ANDRIE FEATURE ----------------- */}
        <section className='relative w-full overflow-hidden'>
          <div className='relative h-[140px] bg-white sm:h-[170px] lg:h-[325px]'>
            <Image
              src={marcelTriangles}
              alt=''
              aria-hidden
              width={520}
              height={520}
              className='
                pointer-events-none
                absolute left-0 top-0
                w-[170px]
                sm:w-[202px]
                lg:w-[390px]
                xl:w-[390px]
              '
            />

            <div className='absolute inset-x-0 bottom-0 z-20 flex justify-center'>
              <Image
                src={marcelPhoto}
                alt='Marcel Andrie'
                width={260}
                height={260}
                className='
                  h-[150px] w-[150px]
                  translate-y-[3%]

                  rounded-full object-cover
                  sm:h-[200px]

                  sm:w-[200px] sm:translate-y-[16%]
                  min-[801px]:h-[260px]

                  min-[801px]:w-[260px] min-[801px]:translate-y-[45%]
                  lg:h-[400px]

                  lg:w-[400px] lg:translate-y-[45%]
                '
              />
            </div>
          </div>

          {/* ---------- RED BODY ---------- */}
          <div className='font-primary relative bg-[#b2092d] text-white'>
            <div
              className='
                mx-auto max-w-[1320px]
                px-6 pb-16 pt-16
                sm:px-8 sm:pb-20 sm:pt-10
                lg:px-12 lg:pb-24
              '
            >
              <div className='lg:-mt-19 -mt-10 mb-6 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 sm:text-left'>
                <div
                  className='
                    flex -translate-y-6
                    justify-center
                    max-[800px]:hidden

                    sm:-translate-y-[40px]
                    sm:justify-start

                    min-[1081px]:-translate-y-[50px]
                  '
                >
                  <Image
                    src={marcelScratchedWords}
                    alt=''
                    width={420}
                    height={120}
                    sizes='(max-width: 639px) 180px, (max-width: 1023px) 240px, 280px'
                    className='
                      h-auto w-[170px]
                      object-contain
                      sm:w-[220px]
                      min-[1081px]:w-[300px]
                    '
                  />
                </div>

                <div className='relative z-30 flex -translate-y-2 justify-center max-[800px]:hidden sm:-translate-y-[94px] sm:justify-end min-[1081px]:-translate-y-[117.5px]'>
                  <Image
                    src={andrie1983ScratchedWords}
                    alt=''
                    width={420}
                    height={120}
                    sizes='(max-width: 639px) 200px, (max-width: 1023px) 260px, 320px'
                    className='h-auto w-[190px] object-contain sm:w-[240px] min-[1081px]:w-[300px]'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 gap-8 text-[16px] leading-6 sm:grid-cols-2 sm:gap-12 sm:text-[15px] sm:leading-7 lg:text-[20px]'>
                <p>
                  LBSAR was founded by local mountaineers, outdoor enthusiasts,
                  and members of the UBC Varsity Outdoors Club, under the
                  leadership of Marcel Andrie.
                  <br />
                  <br />
                  Marcel Andrie immigrated to Canada from Switzerland. He was a
                  founding member of Lions Bay Search and Rescue in the basement
                  of his home in Lions Bay. Early call outs were supported by
                  his wife Heidi in the kitchen making chilli, and his daughter
                  Nadine running phone messages.
                  <br />
                  <br />
                  On April 30, 1994, while on a GSAR training trip in
                  Tetrahedron Park with two other GSAR members and a family
                  friend, Marcel suffered a cardiac arrest and died. He was 59.
                </p>

                <p>
                  A bridge was built in his name crossing Harvey Creek on the
                  way to the Lions. This tribute is especially fitting as GSAR
                  members found crossing the creek in that location while
                  carrying equipment or an injured subject particularly
                  difficult.
                  <br />
                  <br />
                  Marcel was happy to construct solutions to challenges found in
                  the field of GSAR. He rigged up and tested out quite a few
                  systems to move patients more smoothly and safely down the
                  mountain. He was invitational in his leadership and instigated
                  many a fun training weekend adventures. He was remarkable at
                  finding roles for anyone who wanted to help out on the team.
                  His ice axe still hangs on the wall in memory of his
                  commitment to SAR.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- 1992 BASE ----------------- */}
        <section className='w-full'>
          <div className='font-primary w-full bg-[#121d2f] text-white'>
            <div
              className='
                mx-auto grid w-full max-w-[1320px]
                grid-cols-1 gap-8
                px-6 py-12
                sm:px-8 sm:py-14
                lg:grid-cols-[420px_1fr] lg:gap-12 lg:px-12 lg:py-20
              '
            >
              <div className='flex w-full justify-center lg:justify-start lg:pr-20'>
                <Image
                  src={base1992ScratchedWords}
                  alt=''
                  width={520}
                  height={220}
                  sizes='(max-width: 640px) 220px, (max-width: 1024px) 300px, 420px'
                  className='h-auto w-[220px] object-contain sm:w-[280px] md:w-[320px] lg:w-[420px]'
                />
              </div>

              <div className='flex items-center lg:pl-20'>
                <p className='max-w-[860px] text-[15px] leading-6 text-white/90 sm:text-[16px] sm:leading-7 lg:text-[20px] lg:leading-8'>
                  As the team grew, LBSAR expanded its technical capabilities
                  and operational reach. Early involvement in rigging work for
                  Expo 86 helped the team develop a strong foundation in
                  technical rope rescue, a capability that remains central
                  today. By the late 1980s, LBSAR was regularly working
                  alongside neighbouring teams such as Squamish and North Shore
                  Rescue in mutual aid responses.
                  <br />
                  <br />
                  In 1992, the team established a permanent base in the Village
                  Emergency Building, sharing facilities with the Fire
                  Department and BC Ambulance Service.
                </p>
              </div>
            </div>
          </div>

          <div className='relative w-full bg-[#121d2f] pb-8 sm:pb-10 lg:pb-14'>
            <div className='relative mx-auto w-full max-w-[1400px]'>
              <Image
                src={basePhoto}
                alt='Lions Bay Fire Hall and LBSAR Base'
                width={1600}
                height={900}
                sizes='100vw'
                className='h-auto w-full object-cover'
              />

              <div className='font-primary absolute inset-x-0 bottom-0 bg-black/60'>
                <div className='mx-auto w-full max-w-[1600px] px-6 py-3'>
                  <p className='text-[12px] leading-5 text-white/90 sm:text-[13px]'>
                    Lions Bay Fire Hall, Ambulance, and LBSAR, 400 Centre Rd,
                    Lions Bay, BC V0N 2E0, Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- 2024 LANDSLIDE ----------------- */}
        <section className='font-primary w-full bg-[#403218] text-white'>
          <div className='mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20'>
            <div className='mb-8 sm:mb-10 lg:-ml-32 lg:mb-12'>
              <Image
                src={landslide2024Title}
                alt=''
                width={900}
                height={180}
                sizes='(max-width: 640px) 280px, (max-width: 1024px) 520px, 760px'
                className='h-auto w-[280px] sm:w-[520px] lg:w-[760px]'
              />
            </div>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-20'>
              <div className='lg:col-span-8 lg:-ml-32'>
                <Image
                  src={landslide2}
                  alt='Lions Bay Landslide'
                  width={1200}
                  height={700}
                  sizes='(max-width: 1024px) 100vw, 960px'
                  className='h-auto w-full object-cover'
                />
              </div>

              <div className='flex items-center lg:col-span-4 lg:pl-6'>
                <div className='space-y-6 text-[15px] leading-6 text-white/90 sm:text-[16px] sm:leading-7 lg:text-[20px] lg:leading-8'>
                  <p>
                    The community of Lions Bay continues to face environmental
                    challenges tied to extreme weather events and flooding.
                  </p>

                  <p>
                    On December 14, 2024, another tragic landslide in Battani
                    Creek took the lives of two beloved community members and
                    served as a stark reminder of the teams’ foundation.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-10 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-20'>
              <div className='order-2 flex items-center lg:order-1 lg:col-span-4 lg:pr-6'>
                <div className='space-y-6 text-[15px] leading-6 text-white/90 sm:text-[16px] sm:leading-7 lg:text-[20px] lg:leading-8'>
                  <p>
                    LBSAR continues to support its community and responds to the
                    ever increasing flood risks around the lower mainland,
                    including most recently in supporting evacuations in
                    Chilliwack on Dec 14, 2025.
                  </p>

                  <p>
                    We continued to adapt, train, and prepare to respond to a
                    broad range of emergencies and natural disasters,
                    strengthening collaboration with regional partners and
                    supporting both local and mutual-aid callouts.
                  </p>
                </div>
              </div>

              <div className='order-1 lg:order-2 lg:col-span-8 lg:-mr-32'>
                <Image
                  src={landslide1}
                  alt='Lions Bay Landslide'
                  width={1200}
                  height={700}
                  sizes='(max-width: 1024px) 100vw, 960px'
                  className='h-auto w-full object-cover'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
