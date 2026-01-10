import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { List, Menu, ChevronDown } from 'react-feather';
import { useRouter } from 'next/router';
import UnderlineLink from '@/components/ui/links/UnderlineLink';

const HEADER_BG = '#151f2f';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/rescue-specialties', label: 'Rescue Specialties' },
  { href: '/faq', label: 'FAQ' },
  { href: '/trails', label: 'Trails' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/education', label: 'Education' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact-us', label: 'Contact Us' },
] as const;

const rescueSpecialtiesPages = [
  { href: '/rescue-specialties/mountain-rescue', label: 'Mountain Rescue' },
  { href: '/rescue-specialties/rope-rescue', label: 'Rope Rescue' },
  { href: '/rescue-specialties/helicopter-rescue', label: 'Helicopter Rescue' },
  { href: '/rescue-specialties/avalanche-rescue', label: 'Avalanche Rescue' },
  { href: '/rescue-specialties/first-aid', label: 'First Aid' },
  { href: '/rescue-specialties/swiftwater-rescue', label: 'Swiftwater Rescue' },
  { href: '/rescue-specialties/ground-search', label: 'Ground Search' },
  { href: '/rescue-specialties/cave-rescue', label: 'Cave Rescue' },
  { href: '/rescue-specialties/canyoning', label: 'Canyoning' },
] as const;

