import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import avalancheMainPhoto from '~/images/rescue-specialties/avalanche-rescue/avalanche-main.jpg';
import avalancheScratchedWords from '~/images/rescue-specialties/avalanche-rescue/avalanche-scratched-words.png';
import reccoHeliPhoto from '~/images/rescue-specialties/avalanche-rescue/recco-heli.jpg';
import avalancheIcon from '~/images/rescue-specialties/avalanche.svg';
import avalancheTeamPhoto from '~/images/rescue-specialties/avalanche-rescue/avalanche-team.jpg';
import avalancheProbing from '~/images/rescue-specialties/avalanche-rescue/avalanche-probing.jpg';
import reccoHandheld from '~/images/rescue-specialties/avalanche-rescue/recco-handheld.jpg';
import reccoScratchedWords from '~/images/rescue-specialties/avalanche-rescue/recco-scratched-words.png';
import avalancheThree from '~/images/rescue-specialties/avalanche-rescue/avalanche-three.jpg';

export default function AvalancheRescuePage() {
  return (
    <Layout>
      <Seo templateTitle='Avalanche Rescue' />

      {/* =========================
                  SECTION 1
          ========================= */}
      <section className='w-full bg-black'>
        <div className='relative h-[58vh] min-h-[340px] w-full overflow-hidden sm:h-[64vh] md:h-[70vh] lg:h-[76vh]'>
          <Image
            src={avalancheMainPhoto}
            alt='Avalanche rescue'
            fill
            priority
            className='object-cover object-center'
            sizes='100vw'
          />

          <div className='pointer-events-none absolute bottom-[-1px] right-0 w-[74%] sm:bottom-[-2px] sm:w-[64%] md:bottom-[-2px] md:w-[54%] lg:bottom-[-3px] lg:w-[48%]'>
            <Image
              src={avalancheScratchedWords}
              alt='Avalanche Rescue'
              className='block h-auto w-full object-contain'
              sizes='(min-width: 1024px) 46vw, (min-width: 768px) 52vw, (min-width: 640px) 62vw, 72vw'
            />
          </div>
        </div>

        <div className='h-[8px] w-full bg-white' />
      </section>

      {/* =========================
              AVALANCHE INFO
          ========================= */}
      <section className='w-full'>
        <div className='grid w-full grid-cols-1 md:min-h-[760px] md:grid-cols-[1.35fr_8px_1.25fr] lg:min-h-[820px] xl:min-h-[900px]'>
          <div className='flex items-center justify-center bg-[#b2092d] px-6 py-12 sm:px-8 md:px-10 lg:px-12'>
            <div className='w-full max-w-[44ch] text-white'>
              <div className='mx-auto w-[140px] sm:w-[170px] md:w-[200px] lg:w-[230px]'>
                <Image
                  src={avalancheIcon}
                  alt='Avalanche'
                  className='h-auto w-full object-contain'
                />
              </div>

              <div className='h-10 sm:h-12 md:h-14' />

              <p className='text-left text-[15px] leading-[1.7] md:text-[16px] lg:text-[20px]'>
                Avalanche rescue skills are critical in snow-covered, steep
                terrain where snowpack instability may exist. As soon as snow
                accumulates and slopes become capable of sliding, all relevant
                team members maintain proficiency in avalanche awareness and
                rescue techniques to ensure safe and effective operations in
                avalanche terrain.
              </p>
              <br />
              <p className='mt-6 text-left text-[15px] leading-[1.7] md:text-[16px] lg:text-[20px]'>
                Lions Bay Search and Rescue maintains a dedicated team of CAA
                Level 2–qualified avalanche forecasters who evaluate terrain
                complexity, snowpack structure, and avalanche hazard as part of
                operational planning. Their assessments inform travel decisions,
                task assignments, and risk management strategies, helping ensure
                safe movement of personnel during winter operations.
              </p>
            </div>
          </div>

          <div className='hidden w-full bg-white md:block' />

          <div className='relative h-[320px] sm:h-[380px] md:h-auto'>
            <Image
              src={reccoHeliPhoto}
              alt='RECCO avalanche training'
              fill
              className='object-cover object-[50%_65%] md:object-center'
              sizes='(min-width: 1024px) 58vw, 100vw'
            />
          </div>
        </div>
      </section>
      <div className='h-[8px] w-full bg-white' />

      {/* =========================
            AVALANCHE TEAM PHOTO
          ========================= */}
      <section className='w-full bg-black'>
        <div className='relative h-[66vh] min-h-[480px] w-full overflow-hidden sm:h-[72vh] md:h-[78vh] lg:h-[80vh]'>
          <Image
            src={avalancheTeamPhoto}
            alt='Avalanche rescue team'
            fill
            className='object-cover object-[50%_75%]'
            sizes='100vw'
          />
        </div>

        <div className='h-[8px] w-full bg-white' />
      </section>

      {/* ======================
              2x2 GRID RECCO
          ====================== */}
      <section className='w-full bg-[#b2092d]'>
        <div
          className={[
            'grid w-full',
            'grid-cols-1',
            'md:grid-cols-2',
            'md:grid-rows-[minmax(560px,1fr)_minmax(720px,1fr)]',
            'md:min-h-[1280px] lg:min-h-[1460px] xl:min-h-[1680px]',
          ].join(' ')}
        >
          <div className='relative order-1 h-[380px] overflow-hidden sm:h-[460px] md:order-1 md:h-full'>
            <Image
              src={avalancheProbing}
              alt='Avalanche probing'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover object-[50%_65%] md:object-center'
            />
          </div>

          <div className='order-2 flex items-center justify-center bg-[#b2092d] px-10 pb-10 pt-10 text-white sm:pb-10 sm:pt-10 md:order-2 md:pt-0'>
            <div className='w-full max-w-[58ch]'>
              <p className='text-left text-[15px] leading-[1.8] md:text-[16px] lg:text-[20px]'>
                Our team follows industry-recognized training pathways aligned
                with the{' '}
                <span className='font-semibold'>
                  Canadian Avalanche Association (CAA)
                </span>{' '}
                and provincial SAR guidance. This includes Avalanche Skills
                Training (AST) Levels 1 and 2, CAA Avalanche Operations Level 1
                (CAA1), and advanced qualifications such as Operational
                Avalanche Rescue Technician Module (OARTM) and Operational
                Avalanche Rescue Team Leader (OARTL).
              </p>
              <br />
              <p className='mt-6 text-left text-[15px] leading-[1.8] md:text-[16px] lg:text-[20px]'>
                In addition to individual certifications, LBSAR trains in
                organized avalanche rescue (AvSAR) for complex and multi-burial
                incidents. These CAA-developed methods focus on coordinated team
                response, deep and close-proximity burials, structured probing
                strategies, and effective communication under high-risk
                conditions.
              </p>
            </div>
          </div>

          <div className='order-4 flex flex-col items-center justify-center bg-[#b2092d] px-10 pb-20 pt-14 text-white md:order-3 md:pb-28 md:pt-20 lg:pb-36 lg:pt-28 xl:pb-36'>
            <div className='w-full max-w-[520px]'>
              <Image
                src={reccoScratchedWords}
                alt='RECCO'
                width={1400}
                height={360}
                className='h-auto w-full object-contain'
              />
            </div>

            <div className='mt-12 w-full max-w-[58ch] text-left sm:mt-14 md:mt-12 lg:mt-12'>
              <p className='text-[15px] leading-[1.8] md:text-[16px] lg:text-[20px]'>
                Some outdoor clothing and equipment now include RECCO®
                reflectors, which can assist professional rescuers using
                specialized detectors. While helpful, RECCO reflectors are not a
                substitute for a beacon, shovel, and probe, and should not be
                relied upon as a primary safety system. RECCO is most often used
                as a secondary or recovery tool, particularly in organized
                searches, and should be considered a last line of assistance
                rather than a preventative measure.
              </p>
            </div>
          </div>

          <div className='relative order-3 h-[380px] overflow-hidden bg-[#b2092d] sm:h-[460px] md:order-4 md:h-full'>
            <Image
              src={reccoHandheld}
              alt='RECCO handheld detector'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover object-[50%_75%] md:object-center'
            />
          </div>
        </div>
      </section>

      <div className='h-[8px] w-full bg-white' />
      <div className='h-[8px] w-full bg-white' />

      {/* =========================
            THREE IMAGE SECTION
          ========================= */}
      <section className='w-full bg-black'>
        <div className='relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[620px]'>
          <Image
            src={avalancheThree}
            alt='Avalanche rescue operations'
            fill
            priority
            sizes='100vw'
            className='object-cover object-center'
          />
        </div>
      </section>

      <div className='h-[8px] w-full bg-white' />
      <div className='h-[8px] w-full bg-white' />

      {/* =========================
                SAFETY NOTE
          ========================= */}
      <section className='w-full bg-[#b2092d]'>
        <div className='mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-24 md:px-14 md:py-28 lg:py-32'>
          <p className='mx-auto max-w-[64ch] text-left text-[15px] leading-[1.8] text-white md:text-[16px] lg:text-[20px]'>
            For anyone travelling in avalanche terrain, proper personal safety
            equipment is essential. This includes carrying a functioning
            avalanche transceiver (beacon), shovel, and probe, and knowing how
            to use them effectively. Travelers should also routinely review the
            latest conditions and forecasts from{' '}
            <span className='font-semibold text-[#febd29]'>
              Avalanche Canada
            </span>{' '}
            before venturing out, and adjust plans based on current hazard,
            weather, and terrain.
          </p>
        </div>
      </section>
    </Layout>
  );
}
