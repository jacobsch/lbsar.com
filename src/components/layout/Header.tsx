import { useState } from 'react'
import { List, Menu } from 'react-feather'
import { useRouter } from 'next/router'
import UnderlineLink from '@/components/ui/links/UnderlineLink'

const HEADER_BG = '#151f2f'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/rescue-specialties', label: 'Rescue Specialties' },
  { href: '/faq', label: 'FAQ' },
  { href: '/trails', label: 'Trails' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/education', label: 'Education' },
] as const

const DonateButton = () => (
  <a
    href="https://www.canadahelps.org/en/dn/9468"
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex items-center justify-center
      rounded-xl
      bg-[#fc6421]
      px-12 py-2.5
      font-chakra font-bold uppercase
      text-[20px] leading-none
      tracking-[0.22em]
      text-white
      hover:bg-[#c94a18]
      transition-colors
      shadow-[0_10px_28px_rgba(0,0,0,0.28)]
      whitespace-nowrap
    "
  >
    DONATE
  </a>
)


function useActiveHref() {
  const { asPath } = useRouter()

  return (href: string) => {
    const path = asPath.split('?')[0].split('#')[0]
    const target = href.split('?')[0].split('#')[0]

    if (target === '/') return path === '/'
    return path === target || path.startsWith(target + '/')
  }
}

const HeaderItem = ({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
}) => {
  return (
    <UnderlineLink
      href={href}
      onClick={onClick}
      underlineMobileOnly
      className={[
        'navbar-link',

        // Chakra Petch base
        'font-chakra uppercase',
        'text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]',
        'tracking-[0.14em]',

        // Active state = bold + orange
        isActive
          ? 'font-bold text-orange-400'
          : 'font-normal text-white/90 hover:text-white',

        'transition-colors whitespace-nowrap',
      ].join(' ')}
    >
      {label.toUpperCase()}
    </UnderlineLink>
  )
}


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isActiveHref = useActiveHref()

  const toggleMenu = () => setIsOpen((v) => !v)
  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999]"
      style={{
        backgroundColor: HEADER_BG,
        width: '100vw',
        maxWidth: 'none',
        margin: 0,
      }}
    >
      <nav className="relative flex w-full items-center justify-between px-4 py-4 lg:px-8 lg:py-5">
        {/* LEFT: Hamburger + Desktop links */}
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <List /> : <Menu />}
            </button>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-10">
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

        {/* RIGHT: Donate */}
        <div className="flex items-center gap-3">
          <DonateButton />
        </div>

{/* MOBILE DROPDOWN */}
{isOpen && (
  <ul
    className="absolute left-0 right-0 top-full z-[9999] w-full py-3 lg:hidden border-t border-white/10"
    style={{ backgroundColor: HEADER_BG }}
  >
    {links.map(({ href, label }) => (
      <li key={href} className="text-center py-1">
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
  )
}
