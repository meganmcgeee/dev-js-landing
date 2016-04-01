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
    <Header>
      <p>dev.js</p>
    </Header>
    <Body>
      This is the body.
    </Body>
    <Footer brandName={brandName}
      facebookUrl="http://www.facebook.com/"
      twitterUrl="http://www.twitter.com/"
      githubUrl="https://github.com/dennybritz/neal-react"
      address={businessAddress}>
    </Footer>

  </div>
);
