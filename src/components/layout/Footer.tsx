import { Facebook, Instagram, Linkedin } from 'react-feather';

import ArrowLink from '../ui/links/ArrowLink';

export default function Footer() {
  return (
    // TODO: Put section classname into Section component
    <section
      className='relative inset-x-0 bottom-0 z-50 w-full bg-[#242424] px-2 pb-6	pt-12 text-center text-white'
      id='contact-us'
    >
      <div className='h2 container-heading pb-10'>QUICK LINKS</div>
      <div className='grid grid-cols-2 gap-5'>
        <div className='grid-rows grid gap-y-3'>
          <div className='h3 container-heading'>CONNECT WITH US</div>
          <div>
            <ArrowLink
              href='google maps link'
              className='navbar-link'
            >
              {' '}
              Address:
              <br />
              Sesame Street
              <br />
              City + Postal Code
            </ArrowLink>
          </div>
          <div>
            <ArrowLink
              href='mailto:replace@example.com'
              className='navbar-link'
            >
              Email: replace@example.com
              {/* TODO: Make this safe from webscraping */}
            </ArrowLink>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='h3 container-heading pb-8'>SOCIAL MEDIA</div>
          <div className='flex items-center justify-center'>
            <a
              href='https://www.instagram.com/lionsbaysar/'
              className='icon-link rounded-full border-2 p-2'
            >
              <Instagram />
            </a>
            <a
              href='https://www.facebook.com/LionsBaySAR/'
              className='icon-link mx-6 rounded-full border-2 p-2 sm:mx-12'
            >
              <Facebook />
            </a>

            <a
              href='https://www.linkedin.com/company/example.com/'
              className='icon-link rounded-full border-2 p-2'
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
