import { useState } from 'react'
import { List, Menu } from 'react-feather'
import UnderlineLink from '@/components/ui/links/UnderlineLink'
import { useRouter } from 'next/router'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/rescue-specialties', label: 'Rescue Specialties' },  
  { href: '/faq', label: 'FAQ' },
  { href: '/trails', label: 'Trails' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/education', label: 'Education' },
]

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
      className={[
        'navbar-link',
        'text-[11px] font-semibold tracking-[0.22em] uppercase',
        'transition-colors whitespace-nowrap',
        // Active = orange, otherwise white
        isActive ? 'text-orange-400' : 'text-white/90 hover:text-white',
      ].join(' ')}
    >
      {label.toUpperCase()}
    </UnderlineLink>
  )
}

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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((v) => !v)

  const router = useRouter()
  const current = router.asPath

  const isActiveHref = (href: string) => {
    // Exact route match
    if (current === href) return true

    // If you later use hash links like "/#about-1"
    if (href.includes('#')) {
      const hash = href.split('#')[1]
      return current.includes(`#${hash}`)
    }

    // Treat "/" as home only (avoid matching every path)
    if (href === '/') return current === '/'

    // Optional: consider subpaths active (e.g. /shop/item)
    return current.startsWith(href + '/')
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: '#151f2f',
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
              <li key={`${href}${label}`}>
                <HeaderItem href={href} label={label} isActive={isActiveHref(href)} />
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
            style={{ backgroundColor: '#151f2f' }}
          >
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className="text-center">
                <HeaderItem
                  href={href}
                  label={label}
                  isActive={isActiveHref(href)}
                  onClick={() => setIsOpen(false)}
                />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
