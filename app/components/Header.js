import React, { PropTypes } from 'react';

const Header = ({ children }) => (
  <header className="header">
    <p>{children}</p>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Header;
