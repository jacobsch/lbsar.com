import {
  Users,
  Clock,
  AlertTriangle,
  Radio,
} from 'react-feather';

import Layout from '$/layout/Layout';
import Seo from '$/Seo';
import CountUpStat from '@/components/CountUpStat';


/* =====================================================
   STATS SECTION
===================================================== */
function VolunteerStats() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          <CountUpStat
            value={40}
            label="Volunteers"
            Icon={Users}
          />
          <CountUpStat
            value={6500}
            label="Volunteer Hours"
            Icon={Clock}
          />
          <CountUpStat
            value={35}
            label="Call Outs"
            Icon={AlertTriangle}
          />
          <CountUpStat
            value={1200}
            label="km sq. coverage area"
            Icon={Radio}
          />
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   PAGE
===================================================== */
export default function VolunteerPage() {
  return (
    <Layout transparentHeader={false}>
      <Seo templateTitle="Volunteer" />
      <main>
        {/* Your volunteer page content goes here */}

        {/* Animated stats above footer */}
        <VolunteerStats />
      </main>
    </Layout>
  );
}
