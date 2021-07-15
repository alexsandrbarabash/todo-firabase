import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Box } from '@material-ui/core';
import Auth from '../../pages/auth';
import Home from '../../pages/home';
import CreatePage from '../../pages/create-page/create-page';
import UpdatePage from '../../pages/update-page';

const RoutingContainer = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Box mt={5}>
          <Home/>
        </Box>
      </Route>
      <Route path="/create-task" exact>
        <Box mt={5}>
          <CreatePage/>
        </Box>
      </Route>
      <Route path="/update-task/:id" exact>
        <Box mt={5}>
          <UpdatePage/>
        </Box>
      </Route>
      <Route path="/auth" exact>
        <Auth/>
      </Route>
    </Switch>
  );
};

export default RoutingContainer;
