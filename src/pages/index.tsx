import Layout from '$/layout/Layout';
import Seo from '$/Seo';
import BackgroundImage from '$/ui/BackgroundImage';
import Section from '$/ui/Section';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <BackgroundImage imgClass='bg-parallax-1' />

        <Section
          body='Lions Bay Search and Rescue (LBSAR) is a volunteer emergency response organization providing search and rescue services in the 
          Sea-to-Sky corridor.  Our response area includes the village of Lions Bay, the mountains of the Howe Sound Crest, and remote wilderness 
          terrain that reaches into the Capilano watershed. The most popular trails we support include the Howe Sound Crest Trail which leads to the 
          iconic Lions, Mount Brunswick, Mount Harvey, Deeks Lakes, and the Tunnel Bluffs lookout trail. We also provide mutual aid assistance to SAR 
          teams in all areas of British Columbia, and have also been requested for Canada-wide SAR assistance. '
        />

        <BackgroundImage imgClass='bg-parallax-2' />

        <Section
          body='We assist people who are lost, missing, injured, or in distress in a wide range of environments. 
          Incidents may involve urban searches, lost or injured hikers, or complex rescues in steep and technical terrain.'
        />

        <BackgroundImage imgClass='bg-parallax-3' />

        <Section
          body='Operating under Emergency Management and Climate Readiness (EMCR), LBSAR works closely with neighbouring search and rescue teams 
          and other emergency services like the RCMP, Fire, and Ambulance. Our volunteers train year-round to maintain operational readiness and to 
          respond effectively in all weather and terrain conditions. Search and rescue services in British Columbia are provided at no cost to the public. 
          If you, or someone else requires emergency assistance, call 911 immediately.'
        />

        <BackgroundImage imgClass='bg-parallax-4' />

      </main>
    </Layout>
  );
}
