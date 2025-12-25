import Image from 'next/image';
import { useEffect, useState } from 'react';
import { List, Menu, ChevronDown } from 'react-feather';

import UnderlineLink from '@/components/ui/links/UnderlineLink';
import logo from '~/images/logo.png';

/* -------------------- NAV DATA -------------------- */
const links = [
  { href: '/', label: 'Home' },
  { href: '/#about-1', label: 'About Us' },
  { href: '/history', label: 'History' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/donate', label: 'Donate' },
  { href: '/#contact-us', label: 'Contact Us' },
];

const educationLinks = [
  { href: '/education', label: 'Overview' },
  { href: '/education/what-to-bring', label: 'What To Bring' },
  { href: '/education/location-services', label: 'Location Services' },
  { href: '/education/satellite-devices', label: 'Satellite Devices' },
  { href: '/education/treating-hypothermia', label: 'Treating Hypothermia' },
];

const localAreaLinks = [
  { href: '/local-area/trails', label: 'Trails' },
  { href: '/local-area/parking-facilities', label: 'Parking & Facilities' },
  { href: '/local-area/lions-bay-area', label: 'Lions Bay Area' },
  { href: '/local-area/hazards', label: 'Hazards' },
];

const trainingLinks = [
  { href: '/training-specialties/mountain', label: 'Mountain Rescue' },
  { href: '/training-specialties/rope', label: 'Rope Rescue' },
  { href: '/training-specialties/winter', label: 'Winter / Avalanche' },
  { href: '/training-specialties/medical', label: 'Medical' },
  { href: '/training-specialties/hoist', label: 'Hoist Operations' },
  { href: '/training-specialties/canyoneering-caving', label: 'Canyoneering & Caving' },
  { href: '/training-specialties/ground-search-tracking', label: 'Ground Search & Tracking' },
  { href: '/training-specialties/swiftwater', label: 'Swiftwater' },
  { href: '/training-specialties/drones', label: 'Drones' },
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
  const [localAreaOpen, setLocalAreaOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

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
            <DropdownDesktop title="EDUCATION" links={educationLinks} />

            {/* LOCAL AREA (DESKTOP) */}
            <DropdownDesktop title="LOCAL AREA" links={localAreaLinks} />

            {/* TRAINING (DESKTOP) */}
            <DropdownDesktop title="TRAINING SPECIALTIES" links={trainingLinks} />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center ml-auto mr-4 lg:mr-3">
          <a
            href="https://www.canadahelps.org/en/dn/9468"
            target="_blank"
            rel="noopener noreferrer"
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

            <DropdownMobile
              title="EDUCATION"
              links={educationLinks}
              isOpen={educationOpen}
              setIsOpen={setEducationOpen}
            />

            <DropdownMobile
              title="LOCAL AREA"
              links={localAreaLinks}
              isOpen={localAreaOpen}
              setIsOpen={setLocalAreaOpen}
            />

            <DropdownMobile
              title="TRAINING SPECIALTIES"
              links={trainingLinks}
              isOpen={trainingOpen}
              setIsOpen={setTrainingOpen}
            />
          </ul>
        )}
      </nav>
    </header>
  );
}

/* -------------------- REUSABLE DROPDOWNS -------------------- */

function DropdownDesktop({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <li className="relative group">
      <UnderlineLink
        href="#"
        className="navbar-link navbar-text-black flex items-center gap-1"
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <ChevronDown
          size={14}
          className="transition-transform group-hover:rotate-180"
        />
      </UnderlineLink>

      <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[220px] z-50">
        {links.map(({ href, label }) => (
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
  );
}

function DropdownMobile({
  title,
  links,
  isOpen,
  setIsOpen,
}: {
  title: string;
  links: { href: string; label: string }[];
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  return (
    <li className="flex flex-col items-center">
      <UnderlineLink
        href="#"
        className="navbar-link navbar-text-black flex items-center gap-1"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </UnderlineLink>

      {isOpen && (
        <ul className="mt-2 w-full">
          {links.map((item) => (
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
  );
}
