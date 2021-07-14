import React from 'react';
import { Container } from '@material-ui/core';
import RoutingContainer from './containers/routing-container';

const App = () => {
  return (
    <Container maxWidth="md">
      <RoutingContainer/>
    </Container>
  );
};

export default App;
