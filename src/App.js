import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RoutingContainer from './containers/routing-container';
import { auth, firestore } from './firebase';
import { tasksChange, userChange } from './redux/actions/user-action';
import CustomAppBar from './components/app-bar';

const App = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userReducer.user);
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

    useEffect(() => {
      if (!currentUser) {
        return;
      }

      const unsubscribe = firestore
        .collection('users')
        .doc(currentUser.uid).collection('tasks')
        // .where('title', '>=', 'sdf')
        .onSnapshot(snapshot => {
          const tasks = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
          dispatch(tasksChange(tasks));
        });
      return () => unsubscribe();
    }, [currentUser, dispatch]);

    return (
      <>
        {currentUser ? <CustomAppBar/> : null}
        <Container maxWidth="md">
          <RoutingContainer/>
        </Container>
      </>
    );
  }
;

export default App;
