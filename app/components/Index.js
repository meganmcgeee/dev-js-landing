import React from 'react';
import {
  Footer,
  Hero,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  Section,
  SignupInline, SignupModal,
  Team,
  TeamMember,
} from 'neal-react';
import heroImg from '../../public/img/hero-bg-01.png';
import megImg from '../../public/img/people/megan.png'
import compLogo1 from '../../public/img/clients/mooch.jpg'
import compLogo2 from '../../public/img/clients/airlugg.png'
import './Index.scss';

// Specify the company brand
const brandName = 'dev.js';
const brand = <span>{brandName}</span>;

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
        dev.js
      </Navbar>

      <Hero backgroundImage={heroImg}>
        <h1 className="display-4">
          Dev.js crafts minimal viable products and integrations with the latest Javascript technologies.
        </h1>
      </Hero>

      <Section className="subhero">
        <div className="container">
          <ImageList centered>
            <ImageListItem src={compLogo1} url="http://www.learntomooch.com"/>
            <ImageListItem src={compLogo2} url="http://airlugg.com/"/>
          </ImageList>
        </div>
      </Section>

      <Section>
       <Team centered>
         <TeamMember name="Matthew Jesuele" title="Co-founder" imageUrl={megImg}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </TeamMember>
         <TeamMember name="Megan McGee" title="Co-founder" imageUrl={megImg}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </TeamMember>
       </Team>
     </Section>

      <Footer
        address={businessAddress}
        brandName={brandName}
      />
    </Page>
  </div>
);
