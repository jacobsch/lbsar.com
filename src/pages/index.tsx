import Layout from '$/layout/Layout';
import Seo from '$/Seo';
import BackgroundImage from '$/ui/BackgroundImage';
import Section from '$/ui/Section';
import { ChevronsDown } from 'react-feather';
import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMapOpen) {
      document.body.style.overflow = 'hidden';
      if (modalRef.current) modalRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMapOpen]);

  return (
    <Layout transparentHeader={false}>
      <Seo />

      {/* Map Modal */}
      <div
        className={`fixed inset-0 z-[9999] flex items-start justify-center pt-24 pb-24 px-2 sm:px-4 transition-opacity duration-300 ${
          isMapOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={() => setIsMapOpen(false)}
      >
        <div
          ref={modalRef}
          className={`bg-white w-full sm:w-[90%] max-w-[1400px] max-h-[calc(100vh-12rem)] rounded-2xl overflow-auto overflow-x-hidden p-4 transform transition-transform duration-300 relative ${
            isMapOpen ? 'translate-y-0' : '-translate-y-10'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* X button outside photo */}
          <button
            className='text-black absolute top-2 -right-6 font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg'
            onClick={() => setIsMapOpen(false)}
          >
            X
          </button>

          <div className='flex justify-center'>
            <img
              src='/images/area-map.jpg'
              alt='LBSAR Coverage Area'
              className='w-full max-w-full h-auto rounded-2xl'
            />
          </div>
        </div>
      </div>

      <main>
        <BackgroundImage imgClass='bg-parallax-1' />

        <Section
          topNode={<a className='anchor' id='about-1'></a>}
          header='About Lions Bay Search and Rescue'
          body={
            <>
              Lions Bay Search and Rescue (LBSAR) is a volunteer emergency response organization providing search and rescue services in the 
              Sea-to-Sky corridor. Our response area includes the village of Lions Bay, the mountains of the Howe Sound Crest, and remote wilderness 
              terrain that reaches into the Capilano watershed. The most popular trails we support include the Howe Sound Crest Trail which leads to the 
              iconic Lions, Mount Brunswick, Mount Harvey, Deeks Lakes, and the Tunnel Bluffs lookout trail. We also provide mutual aid assistance to SAR 
              teams in all areas of British Columbia, and have also been requested for Canada-wide SAR assistance.<br /><br />

              To see the coverage area,{' '}
              <span 
                className='text-blue-400 underline cursor-pointer'
                onClick={() => setIsMapOpen(true)}
              >
                see map here
              </span>.
            </>
          }
          bottomNode={
            <div className='flex flex-col items-center mt-2'>
              <a href='#about-2' className='text-white hover:text-blue-300 transition duration-300 ease-in-out'>
                <ChevronsDown/>
              </a>
            </div>
          }
        />

        <BackgroundImage imgClass='bg-parallax-2' />

        <Section
          topNode={<a className='anchor' id='about-2'></a>}
          body='We assist people who are lost, missing, injured, or in distress in a wide range of environments. 
          Incidents may involve urban searches, lost or injured hikers, or complex rescues in steep and technical terrain.'
          bottomNode={
            <div className='flex flex-col items-center mt-2'>
              <a href='#about-3' className='text-white hover:text-blue-300 transition duration-300 ease-in-out'>
                <ChevronsDown/>
              </a>
            </div>
          }
        />

        <BackgroundImage imgClass='bg-parallax-3' />

        <Section
          topNode={<a className='anchor' id='about-3'></a>}
          body='Operating under Emergency Management and Climate Readiness (EMCR), LBSAR works closely with neighbouring search and rescue teams 
          and other emergency services like the RCMP, Fire, and Ambulance. Our volunteers train year-round to maintain operational readiness and to 
          respond effectively in all weather and terrain conditions. Search and rescue services in British Columbia are provided at no cost to the public. 
          If you, or someone else requires emergency assistance, call 911 immediately.'
          bottomNode={
            <div className='flex flex-col items-center mt-2'>
              <a href='#about-3' className='text-white hover:text-blue-300 transition duration-300 ease-in-out'>
                <ChevronsDown />
              </a>
            </div>
          }
        />

        {/* Parallax Section 3 */}
        <BackgroundImage imgClass='bg-parallax-3' />
        <Section
          topNode={<a className='anchor' id='about-3'></a>}
          header='What to Expect When You Call for Help'
          body={
            <>
              If you have cell reception, <span className='font-bold text-red-600'>call 911</span>. Emergency dispatch will route your call to the appropriate requesting agency—most commonly the <span className='font-bold'>RCMP</span> for missing persons or <span className='font-bold'>BC Ambulance Service</span> for injuries. As the requesting agency, they will initiate a search and rescue (SAR) callout.<br /><br />

              Once you’ve made contact, stay where you are whenever possible. Dispatch or SAR teams may use your phone or an activated <span className='font-bold text-red-600'>SOS device</span> (such as an <span className='italic font-bold'>inReach</span>) to determine your GPS location. <span className='font-bold'>Rescue response takes time</span>, and you should be prepared to remain in place for <span className='font-bold'>three to five hours</span> or longer while teams are mobilized and travel to your location. Stay warm, shelter in place, conserve energy, and know that help is on the way. In the Lions Bay area, continuing downhill travel is <span className='font-bold text-red-600'>extremely dangerous</span>—steep drainages and creeks can quickly become impassable.
            </>
          }
          bottomNode={
            <div className='flex flex-col items-center mt-2'>
              <a href='#about-4' className='text-white hover:text-blue-300 transition duration-300 ease-in-out'>
                <ChevronsDown />
              </a>
            </div>
          }
        />

        {/* Parallax Section 4 */}
        <BackgroundImage imgClass='bg-parallax-4' />
        <Section
          topNode={<a className='anchor' id='about-4'></a>}
          body={
            <>
              If a helicopter response is required, crews may conduct an initial reconnaissance flight to assess terrain and plan a safe extraction. To help rescuers locate you, make yourself visible by wearing <span className='font-bold text-red-600'>bright colours</span>, waving your arms, and using a <span className='font-bold text-red-600'>headlamp or light</span> if conditions allow. Dark or neutral clothing such as gray, black, or green can be difficult to see beneath dense West Coast forest canopy.<br /><br />

              Helicopters cannot operate safely in all weather conditions, including low cloud or poor visibility. If the aircraft departs after an initial pass, do not panic—this often means crews are assessing conditions or developing an extraction plan. In some cases, <span className='font-bold'>ground teams</span> will be deployed as close as possible and continue to you on foot.
            </>
          }
          bottomNode={
            <div className='flex flex-col items-center mt-2'>
              <a href='#contact-us' className='text-white hover:text-blue-300 transition duration-300 ease-in-out'>
                <ChevronsDown/>
              </a>
            </div>
          }
        />

        {/* Additional Parallax Photo Section for smooth transition */}
        <div>
          <BackgroundImage imgClass='bg-parallax-5' />
        </div>
      </main>
    </Layout>
  );
}
