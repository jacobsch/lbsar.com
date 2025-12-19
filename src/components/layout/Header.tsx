import Image from 'next/image';
import { useEffect, useState } from 'react';
import { List, Menu } from 'react-feather';

import UnderlineLink from '@/components/ui/links/UnderlineLink';
import logo from '~/images/logo_new.jpg';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about-us', label: 'About Us' },
  { href: '/history', label: 'History' },
];

const HeaderItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <UnderlineLink
      href={href}
      className='navbar-link navbar-text-black ms-4 h-10 w-fit lg:ms-0 lg:h-auto lg:w-auto'
    >
      {label.toUpperCase()}
    </UnderlineLink>
  );
};

export default function Header({ transparentHeader = true }: { transparentHeader: boolean }) {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsNavbarTransparent(scrollTop === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='header navbar bg-white w-full relative'>
      <div className='gradient'>&nbsp;</div>

      <nav className='flex h-14 items-center justify-between w-full pl-4 pr-1 lg:pl-8 lg:pr-2 relative'>
        {/* LEFT: Nav links + Hamburger */}
        <div className='flex items-center space-x-4'>
          {/* Mobile hamburger */}
          <div className='lg:hidden'>
            <button onClick={toggleMenu} className='focus:outline-none'>
              {isOpen ? <List /> : <Menu />}
            </button>
          </div>

          {/* Desktop nav links */}
          <ul className='hidden lg:flex items-center space-x-10'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <HeaderItem href={href} label={label} />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Logo */}
        <div className='flex items-center ml-auto mr-4 lg:mr-3 -mt-0'>
          <Image src={logo} alt='Lions Bay SAR Logo' width={50} height={50} />
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <ul className='absolute start-0 top-14 w-full bg-white/[0.50] py-3 lg:hidden'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='text-center'>
                <HeaderItem href={href} label={label} />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
