
import BackgroundImage from '@/components/ui/BackgroundImage';
import Section from '@/components/ui/Section';

import Layout from '$/layout/Layout';
import Seo from '$/Seo';

export default function History() {
  return (
    <Layout transparentHeader={false} >
      <Seo templateTitle='History' />

      <main>
        <BackgroundImage imgClass='history-parallax-1'/>

        <Section
          body='Lion’s Bay has long been a starting point for day hikers and mountaineers,
          both local and from all over the Lower Mainland of Vancouver,
          making day hikes and short climbing expeditions into the peaks above. 
          Inevitably, there were those who were injured and lost and ad hoc groups of residents would often help with the rescue efforts.
          Disaster struck the community in 1982 when Alberta creek, which runs right through the north side of the village, flooded its banks and carried away several homes and two young residents.
          The community involvement in the flood response led to the formation of Lions Bay Search and Rescue (LBSAR) in 1983.
          Made up mainly of local mountaineers, members of UBC’s Varsity Outdoors Club,
          and back-country enthusiasts with a taste for adventure and a sense of community spirit,
          the group centered around the tireless efforts of Marcel Andrie,
          who incorporated the group in 1983 and initially ran the organization out of the basement of his house.'
        />

        <BackgroundImage imgClass='history-parallax-2'/>

        <Section
          body="The teams early efforts were village based, but they soon started moving further a field.
          The team moved into technical rope rescue after its work doing rigging for Expo 86,
          and has maintained a strong proficiency in this field since. In the late 1980’s,
          LBSAR started working closely with neighbouring teams Squamish and North Shore Rescue in mutual aid scenarios and became a trusted ally in difficult mountain rescue callouts that stretched those team’s resources.
          In 1992, the team found a permanent base when it moved into its current home in the Village emergency building, sharing space with the Fire Department and BC ambulance service."
        />

        <BackgroundImage imgClass='history-parallax-3'/>

        <Section
          body="In addition to responding to calls in our immediate response area,
          LBSAR supports neighboring teams with search and rescue capabilities.
          A large percentage of LBSAR’s total calls have been in support of neighboring teams with the team traveling as far north as Terrace and as far south as Washington State’s Olympic Peninsula.
          As a sponsor of the Lions Bay SAR, one receives the benefit of contributing to the community and ensuring that there is a strong safety net in the Lions Bay and Lower Mainland area for all recreational back-country enthusiasts."
        />
      </main>
    
    </Layout>
  );
}
