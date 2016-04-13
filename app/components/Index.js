import React from 'react';
import {
  Footer,
  Hero,
  Navbar,
  Page,
  Section,
  Team,
  TeamMember,
} from 'neal-react';
import './Index.scss';

// Specify the company brand
const brandName = '{dev.js}';

// Specify company address
const businessAddress = (
  <address>
    <strong>{brandName}</strong><br />
    735 S. Saint Andrews Pl<br />
    Los Angeles, CA 90005<br />
    +1 213 555 5555
  </address>
);

export default () => (
  <div className="index">
    <Page>

      <Navbar>
        {"{dev.js}"}
      </Navbar>

      <Hero>
        <h1 className="display-4">
          Dev.js crafts chatbots, and RESTful APIs with the latest
          Javascript technologies.
        </h1>
      </Hero>

      <Section>
       <Team>
         <TeamMember name="Matthew Jesuele" title="Co-founder">
         Fullstack React.js specialist with a pechant for functional prgramming
         paradigms and a nose for technologies on the horizon. In his spare time,
         he raps and studies cities.
         </TeamMember>
         <TeamMember name="Boye Fanjimi" title="Co-founder">
         abcd ajkhjke. IOHOIJnwna auhwenajfoiaenoinwd3oir nfoawnfow eao wufi onwapi3 roiw nfoiwne.
         abcd ajkhjke. IOHOIJnwna auhwenajfoiaenoinwd3oir nfoawnfow eao wufi onwapi3 roiw nfoiwne.
         </TeamMember>
         <TeamMember name="Megan McGee" title="Co-founder">
        Front-end React specialist and self-identified technofeminist who is all about API building
        and building relationships/promoting female-owned start-ups. Talk to her about your business or idea.
         </TeamMember>
       </Team>
     </Section>
      <Section className="subhero" />
    </Page>
  </div>
);
