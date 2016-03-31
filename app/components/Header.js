import React, { PropTypes } from 'react';

const Header = ({ children, color }) => (
  <header className="header">
    <h1 style={{ color }}>{children}</h1>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Header;
