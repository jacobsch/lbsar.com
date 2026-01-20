import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function PrivacyPage() {
  return (
    <Layout>
      <Seo templateTitle='Privacy Policy' />

      <section className='w-full bg-[#121d2f] px-6 py-14 text-white sm:px-10 lg:px-20'>
        <div className='mx-auto max-w-4xl'>
          <h1 className='font-primary mb-4 text-3xl font-bold md:text-4xl'>
            Privacy Policy
          </h1>

          <p className='mb-10 text-sm text-white/70'>
            Effective date: February 2026
          </p>

          <div className='space-y-10 text-[15px] leading-relaxed md:text-[16px]'>
            <p>
              Lions Bay Search and Rescue (“LBSAR”, “we”, “our”, or “us”) is
              committed to protecting the privacy of individuals who visit our
              website (the “Site”). This Privacy Policy explains how we collect,
              use, store, and safeguard personal information in accordance with
              applicable Canadian privacy laws, including the Personal
              Information Protection and Electronic Documents Act (PIPEDA), and,
              where applicable, the General Data Protection Regulation (GDPR).
            </p>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Information We Collect
              </h2>

              <p className='mb-4'>
                We collect limited information to operate and improve this
                website and to respond to inquiries.
              </p>

              <ul className='list-disc space-y-2 pl-5'>
                <li>
                  <strong>Automatically collected information:</strong> Internet
                  Protocol (IP) address (anonymized where applicable), browser
                  type, device type, pages visited, timestamps, and referring
                  URLs.
                </li>

                <li>
                  <strong>Analytics information:</strong> Aggregated website
                  usage data collected through Google Analytics in privacy-first
                  mode, such as page views, approximate location (city or
                  region), and device category.
                </li>

                <li>
                  <strong>Contact form submissions:</strong> When you submit a
                  message through our contact form, we collect the information
                  you provide (such as your name, email address, and message
                  content). This information is used solely to respond to your
                  inquiry.
                </li>

                <li>
                  <strong>Voluntarily provided information:</strong> Information
                  you choose to provide when contacting us by email, such as
                  your name, email address, phone number, or message content.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Use of Google Analytics
              </h2>

              <p>
                We use Google Analytics to understand how visitors use our
                website and to improve its performance and content. Google
                Analytics is configured in a privacy-first manner:
              </p>

              <ul className='mt-4 list-disc space-y-2 pl-5'>
                <li>IP addresses are anonymized</li>
                <li>No advertising or remarketing features are enabled</li>
                <li>No Google Signals or cross-device tracking is used</li>
                <li>No personally identifiable information is collected</li>
              </ul>

              <p className='mt-4'>
                Analytics data is used only in aggregate form and is not used
                for advertising, profiling, or tracking individuals across
                websites.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Cookies
              </h2>

              <p>
                Our website may use cookies or similar technologies that are
                strictly necessary for site functionality and basic analytics.
                These cookies do not enable advertising, remarketing, or
                personalized tracking. We do not use third-party advertising
                cookies or tracking pixels. You may adjust your browser settings
                to refuse cookies if you wish, though some features of the site
                may be affected.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                How We Use Information
              </h2>

              <ul className='list-disc space-y-2 pl-5'>
                <li>To operate, maintain, and secure the website</li>
                <li>To analyze site usage and improve functionality</li>
                <li>To respond to inquiries and communications</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>

              <p className='mt-4'>
                By using this website or submitting information through our
                contact forms, you consent to the collection and use of
                information as described in this Privacy Policy.
              </p>

              <p className='mt-4'>
                We do not sell, rent, or trade personal information, and we do
                not use personal data for advertising or marketing purposes.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Sharing of Information
              </h2>

              <p>
                We may share limited information with trusted service providers
                that help us operate our website, such as hosting, analytics,
                and contact form processing services. These providers are
                permitted to process information only for the purposes described
                in this Privacy Policy and are subject to appropriate
                confidentiality and security safeguards.
              </p>

              <p className='mt-4'>
                We may also disclose information where required by law or to
                protect the safety, rights, or property of LBSAR or others.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Data Security and Retention
              </h2>

              <p>
                We take reasonable administrative, technical, and physical
                measures to protect personal information against loss,
                unauthorized access, disclosure, or misuse. Information is
                retained only for as long as necessary to fulfill the purposes
                for which it was collected or as required by law.
              </p>

              <p className='mt-4'>
                Personal information may be stored on servers located in Canada
                or the United States and is protected by appropriate safeguards
                consistent with Canadian privacy laws.
              </p>

              <p className='mt-4'>
                In the event of a data breach involving personal information,
                LBSAR will take reasonable steps to notify affected individuals
                and relevant authorities as required by law.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Children’s Privacy
              </h2>

              <p>
                This website is not directed to children under the age of 13. We
                do not knowingly collect personal information from children. If
                you believe that a child has provided personal information
                through this website, please contact us and we will take
                appropriate steps to remove it.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Your Rights
              </h2>

              <p>
                Depending on your jurisdiction, you may have the right to
                request access to, correction of, or deletion of your personal
                information, subject to applicable legal requirements. Requests
                may be made using the contact information below.
              </p>

              <p className='mt-4'>
                We aim to keep this Privacy Policy clear and accessible. If you
                require this information in an alternative format, please
                contact us.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                External Links
              </h2>

              <p>
                Our website may contain links to external websites. LBSAR is not
                responsible for the privacy practices or content of those sites.
                We encourage users to review the privacy policies of any
                external websites they visit.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Donations
              </h2>

              <p>
                Donations made through our website are processed by third-party
                platforms, including CanadaHelps. When you follow a donation
                link, you are redirected to an external website and any personal
                or payment information you provide is collected and processed by
                that platform in accordance with its own privacy policy. Lions
                Bay Search and Rescue does not collect, store, or process
                payment information.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Changes to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
                Continued use of the website after changes are posted
                constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className='font-primary mb-3 text-xl font-semibold'>
                Contact
              </h2>

              <div className='rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6'>
                <p className='text-white/85'>
                  For questions about this Privacy Policy or our privacy
                  practices, contact:
                </p>

                <div className='mt-4 flex flex-col gap-2'>
                  <p className='font-semibold text-white'>
                    Lions Bay Search and Rescue
                  </p>

                  <a
                    className='hover:bg-white/15 inline-flex w-fit items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white underline-offset-4 hover:underline'
                    href='mailto:info@lbsar.ca'
                  >
                    info@lbsar.ca
                  </a>

                  <p className='text-sm text-white/60'>
                    Email is the fastest way to reach us for privacy-related
                    requests.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
