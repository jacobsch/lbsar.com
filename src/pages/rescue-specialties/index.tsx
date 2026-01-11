import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import Image from 'next/image';
import rescue_mountain from '~/images/rescue-mountain.jpg';
import pick_axe from '~/images/pick-axe.svg';
import rope from '~/images/rope.svg';
import helicopter from '~/images/helicopter.svg';
import avalanche from '~/images/avalanche.svg';
import first_aid from '~/images/first-aid.svg';
import swiftwater from '~/images/swiftwater.svg';
import shoe from '~/images/shoe.svg';
import cave from '~/images/cave.svg';
import canyon from '~/images/canyon.svg';
import rescue_specialties_words from '~/images/rescue-specialties-scratched-words.png';

const BG = '#121d2f';
const CARD = '#333f4e';
const ACCENT = '#febd29';

type Specialty = {
  label: string;
  href: string;
  icon: ReactNode;
};

const PickAxeIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
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

const RopeIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
      WebkitMaskImage: `url(${rope.src})`,
      maskImage: `url(${rope.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
);

const HelicopterIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
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
);

const AvalancheIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
      WebkitMaskImage: `url(${avalanche.src})`,
      maskImage: `url(${avalanche.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
);

const FirstAidIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
      WebkitMaskImage: `url(${first_aid.src})`,
      maskImage: `url(${first_aid.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
);

const SwiftwaterIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
      WebkitMaskImage: `url(${swiftwater.src})`,
      maskImage: `url(${swiftwater.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
);

const ShoeIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
      WebkitMaskImage: `url(${shoe.src})`,
      maskImage: `url(${shoe.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
);

const CaveIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
      WebkitMaskImage: `url(${cave.src})`,
      maskImage: `url(${cave.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
);

const CanyoningIcon = () => (
  <span
    aria-hidden='true'
    className='block h-[120px] w-[120px] bg-current md:h-[150px] md:w-[150px]'
    style={{
      WebkitMaskImage: `url(${canyon.src})`,
      maskImage: `url(${canyon.src})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }}
  />
);

const specialties: Specialty[] = [
  {
    label: 'MOUNTAIN RESCUE',
    href: '/rescue-specialties/mountain-rescue',
    icon: <PickAxeIcon />,
  },
  {
    label: 'ROPE RESCUE',
    href: '/rescue-specialties/rope-rescue',
    icon: <RopeIcon />,
  },
  {
    label: 'HELICOPTER RESCUE',
    href: '/rescue-specialties/helicopter-rescue',
    icon: <HelicopterIcon />,
  },
  {
    label: 'AVALANCHE RESCUE',
    href: '/rescue-specialties/avalanche-rescue',
    icon: <AvalancheIcon />,
  },
  {
    label: 'FIRST AID',
    href: '/rescue-specialties/first-aid',
    icon: <FirstAidIcon />,
  },
  {
    label: 'SWIFTWATER RESCUE',
    href: '/rescue-specialties/swiftwater-rescue',
    icon: <SwiftwaterIcon />,
  },
  {
    label: 'GROUND SEARCH',
    href: '/rescue-specialties/ground-search',
    icon: <ShoeIcon />,
  },
  {
    label: 'CAVE RESCUE',
    href: '/rescue-specialties/cave-rescue',
    icon: <CaveIcon />,
  },
  {
    label: 'CANYONING',
    href: '/rescue-specialties/canyoning',
    icon: <CanyoningIcon />,
  },
];

function RescueSpecialtiesSection() {
  const router = useRouter();

  const accentStyle: React.CSSProperties & Record<string, string> = {
    '--accent': ACCENT,
  };

  return (
    <section
      style={{ backgroundColor: BG }}
      className='w-full pb-16 pt-20 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-32'
    >
      <div className='mx-auto w-full max-w-[1080px] px-5 sm:px-8'>
        <div className='mx-auto max-w-[860px] text-center text-white/90'>
          <p className='text-[15px] leading-relaxed sm:text-[16px] lg:text-[20px]'>
            Lions Bay Search and Rescue (LBSAR) is a volunteer-based emergency
            response team dedicated to supporting the public and partner
            agencies in times of need. Operating in one of the most rugged and
            varied landscapes in coastal British Columbia, our volunteers train
            year-round to safely and effectively respond to a wide range of
            search and rescue challenges.
          </p>
          <br />
          <p className='text-[15px] leading-relaxed sm:text-[16px] lg:text-[20px]'>
            Our rescue specialties include: Mountain Rescue, Rope Rescue,
            Swiftwater Rescue, Helicopter Rescue, Canyoning, Tracking, and more.
          </p>
          <br />
          <br />
          <br />
        </div>

        <div className='mt-8 grid grid-cols-1 place-items-center gap-[10px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[12px]'>
          {specialties.map((s) => {
            const isActive = router.pathname === s.href;

            return (
              <Link
                key={s.href}
                href={s.href}
                aria-label={s.label}
                className={[
                  'group relative flex aspect-square w-full max-w-[320px] items-center justify-center sm:max-w-none',
                  'overflow-hidden rounded-[8px]',
                  'border-2 transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                ].join(' ')}
                style={{
                  backgroundColor: CARD,
                  borderColor: isActive ? ACCENT : 'transparent',
                }}
              >
                <div className='flex h-full w-full flex-col px-3 pb-4 pt-4'>
                  {/* ICON wrapper controls hover/active yellow */}
                  <span
                    className={[
                      'flex flex-1 items-center justify-center transition-colors',
                      'text-white/95',
                      'group-hover:text-[var(--accent)]',
                      isActive ? 'text-[var(--accent)]' : '',
                    ].join(' ')}
                    style={accentStyle}
                  >
                    {s.icon}
                  </span>

                  <span
                    className={[
                      'mt-auto w-full',
                      // slightly smaller on mobile to avoid cut-off
                      'text-lg sm:text-xl md:text-2xl',
                      'font-semibold',
                      'tracking-[0.16em] sm:tracking-[0.18em]',
                      'text-center',
                      'leading-snug',
                      'break-words',
                      'transition-colors',
                      'text-white',
                      'group-hover:text-[var(--accent)]',
                      isActive ? 'text-[var(--accent)]' : '',
                    ].join(' ')}
                    style={accentStyle}
                  >
                    {s.label}
                  </span>
                </div>

                {/* hover border */}
                <span
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-0 border-2 opacity-0 transition-opacity group-hover:opacity-100'
                  style={{ borderColor: ACCENT }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen w-full' style={{ backgroundColor: BG }}>
      <Header />

      <main className='flex-1 pt-[72px] lg:pt-[80px]'>
        {/* ---------- HERO IMAGE ---------- */}
        <div className='relative aspect-[1.5/1] w-full sm:aspect-[2/1] lg:aspect-[2.75/1]'>
          <Image
            src={rescue_mountain}
            alt='Mountain Rescue'
            fill
            priority
            sizes='100vw'
            className='object-cover'
          />

          {/* Bottom-centered scratched words overlay */}
          <div className='pointer-events-none absolute inset-x-0 bottom-[-46px] flex justify-center sm:bottom-[-61px] lg:bottom-[-80px]'>
            <Image
              src={rescue_specialties_words}
              alt='Rescue Specialties'
              className='h-auto w-[320px] sm:w-[420px] lg:w-[550px]'
            />
          </div>
        </div>

        {children}
        <RescueSpecialtiesSection />
      </main>

      <Footer />
    </div>
  );
}
