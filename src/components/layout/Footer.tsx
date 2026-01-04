import Image from 'next/image'
import { Facebook, Instagram } from 'react-feather'

export default function Footer() {
  const SOCIAL_BLUE = '#1854f1'
  const SOCIAL_BLUE_HOVER = '#0f43c9'
  const MAPS_URL = 'https://maps.app.goo.gl/hiAwfLR7ESbtfvbj6'

  return (
    <footer className="w-full bg-[#121d2f] text-white font-['Chakra_Petch'] font-normal">
      <div className="flex w-full flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        {/* Top/Left: Logo + Contact Info */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
          {/* Logo */}
          <Image
            src="/images/lbsar-logo.png"
            alt="Lions Bay Search and Rescue Society logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />

          {/* Contact text */}
          <div className="text-md leading-6">
            {/* Line 1 */}
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-normal tracking-wide text-[#f3c43b]">
                CONNECT WITH US:
              </span>
              <span className="text-white/95">
                Lions Bay Search and Rescue Society,
              </span>
            </div>

            {/* Line 2 */}
            <div className="mt-1 text-white/80">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                aria-label="Open mailing address in Google Maps"
              >
                PO Box 629, Lions Bay, BC V0N 2E0
              </a>

              <span className="mx-2 hidden sm:inline">|</span>

              <span className="mt-1 block sm:mt-0 sm:inline">
                <span className="text-[#f3c43b]">Email:</span>{' '}
                <a href="mailto:info@lbsar.com" className="hover:underline">
                  info@lbsar.com
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom/Right: Social Icons */}
        <div className="flex items-center justify-center gap-5 sm:justify-end">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/LionsBaySAR/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-white/10 transition-colors duration-200"
            style={{ backgroundColor: SOCIAL_BLUE }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE)
            }
          >
            <Facebook size={28} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/lionsbaysar/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-white/10 transition-colors duration-200"
            style={{ backgroundColor: SOCIAL_BLUE }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE)
            }
          >
            <Instagram size={28} />
          </a>

          {/* X */}
          <a
            href="https://x.com/LionsBaySAR"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-white/10 transition-colors duration-200"
            style={{ backgroundColor: SOCIAL_BLUE }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE)
            }
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M18.244 2H21l-6.543 7.472L22.5 22h-6.8l-5.325-6.93L4.5 22H1.744l7.02-8.02L1.5 2h6.9l4.82 6.272L18.244 2zm-1.19 18h1.883L7.01 4H5.01l12.044 16z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
