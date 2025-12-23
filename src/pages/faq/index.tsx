import Layout from '$/layout/Layout';
import Seo from '$/Seo';

export default function FAQPage() {
  return (
    <Layout transparentHeader={false}>
      <Seo templateTitle="FAQs" />

      <div className='bg-[#e4dfdf]'>
        <main className="mx-auto max-w-4xl px-6 py-20 text-gray-800">
          {/* ================= FAQ TITLE ================= */}
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            FAQs
          </h1>
          <div className="mb-10 h-1 w-20 bg-red-600" />

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              <strong>Who is responsible for Search and Rescue in BC?</strong><br />
              In BC search and rescue has been divided into three major categories:
            </p>
            <ul className="list-disc list-inside">
              <li>Air</li>
              <li>Marine</li>
              <li>Ground and Inland Waters</li>
            </ul>
            <p>
              Air and Marine searches are the responsibility of the Armed forces and the Coast Guard, 
              while ground and inland water searches outside of national parks are the responsibility of the RCMP. 
              Search and rescue groups such as Lions Bay are called out by the RCMP to provide personnel and equipment for these types of searches.
            </p>
            <p>
              Details on the RCMP policy for search and rescue are available on the{' '}
              <a href="https://rcmp.ca/en" className="text-red-600 font-semibold underline" target="_blank" rel="noopener noreferrer">
                RCMP website
              </a>.
            </p>

            <p>
              <strong>How is a search initiated?</strong><br />
              Searches for missing persons are initiated by the police. Once a missing persons report is received, 
              the police will make a decision whether or not to call out a search and rescue team. 
              The call to the team is made to the team Duty Officer who then sends out a page to all team members. 
              Team members call in to indicate their availability and then report to search headquarters.
            </p>

            <p>
              <strong>If you are lost, who pays for your rescue?</strong><br />
              In Canada, searches are conducted by volunteers and costs are covered by the Provincial Emergency Program (PEP)
            </p>

            <p>
              <strong>Are SAR team members paid?</strong><br />
              No member of Lions Bay Search and Rescue is paid, all team members are volunteers and take time off from work and their personal lives to respond to searches.
            </p>

            <p>
              <strong>How is the team funded?</strong><br />
              Money for the team is raised through donations by companies or individuals. 
              The Provincial Emergency Program (PEP) will cover search expenses and lost equipment, 
              but all equipment must be initially purchased by the team or individuals. 
              To see our sponsors or make a donation to the team click <a href="https://www.canadahelps.org/en/dn/9468" target="_blank" className="text-red-600 font-semibold underline">here</a>.
            </p>

            <p>
              <strong>How many searches are there in BC each year?</strong><br />
              In 2004 there were 933 searches involving 1,193 lost persons. 
              1,032 of these people were rescued alive. A detailed breakdown of incidents can be found on the
              {' '}
              <a
                href="https://www2.gov.bc.ca/gov/content/safety/emergency-management/emergency-management/reports"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-semibold underline"
              >
                PEP incident summaries website
              </a>
              .
            </p>

            <p>
              <strong>How many teams are there in BC?</strong><br />
              There are approximately 4700 volunteers in BC, organized into 93 provincial and 7 IRT (Initial Response Teams) teams. 
              These teams are called onto support:
            </p>
            <ul className="list-disc list-inside">
              <li>Police searching for lost persons</li>
              <li>BC Ambulance service for assistance in transporting injured persons if specialized skills and equipment are needed.</li>
              <li>Coroners office for the recovery of the deceased if specialized skills and equipment are needed.</li>
              <li>Department of National Defense and Canadian Coast Guard in their mandate of air and marine search and rescue.</li>
              <li>Local governments during civil emergencies</li>
            </ul>
            <p>
              These groups are coordinated and maintained by the{' '}
              <a href="https://www2.gov.bc.ca/gov/content/safety/emergency-management" 
                className="text-red-600 font-semibold underline" target="_blank" rel="noopener noreferrer">
                Provincial Emergency Program (PEP)
                <br />
                <br />
              </a> More info can be found at the <a href="https://bcsara.com/" target="_blank" className="text-red-600 font-semibold underline">BC Search and Rescue Association Website</a>.
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
