import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { createStore } from 'redux';
import appReducer from './reducers/app';
import routes from './routes';
import 'tether';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

const store = createStore(appReducer);

const App = () => (
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>
);

export default App;
