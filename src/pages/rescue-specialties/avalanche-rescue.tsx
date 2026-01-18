import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import avalancheMainPhoto from '~/images/avalanche-main.jpg';
import avalancheScratchedWords from '~/images/avalanche-scratched-words.png';

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
    </Layout>
  );
}
