import { Facebook, Instagram } from 'react-feather';

import ArrowLink from '../ui/links/ArrowLink';

export default function Footer() {
  return (
    // TODO: Put section classname into Section component
    <section
      className='relative inset-x-0 bottom-0 z-50 w-full bg-[#242424] px-2 pb-6 pt-12 text-center text-white'
      id='contact'
    >
      <div className='h2 container-heading pb-10'>QUICK LINKS</div>

      {/* Use 1 column on mobile, 3 columns on sm+ so message sits between sections */}
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 items-start'>
        {/* Left column */}
        <div className='sm:col-span-1 flex flex-col items-center text-center'>
          <div className='h3 container-heading'>CONNECT WITH US</div>

          <div className='mt-3 w-full'>
            <ArrowLink href='https://maps.app.goo.gl/v8aocasQ4Y6N7uCU8' className='navbar-link' label='Address'>
              <address className='not-italic text-center'>
                <span className='block font-semibold'>Mailing Address:</span>
                <span className='block'>PO Box 629</span>
                <span className='block'>Lions Bay, BC V0N 2E0</span>
              </address>
            </ArrowLink>
          </div>

          <div className='mt-3 w-full'>
            <ArrowLink href='mailto:info@lbsar.com' className='navbar-link' label='Email'>
              Email: info@lbsar.com
            </ArrowLink>
          </div>
        </div>

        {/* Center message (visually between the two sections) */}
        <div className='sm:col-span-1 flex items-center justify-center'>
          <div
            className='bg-red-600 text-white rounded px-4 py-2 text-sm font-semibold text-center'
            role='alert'
          >
            For All Search and Rescue Emergencies, Call 911
          </div>
        </div>

        {/* Right column */}
        <div className='sm:col-span-1 flex flex-col items-center text-center'>
          <div className='h3 container-heading pb-2'>SOCIAL MEDIA</div>
          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center space-x-6'>
              <a
                href='https://www.instagram.com/lionsbaysar/'
                className='icon-link rounded-full border-2 p-2'
              >
                <Instagram />
              </a>
              <a
                href='https://www.facebook.com/LionsBaySAR/'
                className='icon-link rounded-full border-2 p-2'
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
