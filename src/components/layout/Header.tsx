import Image from 'next/image';
import { useEffect, useState } from 'react';
import { List, Menu } from 'react-feather';

import UnderlineLink from '@/components/ui/links/UnderlineLink';

import logo from '~/images/logo.png'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about-us', label: 'About Us' },
];

const HeaderItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <UnderlineLink
      href={href}
      className='navbar-link navbar-text-black ms-4 h-10 w-full lg:ms-0 lg:h-auto'
    >
      {label.toUpperCase()}
    </UnderlineLink>
  );
};

export default function Header({
  transparentHeader = true,
}: {
  transparentHeader: boolean
}) {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsNavbarTransparent(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`header navbar ${
        isNavbarTransparent && transparentHeader
          ? 'bg-transparent'
          : 'bg-white'
      }`}
    >
      <div className='gradient'>&nbsp;</div>
      <nav className='layout mx-4 flex h-14 items-center justify-between'>
        <div className='container-heading navbar-text-black absolute right-0 top-0 me-2 mt-3 text-4xl'>
          <span className='mt-1 hidden xl:inline-block'>
            
          </span>
          <Image
            src={logo}
            alt='Lions Bay SAR Logo'
            width={55}
            height={55}
            className='xl:hidden'
          />
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {isOpen ? <List /> : <Menu />}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute start-0 mt-80 w-full bg-white/[0.95] py-3 lg:start-8 lg:mt-0 lg:flex lg:w-auto lg:items-center lg:justify-around lg:space-x-10 lg:bg-transparent`}
        >
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <HeaderItem href={href} label={label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
