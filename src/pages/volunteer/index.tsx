import {
  AlertTriangle,
  Clock,
  Mail,
  Radio,
  Users,
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
      <main className='bg-off-white'>
        {/* ================= VOLUNTEER CONTENT ================= */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-gray-800">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Volunteer with Lions Bay Search and Rescue
          </h1>

          <div className="mb-10 h-1 w-20 bg-red-600" />

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Lions Bay Search and Rescue (LBSAR) is a group of roughly 40
              professional volunteers and several resource members. Volunteering
              with SAR is a significant commitment and differs from most volunteer
              roles in both training requirements and operational expectations.
              Most members average 100-500hrs per year of volunteer time.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-gray-900">
              2026 Members in Training
            </h2>
            <p>
              In 2026, Lions Bay Search and Rescue is pleased to welcome five new
              Members in Training (MITs) to the team. We are proud to bring
              together a strong and diverse group of individuals whose experience
              will enhance our operational capability.
            </p>
            <p>
              This cohort includes three ACMG-certified guides with extensive
              expertise as CAA Level 2 avalanche forecasters, an emergency
              management professional with nearly 30 years of climbing and
              outdoor experience, and a long-time Lions Bay resident with deep
              familiarity of local trails and terrain. Their combined skills and
              local knowledge strengthen the team as we continue to serve the
              community and respond to complex rescue environments.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-gray-900">
              Recruitment Status: Closed
            </h2>
            <p>
              LBSAR is <strong>not currently recruiting</strong>. Recruitment occurs every few
              years as needs arise, and the timing of the next intake has not yet
              been determined. When recruitment is planned, announcements are
              typically made in <strong>October</strong>, with applications accepted during the
              final quarter of the year. Please check back for updates.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-gray-900">
              Training & Commitment
            </h2>
            <p>
              Field team members in British Columbia are trained to the provincial
              <strong> Ground Search and Rescue (GSAR)</strong> standard. Initial training and
              certification typically take <strong>approximately two years</strong>. During this
              period, members in training are expected to attend <strong>at least 75% of weekly training sessions.</strong>
            </p>
            <p>
              LBSAR generally trains on <strong>Monday evenings</strong>, excluding summer months
              and statutory holidays. Due to the time and effort required to become
              operationally qualified, applicants should be prepared to make
              a <strong>long-term commitment</strong>, typically <strong>five years or more</strong>. It is also
              strongly recommended that applicants have an understanding with their
              employer regarding availability for SAR callouts.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-gray-900">
              Who Should Apply
            </h2>
            <p>
              We are interested in hearing from individuals who are experienced in
              backcountry travel, have strong local knowledge, work well in team
              environments, and are motivated to serve their community. Successful
              applicants demonstrate reliability, sound judgment, physical
              fitness, and a willingness to train year-round in challenging
              conditions.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-gray-900">
              How to Express Interest
            </h2>

            {/* ================= UPDATED EMAILS ================= */}
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Mail className="text-red-600" />
                  <span>If you are interested in future recruitment opportunities, please contact us at:</span>
                </div>
                <strong className="ml-8 mt-1 block">
                  <a href="mailto:join@lbsar.com">join@lbsar.com</a>
                </strong>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Mail className="text-red-600" />
                  <span>For general inquiries, email:</span>
                </div>
                <strong className="ml-8 mt-1 block">
                  <a href="mailto:info@lbsar.com">info@lbsar.com</a>
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ANIMATED STATS ================= */}
        <VolunteerStats />
      </main>
    </Layout>
  );
}
