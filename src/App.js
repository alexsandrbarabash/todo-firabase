import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RoutingContainer from './containers/routing-container';
import { auth } from './firebase';
import { userChange } from './redux/actions/user-action';
import CustomAppBar from './components/app-bar';

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const authHandler = (user) => {
      dispatch(userChange(user));
      if (user) {
        history.push('/');
      }
    };

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(authHandler);

      return () => unsubscribe();
    }, []);

    return (
      <>
        {user ? <CustomAppBar/> : null}
        <Container maxWidth="md">
          <RoutingContainer/>
        </Container>
      </>
    );
  }
;

export default App;
