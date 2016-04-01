import React from 'react';
import Body from './Body';
import Footer from './Footer';
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


export default () => (
  <div className="index">
    <Header>
      dev.js
    </Header>
    <Body>
      This is the body.
    </Body>
    <Footer>
      This is the footer.
    </Footer>
  </div>
);
