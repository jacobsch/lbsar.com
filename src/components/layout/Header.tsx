import Image from 'next/image';
import { useEffect, useState } from 'react';
import { List, Menu, ChevronDown } from 'react-feather';

import UnderlineLink from '@/components/ui/links/UnderlineLink';
import logo from '~/images/logo.png';

/* -------------------- NAV DATA -------------------- */
const links = [
  { href: '/', label: 'Home' },
  { href: '/#about-us', label: 'About Us' },
  { href: '/history', label: 'History' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/donate', label: 'Donate' },
  { href: '/training-specialties', label: 'Training Specialties' },
  { href: '/local-area', label: 'Local Area' },
  { href: '/#contact-us', label: 'Contact Us' },
];

const educationLinks = [
  { href: '/education', label: 'Overview' },
  { href: '/education/what-to-bring', label: 'What To Bring' },
  { href: '/education/location-services', label: 'Location Services' },
  { href: '/education/satellite-devices', label: 'Satellite Devices' },
  { href: '/education/treating-hypothermia', label: 'Treating Hypothermia' },
];

/* -------------------- HEADER -------------------- */
export default function Header({
  transparentHeader = true,
}: {
  transparentHeader: boolean;
}) {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);

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
    <header
      className={`header navbar ${
        isNavbarTransparent && transparentHeader
          ? 'bg-transparent'
          : 'bg-white'
      }`}
    >
      <div className="gradient">&nbsp;</div>

      <nav className="flex h-14 items-center justify-between w-full pl-4 pr-1 lg:pl-8 lg:pr-2 relative">
        {/* LEFT */}
        <div className="flex items-center space-x-4">
          {/* MOBILE HAMBURGER */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <List /> : <Menu />}
            </button>
          </div>

{/* DESKTOP NAV */}
<ul className="hidden lg:flex items-center space-x-10">
  {links.map(({ href, label }) => (
    <li key={href}>
      <UnderlineLink
        href={href}
        className="navbar-link navbar-text-black"
      >
        {label.toUpperCase()}
      </UnderlineLink>
    </li>
  ))}

  {/* EDUCATION (DESKTOP) */}
  <li className="relative group">
    <UnderlineLink
      href="#"
      className="navbar-link navbar-text-black flex items-center gap-1"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      EDUCATION
      <ChevronDown
        size={14}
        className="transition-transform group-hover:rotate-180"
      />
    </UnderlineLink>

    {/* Dropdown */}
    <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
      {educationLinks.map(({ href, label }) => (
        <li key={href} className="px-4 py-2 hover:bg-gray-100">
  <UnderlineLink
    href={href}
    className="navbar-link navbar-text-black text-sm"
  >
    {label}
  </UnderlineLink>
</li>

      ))}
    </ul>
  </li>
</ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center ml-auto mr-4 lg:mr-3">
          <a
            href="https://www.canadahelps.org/en/dn/9468"
            target="_blank"
            className="
              items-center rounded-md
              bg-red-600 px-4 py-2
              text-sm font-semibold text-white
              hover:bg-red-700 transition-colors
              whitespace-nowrap mr-4
            "
          >
            Donate Today
          </a>
          <Image src={logo} alt="Lions Bay SAR Logo" width={50} height={50} />
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <ul className="absolute start-0 top-14 w-full bg-white/[0.85] py-3 lg:hidden">
            {links.map((link) => (
              <li key={link.href} className="text-center">
                <UnderlineLink
                  href={link.href}
                  className="navbar-link navbar-text-black"
                >
                  {link.label.toUpperCase()}
                </UnderlineLink>
              </li>
            ))}

            {/* EDUCATION (MOBILE) */}
            <li className="flex flex-col items-center">
              <UnderlineLink
                href="#"
                className="navbar-link navbar-text-black flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault();
                  setEducationOpen(!educationOpen);
                }}
              >
                EDUCATION
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    educationOpen ? 'rotate-180' : ''
                  }`}
                />
              </UnderlineLink>

              {educationOpen && (
                <ul className="mt-2 w-full">
                  {educationLinks.map((item) => (
                    <li key={item.href} className="text-center">
                      <UnderlineLink
                        href={item.href}
                        className="navbar-link navbar-text-black"
                      >
                        {item.label.toUpperCase()}
                      </UnderlineLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
