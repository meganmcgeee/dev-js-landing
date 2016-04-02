import React from 'react';
import Body from './Body';
import Header from './Header';
import './Index.scss';
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
} from "neal-react";

//Specify the company brand
const brandName = "dev.js";
const brand = <span>{brandName}</span>;

//Specify company address
const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    735 S. Saint Andrews Pl<br/>
    Los Angeles, CA 90005<br/>
    +1 213 555 5555
  </address>
);

export default () => (
  <div className="index">
    <Page>

      <Header>
        dev.js
      </Header>

      <Hero backgroundImage="hero-bg-01.jpg">
          <h1 className="display-4"> Dev.js crafts minimal viable products and integrations with the latest Javascript technologies. </h1>
      </Hero>

      <Body>
        This is the body.
      </Body>
      <Footer brandName={brandName}
        address={businessAddress}>
      </Footer>
    </Page>
  </div>
);
