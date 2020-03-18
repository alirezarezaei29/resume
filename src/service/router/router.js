import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../helper/store';
import Login from '../../view/pages/login/login-container';
import Manager from '../../view/pages/manager/manager-container';
import NoMatch from '../../view/pages/404/NotMatch';
import Resume from '../../view/pages/resume/resume-container';
import './index.css';
import Private from './PrivateRoute';
import history from './history';
// import Header from '../../view/components/header/Header';
// eslint-disable-next-line import/no-unresolved
// import 'typeface-roboto';

// eslint-disable-next-line import/prefer-default-export
export const routing = (
  <Provider store={store}>
    <Router history={history}>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Resume} />
        <Route path="/login" component={Login} />
        <Private restricted component={Manager} path="/managers" exact />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
);
