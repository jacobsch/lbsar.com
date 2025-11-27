import Image from 'next/image';
import { ReactNode } from 'react';

const SponsorsGrid = ({ body }: { body: ReactNode }) => {
  const className = `flex flex-wrap`;
  return <div className={className}>{body}</div>;
};

const Sponsors = () => {
  return (
    <>
      <div className='h1 text-center text-7xl text-[#E5E4E2]'>Platinum</div>
      <SponsorsGrid
        body={
          <>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/platinum/AISLER.png'
                width={800}
                height={181}
                alt='Aisler'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/platinum/SDPSI.png'
                width={435}
                height={142}
                alt='SDPSI'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/platinum/QTC.png'
                width={340}
                height={200}
                alt='QTC'
              />
            </div>
          </>
        }
      />
      <div className='h1 my-12 text-center text-6xl text-[#FFD700]'>Gold</div>
      <SponsorsGrid
        body={
          <>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/gold/St-HubertMachineShop.webp'
                width={240}
                height={182}
                alt='St-Hubert Machine Shop'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/gold/TUBOQUIP.webp'
                width={240}
                height={103}
                alt='TUBOQUIP'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/gold/EUROGEAR.webp'
                width={240}
                height={70}
                alt='EUROGEAR'
              />
            </div>
            <div className='m-auto bg-slate-300 p-4'>
              <Image
                src='/images/sponsors/gold/CNCTRANCY.webp'
                width={240}
                height={70}
                alt='CNCTRANCY'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/gold/ARTYPAC.webp'
                width={250}
                height={147}
                alt='ARTYPAC'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/gold/CTA.webp'
                width={250}
                height={147}
                alt='CTA'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/gold/ClickUp.webp'
                width={250}
                height={147}
                alt='ClickUp'
              />
            </div>
          </>
        }
      />
      <div className='h1 my-12 text-center text-5xl text-[#C0C0C0]'>Silver</div>
      <SponsorsGrid
        body={
          <>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/silver/dblectro.png'
                width={250}
                height={150}
                alt='DB Lectro'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/silver/driveline.webp'
                width={204}
                height={120}
                alt='Drive Line'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/silver/gmn.webp'
                width={204}
                height={120}
                alt='GMN'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/silver/phytools.webp'
                width={204}
                height={120}
                alt='Phytools'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/silver/rpi.webp'
                width={204}
                height={120}
                alt='RPI'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/silver/solidworks.webp'
                width={204}
                height={120}
                alt='Solidworks'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/silver/walter.webp'
                width={204}
                height={120}
                alt='Walter'
              />
            </div>
          </>
        }
      />
      <div className='h1 my-12 text-center text-4xl text-[#CD7F32]'>Bronze</div>
      <SponsorsGrid
        body={
          <>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/afco.webp'
                width={250}
                height={150}
                alt='Afco'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/css-electronics.jpg'
                width={160}
                height={100}
                alt='CSS Electronics'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/esab.webp'
                width={160}
                height={100}
                alt='esab'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/fastenal.webp'
                width={160}
                height={100}
                alt='fastenal'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/geotechprecision.webp'
                width={160}
                height={100}
                alt='Geotech Precision'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/montrealprinting.webp'
                width={160}
                height={100}
                alt='Montreal Printing'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/nsk.png'
                width={160}
                height={100}
                alt='NSK'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/pcs.png'
                width={160}
                height={100}
                alt='PCS'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/schaeffler.webp'
                width={160}
                height={100}
                alt='Schaeffler'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/vr3.webp'
                width={160}
                height={100}
                alt='VR3'
              />
            </div>
            <div className='m-auto p-4'>
              <Image
                src='/images/sponsors/bronze/wilwood.webp'
                width={160}
                height={100}
                alt='Wilwood'
              />
            </div>
          </>
        }
      />
    </>
  );
};

export default Sponsors;
