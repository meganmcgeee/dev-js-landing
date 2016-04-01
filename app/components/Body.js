import React, { PropTypes } from 'react';

const Body = ({ children }) => (
  <div className="body">
    <h2>Body</h2>
    {children}
  </div>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
