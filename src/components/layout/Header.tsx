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
      inline-flex items-center
      rounded-md
      bg-orange-600
      px-4 py-2
      text-[11px]
      font-bold
      tracking-[0.22em]
      uppercase
      text-white
      hover:bg-orange-700
      transition-colors
      whitespace-nowrap
    "
  >
    Donate Today
  </a>
)

function useActiveHref() {
  const { asPath } = useRouter()

  return (href: string) => {
    const path = asPath.split('?')[0].split('#')[0]
    const target = href.split('?')[0].split('#')[0]

    // home only active on "/"
    if (target === '/') return path === '/'

    // exact match or sub-route match
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
        'text-[11px] font-semibold tracking-[0.22em] uppercase',
        'transition-colors whitespace-nowrap',
        isActive ? 'text-orange-400' : 'text-white/90 hover:text-white',
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
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: HEADER_BG,
        width: '100vw',
        maxWidth: 'none',
        margin: 0,
      }}
    >
      <nav className="relative flex h-14 w-full items-center justify-between px-4 lg:px-8">
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
            className="absolute left-0 right-0 top-14 w-full py-3 lg:hidden border-t border-white/10"
            style={{ backgroundColor: HEADER_BG }}
          >
            {links.map(({ href, label }) => (
              <li key={href} className="text-center">
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
