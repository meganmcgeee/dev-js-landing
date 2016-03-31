import React, { PropTypes } from 'react';

const Footer = ({ children }) => (
  <footer className="footer">
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
