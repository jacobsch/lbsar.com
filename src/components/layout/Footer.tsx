import Image from 'next/image'
import { Facebook, Instagram } from 'react-feather'

export default function Footer() {
  const SOCIAL_BLUE = '#1854f1'
  const SOCIAL_BLUE_HOVER = '#0f43c9'
  const MAPS_URL = 'https://maps.app.goo.gl/hiAwfLR7ESbtfvbj6'

  return (
    <footer className="w-full bg-[#121d2f] text-white font-primary font-normal">
      <div className="flex w-full flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:items-center lg:gap-7 lg:text-left">
          <Image
            src="/images/lbsar-logo.png"
            alt="Lions Bay Search and Rescue Society logo"
            width={96}
            height={96}
            className="object-contain"
          />

          <div className="text-lg leading-8">
            <div className="flex flex-col items-center gap-1 lg:flex-row lg:items-baseline lg:gap-2">
              <span className="tracking-wide text-[#f3c43b]">
                CONNECT WITH US:
              </span>
              <span className="text-white/95">
                Lions Bay Search and Rescue Society,
              </span>
            </div>

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

              <span className="mx-2 hidden lg:inline">|</span>

              <span className="mt-1 block lg:mt-0 lg:inline">
                <span className="text-[#f3c43b]">Email:</span>{' '}
                <a href="mailto:info@lbsar.com" className="hover:underline">
                  info@lbsar.com
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 lg:justify-end">
          <a
            href="https://www.facebook.com/LionsBaySAR/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-[80px] w-[80px] items-center justify-center rounded-2xl ring-1 ring-white/10 transition-colors duration-200"
            style={{ backgroundColor: SOCIAL_BLUE }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE)
            }
          >
            <Facebook size={36} />
          </a>

          <a
            href="https://www.instagram.com/lionsbaysar/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-[80px] w-[80px] items-center justify-center rounded-2xl ring-1 ring-white/10 transition-colors duration-200"
            style={{ backgroundColor: SOCIAL_BLUE }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE)
            }
          >
            <Instagram size={36} />
          </a>

          <a
            href="https://x.com/LionsBaySAR"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="flex h-[80px] w-[80px] items-center justify-center rounded-2xl ring-1 ring-white/10 transition-colors duration-200"
            style={{ backgroundColor: SOCIAL_BLUE }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE_HOVER)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = SOCIAL_BLUE)
            }
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2H21l-6.543 7.472L22.5 22h-6.8l-5.325-6.93L4.5 22H1.744l7.02-8.02L1.5 2h6.9l4.82 6.272L18.244 2zm-1.19 18h1.883L7.01 4H5.01l12.044 16z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
