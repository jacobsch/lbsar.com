import Layout from '$/layout/Layout';
import Seo from '$/Seo';

export default function DonatePage() {
  return (
    <Layout transparentHeader={false}>
      <Seo templateTitle="Donate" />

      <main className='bg-off-white'>
        <section className="mx-auto max-w-4xl px-6 py-20 text-gray-800">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Donate
          </h1>

          <div className="mb-10 h-1 w-20 bg-red-600" />

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Lions Bay Search and Rescue is{' '}
              <strong>100% volunteer-run</strong> and relies on community
              donations to remain operationally ready. Every contribution helps
              keep our volunteers trained, equipped, and ready to respond.
            </p>
            <p>
              <strong>
                Search and rescue services in British Columbia are always provided at no cost to the public—donor support makes this possible.
              </strong>
            </p>
            <p>
              Serving a complex, hard-to-access response area with a history of
              natural disasters, our team depends on specialized equipment,
              ongoing training, and reliable vehicles to respond safely and
              effectively when emergencies occur.
            </p>
          </div>

          <h2 className="mt-16 mb-6 text-2xl font-semibold text-gray-900">
            Where Your Donation Goes
          </h2>

          <p className="mb-8 text-lg leading-relaxed">
            Your donation directly supports the readiness and safety of LBSAR
            volunteers and the people we serve. Contributions are used to fund
            essential operational needs, including:
          </p>

          <ul className="space-y-6 text-lg leading-relaxed">
            <li>
              <span className="font-semibold text-gray-900">
                Rescue Gear & Equipment Replacement
              </span>
              <br />
              Search and rescue relies on safety-critical equipment such as
              ropes, medical supplies, personal protective equipment, and
              technical rescue systems. These items experience heavy use and
              must be regularly inspected and replaced to meet safety standards.
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                Specialty Training & Education
              </span>
              <br />
              Complex rescues require advanced skills. Donations help fund
              specialty courses and scenario-based training in areas such as
              mountain rescue, rope rescue, swiftwater, avalanche response, and
              wilderness medical care.
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                Recertification & Skills Currency
              </span>
              <br />
              Many SAR disciplines require ongoing recertification and regular
              skills practice. Your support ensures volunteers can maintain
              required certifications and remain operationally ready.
            </li>

            <li>
              <span className="font-semibold text-gray-900">
                Vehicles, Equipment & Facilities
              </span>
              <br />
              Response vehicles, trailers, and facilities are essential for
              rapid deployment. Donations help cover fuel, insurance,
              maintenance, repairs, and facility upkeep—ensuring our team can
              respond quickly when help is needed.
            </li>
          </ul>
          <br />
          <p className="mb-6">
            To make a donation, please click the <strong>DONATE NOW</strong> button and help keep our community and backcountry safe.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.canadahelps.org/en/dn/9468" target="_blank"
              className="inline-block rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
            >
              DONATE NOW
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