const DonateButton = () => (
  <a
    href='https://www.canadahelps.org/en/dn/9468'
    target='_blank'
    rel='noreferrer'
    className='
      font-chakra inline-flex items-center
      justify-center
      whitespace-nowrap
      rounded-xl bg-[#fc6421]
      px-12 py-2.5 text-[20px]
      font-bold uppercase
      leading-none
      tracking-[0.22em]
      text-white
      shadow-[0_10px_28px_rgba(0,0,0,0.28)]
      transition-colors
      hover:bg-[#c94a18]
    '
  >
    DONATE
  </a>
);

function useActiveHref() {
  const { asPath } = useRouter();

  return (href: string) => {
    const path = asPath.split('?')[0].split('#')[0];
    const target = href.split('?')[0].split('#')[0];

    if (target === '/') return path === '/';
    return path === target || path.startsWith(target + '/');
  };
}

const HeaderItem = ({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) => {
  return (
    <UnderlineLink
      href={href}
      onClick={onClick}
      underlineMobileOnly
      className={[
        'navbar-link',
        'font-chakra uppercase',
        'text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]',
        'tracking-[0.14em]',
        isActive
          ? 'font-bold text-orange-400'
          : 'font-normal text-white/90 hover:text-white',
        'whitespace-nowrap transition-colors',
        'inline-flex items-center justify-center',
      ].join(' ')}
    >
      {label.toUpperCase()}
    </UnderlineLink>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActiveHref = useActiveHref();
  const router = useRouter();

  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const closeEverything = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const closeAllDropdowns = () => setOpenDropdown(null);

  const scheduleCloseDropdown = (delayMs = 280) => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
      closeTimerRef.current = null;
    }, delayMs);
  };

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown((cur) => (cur === key ? null : key));
  };

  const rescueKey = 'rescue-specialties';

  const rescueIsActive = useMemo(() => {
    const path = router.asPath.split('?')[0].split('#')[0];
    if (
      path === '/rescue-specialties' ||
      path.startsWith('/rescue-specialties/')
    )
      return true;

    return rescueSpecialtiesPages.some(({ href }) => path === href);
  }, [router.asPath]);

  // close on route change
  useEffect(() => {
    router.events?.on('routeChangeStart', closeEverything);
    return () => router.events?.off('routeChangeStart', closeEverything);
  }, [router.events]);

  // ✅ close on click/tap outside
  useEffect(() => {
    const onDocDown = (e: MouseEvent | TouchEvent) => {
      if (!isOpen && !openDropdown) return;

      const el = headerRef.current;
      if (!el) return;

      if (e.target instanceof Node && !el.contains(e.target)) {
        closeEverything();
      }
    };

    document.addEventListener('mousedown', onDocDown);
    document.addEventListener('touchstart', onDocDown);

    return () => {
      document.removeEventListener('mousedown', onDocDown);
      document.removeEventListener('touchstart', onDocDown);
    };
  }, [isOpen, openDropdown]);

  // ✅ close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeEverything();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      ref={headerRef}
      className='fixed left-0 right-0 top-0 z-[9999]'
      style={{
        backgroundColor: HEADER_BG,
        width: '100vw',
        maxWidth: 'none',
        margin: 0,
      }}
    >
      <nav className='relative flex w-full items-center justify-between py-4 pl-4 pr-1 lg:px-8 lg:py-5'>
        <div className='flex items-center gap-4'>
          <div className='min-[1450px]:hidden'>
            <button
              onClick={toggleMenu}
              className='rounded-md p-2 text-white transition-colors hover:bg-white/10'
              aria-label='Toggle navigation menu'
              aria-expanded={isOpen}
            >
              {isOpen ? <List /> : <Menu />}
            </button>
          </div>

          <ul className='hidden items-center gap-10 min-[1450px]:flex'></ul>

          <ul className='hidden items-center gap-8 min-[1450px]:flex'>
            <li className='flex items-center'>
              <Link
                href='/'
                aria-label='Go to Home'
                className='opacity-90 transition-opacity duration-150 hover:opacity-100'
              >
                <Image
                  src='/images/header-logo.png'
                  alt='Header Logo'
                  width={48}
                  height={48}
                  priority
                  className='h-10 w-auto'
                />
              </Link>
            </li>

            {links.map(({ href, label }) => {
              if (href === '/rescue-specialties') {
                const isOpenDrop = openDropdown === rescueKey;

                return (
                  <li
                    key={href}
                    className='relative mx-[-6px]'
                    onMouseEnter={() => {
                      cancelScheduledClose();
                      setOpenDropdown(rescueKey);
                    }}
                    onMouseLeave={() => scheduleCloseDropdown(320)}
                  >
                    <div className='inline-flex items-center gap-0.5'>
                      <UnderlineLink
                        href='/rescue-specialties'
                        underlineMobileOnly
                        className={[
                          'navbar-link',
                          'font-chakra uppercase',
                          'pr-1',
                          'text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]',
                          'tracking-[0.14em]',
                          rescueIsActive
                            ? 'font-bold text-orange-400'
                            : 'font-normal text-white/90 hover:text-white',
                          'whitespace-nowrap transition-colors',
                          'inline-flex items-center justify-center',
                        ].join(' ')}
                      >
                        {label.toUpperCase()}
                      </UnderlineLink>

                      <button
                        type='button'
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleDropdown(rescueKey);
                        }}
                        onMouseEnter={cancelScheduledClose}
                        aria-label='Toggle Rescue Specialties dropdown'
                        aria-haspopup='menu'
                        aria-expanded={isOpenDrop}
                        className='rounded-md p-0.5 text-white/90 transition-colors hover:bg-white/10 hover:text-white'
                      >
                        <ChevronDown
                          className={[
                            'h-4 w-4 transition-transform duration-150',
                            isOpenDrop ? 'rotate-180' : '',
                          ].join(' ')}
                        />
                      </button>
                    </div>

                    {isOpenDrop && (
                      <div
                        role='menu'
                        aria-label='Rescue Specialties'
                        onMouseEnter={cancelScheduledClose}
                        onMouseLeave={() => scheduleCloseDropdown(260)}
                        className={[
                          'absolute top-full z-[9999]',
                          'left-1/2 -translate-x-1/2',
                          'mt-1',
                          'min-w-[260px]',
                          'rounded-2xl border border-white/10',
                          'shadow-[0_18px_45px_rgba(0,0,0,0.35)]',
                          'py-2',
                        ].join(' ')}
                        style={{
                          backgroundColor: 'rgba(21,31,47,0.92)',
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        <ul className='flex flex-col items-stretch text-center'>
                          {rescueSpecialtiesPages.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={closeAllDropdowns}
                                className={[
                                  'font-chakra uppercase',
                                  'tracking-[0.14em]',
                                  'text-[13px] sm:text-[14px] md:text-[14px]',
                                  'block px-4 py-2',
                                  isActiveHref(item.href)
                                    ? 'font-bold text-orange-400'
                                    : 'font-normal text-white/90 hover:text-white',
                                  'transition-colors',
                                ].join(' ')}
                              >
                                {item.label.toUpperCase()}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={href}>
                  <HeaderItem
                    href={href}
                    label={label}
                    isActive={isActiveHref(href)}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className='flex shrink-0 items-center gap-3 pr-5 lg:pr-1 min-[1450px]:pr-0'>
          <DonateButton />
        </div>

        {isOpen && (
          <ul
            className='absolute left-0 right-0 top-full z-[9999] w-full border-t border-white/10 py-3 min-[1450px]:hidden'
            style={{ backgroundColor: HEADER_BG }}
          >
            {links.map(({ href, label }) => {
              if (href === '/rescue-specialties') {
                const isOpenDrop = openDropdown === rescueKey;

                return (
                  <li key={href} className='py-1 text-center'>
                    <div className='flex items-center justify-center'>
                      <div className='inline-flex translate-x-[6px] items-center gap-1'>
                        <HeaderItem
                          href='/rescue-specialties'
                          label={label}
                          isActive={rescueIsActive}
                          onClick={() => {
                            closeAllDropdowns();
                            closeMenu();
                          }}
                        />

                        <button
                          type='button'
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown(rescueKey);
                          }}
                          aria-label='Toggle Rescue Specialties dropdown'
                          aria-haspopup='menu'
                          aria-expanded={isOpenDrop}
                          className='rounded-md p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white'
                        >
                          <ChevronDown
                            className={[
                              'h-4 w-4 transition-transform duration-150',
                              isOpenDrop ? 'rotate-180' : '',
                            ].join(' ')}
                          />
                        </button>
                      </div>
                    </div>

                    {isOpenDrop && (
                      <div
                        className='mx-auto mt-2 w-[78%] max-w-[360px] rounded-2xl border border-white/10 py-2'
                        style={{
                          backgroundColor: 'rgba(21,31,47,0.92)',
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        <ul className='flex flex-col items-stretch text-center'>
                          {rescueSpecialtiesPages.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => {
                                  closeAllDropdowns();
                                  closeMenu();
                                }}
                                className={[
                                  'font-chakra uppercase',
                                  'tracking-[0.14em]',
                                  'text-[13px] sm:text-[14px]',
                                  'block px-2 py-2',
                                  isActiveHref(item.href)
                                    ? 'font-bold text-orange-400'
                                    : 'font-normal text-white/90 hover:text-white',
                                  'transition-colors',
                                ].join(' ')}
                              >
                                {item.label.toUpperCase()}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={href} className='py-1 text-center'>
                  <HeaderItem
                    href={href}
                    label={label}
                    isActive={isActiveHref(href)}
                    onClick={() => {
                      closeAllDropdowns();
                      closeMenu();
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
