import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Auth from '../../pages/auth';
import Home from '../../pages/home';

const RoutingContainer = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/auth" exact>
        <Auth/>
      </Route>
    </Switch>
  );
};

export default RoutingContainer;
