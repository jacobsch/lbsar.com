import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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
export default function Header({ transparentHeader = true }: { transparentHeader: boolean }) {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState<
    'education' | 'local' | 'training' | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarTransparent(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header navbar ${
        isNavbarTransparent && transparentHeader ? 'bg-transparent' : 'bg-white'
      }`}
    >
      <div className="gradient">&nbsp;</div>

      <nav className="relative flex h-14 w-full items-center justify-between px-4 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* MOBILE BUTTON */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <List /> : <Menu />}
          </button>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <li key={href}>
                <UnderlineLink href={href} className="navbar-link navbar-text-black">
                  {label.toUpperCase()}
                </UnderlineLink>
              </li>
            ))}

            <DropdownDesktop title="EDUCATION" links={educationLinks} />
            <DropdownDesktop title="LOCAL AREA" links={localAreaLinks} />
            <DropdownDesktop title="TRAINING SPECIALTIES" links={trainingLinks} />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.canadahelps.org/en/dn/9468"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Donate Today
          </a>
          <Image src={logo} alt="Lions Bay SAR Logo" width={50} height={50} />
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <ul className="absolute top-14 left-0 w-full bg-white py-3 lg:hidden">
            {links.map(({ href, label }) => (
              <li key={href} className="text-center">
                <UnderlineLink
                  href={href}
                  className="navbar-link navbar-text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {label.toUpperCase()}
                </UnderlineLink>
              </li>
            ))}

            <DropdownMobile
              title="EDUCATION"
              links={educationLinks}
              open={mobileDropdown === 'education'}
              onToggle={() =>
                setMobileDropdown(mobileDropdown === 'education' ? null : 'education')
              }
              onNavigate={() => setMobileOpen(false)}
            />

            <DropdownMobile
              title="LOCAL AREA"
              links={localAreaLinks}
              open={mobileDropdown === 'local'}
              onToggle={() =>
                setMobileDropdown(mobileDropdown === 'local' ? null : 'local')
              }
              onNavigate={() => setMobileOpen(false)}
            />

            <DropdownMobile
              title="TRAINING SPECIALTIES"
              links={trainingLinks}
              open={mobileDropdown === 'training'}
              onToggle={() =>
                setMobileDropdown(mobileDropdown === 'training' ? null : 'training')
              }
              onNavigate={() => setMobileOpen(false)}
            />
          </ul>
        )}
      </nav>
    </header>
  );
}

/* -------------------- DESKTOP DROPDOWN -------------------- */
function DropdownDesktop({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const enter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const leave = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 80); // tiny grace period
  };

  return (
    <li
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <UnderlineLink
        href="#"
        className="navbar-link navbar-text-black inline-flex items-center gap-1"
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <ChevronDown size={14} />
      </UnderlineLink>

      {open && (
        <ul className="absolute left-0 top-full mt-3 min-w-[220px] rounded-md bg-white shadow-lg z-50">
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
      )}
    </li>
  );
}

/* -------------------- MOBILE DROPDOWN -------------------- */
function DropdownMobile({
  title,
  links,
  open,
  onToggle,
  onNavigate,
}: {
  title: string;
  links: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <li className="flex flex-col items-center">
      <UnderlineLink
        href="#"
        className="navbar-link navbar-text-black flex items-center gap-1"
        onClick={(e) => {
          e.preventDefault(); // prevent navigation
          onToggle();
        }}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </UnderlineLink>

      {open && (
        <ul className="w-full mt-2">
          {links.map(({ href, label }) => (
            <li key={href} className="text-center">
              <UnderlineLink
                href={href}
                className="navbar-link navbar-text-black"
                onClick={onNavigate}
              >
                {label.toUpperCase()}
              </UnderlineLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
