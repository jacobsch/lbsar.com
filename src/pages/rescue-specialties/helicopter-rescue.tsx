import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import helicopterRescuePhoto from '~/images/hets-rescue.jpg';
import helicopterRescueWords from '~/images/helicopter-rescue-scratched-words.png';
import brentTalonPhoto from '~/images/brent-talon.jpg';
import longLinePhoto from '~/images/long-line.jpg';

import helicopter from '~/images/helicopter.svg';

export default function HelicopterRescuePage() {
  return (
    <Layout>
      <Seo templateTitle='Helicopter Rescue' />

      <section className='relative w-full'>
        <div className='relative h-[62vh] w-full overflow-hidden sm:h-[68vh] md:h-[72vh] lg:h-[78vh]'>
          <Image
            src={helicopterRescuePhoto}
            alt='Helicopter rescue operation'
            fill
            priority
            sizes='100vw'
            className='object-cover object-center'
          />

          <div className='pointer-events-none absolute bottom-[-3px] left-[0px]'>
            <Image
              src={helicopterRescueWords}
              alt='Helicopter Rescue'
              className='block h-auto w-[90vw] object-contain sm:w-[75vw] md:w-[60vw] lg:w-[55vw]'
            />
          </div>
        </div>
      </section>

      <div className='h-[8px] w-full bg-white' />

      {/* =========================
            HELICOPTER OPERATIONS
          ========================= */}
      <section className='w-full bg-[#151f2f]'>
        <div
          className='mx-auto flex max-w-7xl items-center gap-14 px-6 py-10
                  sm:gap-20 sm:px-8
                  md:gap-28 md:py-14
                  lg:gap-36 lg:px-12'
        >
          <span
            aria-hidden='true'
            className='inline-block h-[88px]
        w-[88px] flex-shrink-0
        sm:h-[110px] sm:w-[110px]
        md:h-[135px] md:w-[135px]
        lg:h-[150px] lg:w-[150px]'
            style={{
              backgroundColor: '#febd29',
              WebkitMaskImage: `url(${helicopter.src})`,
              maskImage: `url(${helicopter.src})`,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
            }}
          />

          <p className='max-w-[70ch] text-left text-[15px] leading-[1.7] text-white sm:text-[16px] lg:text-[20px]'>
            Helicopter operations are a critical component of search and rescue
            response in steep, remote, and time-sensitive environments. Lions
            Bay Search and Rescue trains with partner agencies, NSR and Talon,
            in helicopter-supported operations to enable rapid access to
            patients and the delivery of urgent medical care when ground access
            is limited or impractical.
          </p>
        </div>
      </section>

      {/* =========================
              HELICOPTER ACCESS
          ========================= */}
      <section className='w-full'>
        <div className='grid grid-cols-1 min-[944px]:h-[85vh] min-[944px]:grid-cols-[1fr_560px]'>
          {/* LEFT (yellow text) */}
          <div
            className='flex items-center justify-center bg-[#febd29]
              px-6 py-12
              min-[600px]:px-10
              min-[944px]:h-full min-[944px]:px-14 min-[1280px]:px-20'
          >
            <div className='max-w-[65ch] text-left'>
              <p
                className='mb-6 text-[15px] leading-[1.7] text-black
                  min-[970px]:text-[16px]
                  min-[1088px]:text-[20px]'
              >
                Our team maintains proficiency in Human External Transport (HET)
                techniques, including hover entry and exit, hoist (winch)
                operations, and long-line extractions, conducted in coordination
                with trained aircrew and partner SAR teams. These methods allow
                rescuers to be safely inserted into terrain where aircraft
                cannot land and to extract subjects from complex or inaccessible
                locations.
              </p>

              <p
                className='text-[15px] leading-[1.7] text-black
                  min-[970px]:text-[16px]
                  min-[1088px]:text-[20px]'
              >
                Due to the steep coastal terrain within our response area,&nbsp;
                <strong>helicopter access is often essential.</strong> Without
                aerial support, reaching a subject on foot from sea level can
                require three to five hours or more, significantly delaying
                patient care. Hover entry and exit capabilities reduce response
                times, limit responder exposure, and improve operational safety.
              </p>
            </div>
          </div>

          {/* RIGHT (photo) with a border divider */}
          <div className='relative min-h-[52vh] overflow-hidden bg-black min-[944px]:h-full min-[944px]:border-l-[8px] min-[944px]:border-white'>
            <Image
              src={brentTalonPhoto}
              alt='Helicopter rescue with long-line extraction'
              fill
              priority
              sizes='(min-width: 944px) 560px, 100vw'
              className='object-cover object-right'
            />
          </div>
        </div>
      </section>

      <div className='h-[8px] w-full bg-white' />

      {/* =========================
            LONG-LINE OPERATIONS
          ========================= */}
      <section className='w-full bg-[#febd29]'>
        {/* ORDER CONTROLLER */}
        <div className='flex flex-col min-[944px]:flex-col-reverse'>
          {/* TEXT */}
          <div
            className='
            mx-auto w-full px-4 pb-4 pt-10 min-[500px]:pb-1 min-[556px]:pb-6
            min-[577px]:pb-10
            sm:px-6

            sm:pt-10 min-[645px]:pb-6
            md:px-10 md:pt-10
            min-[944px]:px-10 min-[944px]:py-20
            lg:px-14 lg:py-16'
          >
            <div className='mx-auto max-w-[92ch] text-left'>
              <p
                className='text-[15px] leading-[1.7] text-black
                  min-[970px]:text-[16px]
                  min-[1088px]:text-[20px]'
              >
                Through our close partnership with North Shore Rescue (NSR),
                LBSAR is able to support both{' '}
                <strong>daytime and nighttime helicopter operations.</strong>{' '}
                NSR’s specialized night-operations program expands response
                capability during low-light conditions, allowing critical
                rescues to proceed safely when time and terrain make ground
                access or daylight-only operations impractical.
              </p>
            </div>
          </div>

          {/* PHOTO */}
          <div
            className='relative h-[46vh] w-full
    overflow-hidden sm:h-[50vh] md:h-[54vh]
    min-[944px]:mx-auto min-[944px]:mt-6
    min-[944px]:h-[56vh]
    min-[944px]:max-w-7xl min-[944px]:px-6
    min-[944px]:pt-6 lg:h-[60vh]'
          >
            <Image
              src={longLinePhoto}
              alt='Helicopter long-line operation'
              fill
              priority
              sizes='100vw'
              unoptimized
              className='object-contain object-center max-[576px]:object-bottom'
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
