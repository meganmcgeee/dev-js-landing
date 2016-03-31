import React from 'react';
import { Route } from 'react-router';
import Index from './components/Index';
import Foo from './components/Foo';
import Bar from './components/Bar';

export default [
  <Route component={Index} path="/" />,
  <Route component={Foo} path="/foo" />,
  <Route component={Bar} path="/bar" />,
];
