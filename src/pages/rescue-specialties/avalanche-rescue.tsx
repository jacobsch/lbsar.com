import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import avalancheMainPhoto from '~/images/avalanche-main.jpg';
import avalancheScratchedWords from '~/images/avalanche-scratched-words.png';
import reccoHeliPhoto from '~/images/recco-heli.jpg';
import avalancheIcon from '~/images/avalanche.svg';

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
    </Layout>
  );
}
