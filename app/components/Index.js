import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { App } from 'neal-react';
import './Index.scss';


export default () => (
  <div className="index">
    <Header color="#FEFEFE">
      This is the header of the index page.
    </Header>
    <Body>
      This is the body.
    </Body>
    <Footer>
      This is the footer.
    </Footer>
  </div>
);
