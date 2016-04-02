import React from 'react';
import {
  Code,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  Section,
  SignupInline, SignupModal,
  Team,
  TeamMember,
} from 'neal-react';
import Body from './Body';
import Header from './Header';
import heroImg from '../../public/img/hero-bg-01.jpg';
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

      <Header>
        dev.js
      </Header>

      <Hero backgroundImage={heroImg}>
        <h1 className="display-4">
          Dev.js crafts minimal viable products and integrations with the latest Javascript technologies.
        </h1>
      </Hero>

      <Section>
       <Team>
         <TeamMember name="Member 1" title="Co-founder" imageUrl="img/people/grumpycat.jpg">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </TeamMember>
         <TeamMember name="Member 2" title="Co-founder" imageUrl="img/people/boo.jpg">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </TeamMember>
         <TeamMember name="Member 3" title="Co-founder" imageUrl="img/people/panda.jpg">
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
