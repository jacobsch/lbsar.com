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
          header='Lions Bay Volunteer Search & Rescue Team'
          body='Lions Bay Search and Rescue Society operates under the umbrella of the Emergency Management Climate Readiness (EMCR).
          Our team provides wilderness and urban search and rescue services, primarily in the area from Horseshoe Bay to Porteau Cove.
          Lions Bay Search and Rescue also assists search and rescue teams in nearby regions as well as participating in disaster relief efforts across the province.'
        />

        <BackgroundImage imgClass='bg-parallax-2' />

        <Section
          body='Our team members are dedicated volunteers who are on call 24 hours a day and are trained and equipped to respond in any weather conditions.
          Searches can range from urban calls to look for missing adults or children, to wilderness searches involving specialized high angle rope equipment and techniques.
          Each search is directed by experienced search managers with a goal of finding missing persons and extracting them safely and as quickly as possible.'
        />

        <BackgroundImage imgClass='bg-parallax-3' />

        <Section
          body='Our team members are all highly skilled in urban and wilderness search techniques.
          In addition to a mandatory basic training course, our members attend weekly training sessions to ensure skills are kept up to date.
          Specialized weekend courses put on by the Justice Institute help members to develop specialized search and rescue skills and techniques.'
        />

        <BackgroundImage imgClass='bg-parallax-4' />

      </main>
    </Layout>
  );
}
