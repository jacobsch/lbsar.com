import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { List, Menu } from 'react-feather';
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
      ].join(' ')}
    >
      {label.toUpperCase()}
    </UnderlineLink>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isActiveHref = useActiveHref();
  const router = useRouter();

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handle = () => setIsOpen(false);
    router.events?.on('routeChangeStart', handle);
    return () => router.events?.off('routeChangeStart', handle);
  }, [router.events]);

  return (
    <header
      className='fixed left-0 right-0 top-0 z-[9999]'
      style={{
        backgroundColor: HEADER_BG,
        width: '100vw',
        maxWidth: 'none',
        margin: 0,
      }}
    >
      <nav className='relative flex w-full items-center justify-between px-4 py-4 lg:px-8 lg:py-5'>
        <div className='flex items-center gap-4'>
          <div className='min-[1500px]:hidden'>
            <button
              onClick={toggleMenu}
              className='rounded-md p-2 text-white transition-colors hover:bg-white/10'
              aria-label='Toggle navigation menu'
              aria-expanded={isOpen}
            >
              {isOpen ? <List /> : <Menu />}
            </button>
          </div>

          <ul className='hidden items-center gap-10 min-[1500px]:flex'></ul>
          <ul className='hidden items-center gap-10 min-[1500px]:flex'>
            {/* Logo (desktop only; disappears when hamburger appears) */}
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

            {links.map(({ href, label }) => (
              <li key={href}>
                <HeaderItem
                  href={href}
                  label={label}
                  isActive={isActiveHref(href)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className='flex shrink-0 items-center gap-3 pr-5 lg:pr-1 min-[1500px]:pr-0'>
          <DonateButton />
        </div>

        {isOpen && (
          <ul
            className='absolute left-0 right-0 top-full z-[9999] w-full border-t border-white/10 py-3 min-[1500px]:hidden'
            style={{ backgroundColor: HEADER_BG }}
          >
            {links.map(({ href, label }) => (
              <li key={href} className='py-1 text-center'>
                <HeaderItem
                  href={href}
                  label={label}
                  isActive={isActiveHref(href)}
                  onClick={closeMenu}
                />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
