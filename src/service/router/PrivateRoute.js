/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function isLogin() {
  const retrievedObject = localStorage.getItem('user_info');
  if (retrievedObject) {
    return true;
  } return false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isLogin()
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

export default PrivateRoute;
