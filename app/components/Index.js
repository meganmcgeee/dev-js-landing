import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="index">
    <h1>This is the index</h1>
    <Link to="/foo">Foo</Link><br />
    <Link to="/bar">Bar</Link>
  </div>
);
