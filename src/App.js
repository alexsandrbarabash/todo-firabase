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
    const {user: currentUser, sortByTitle, showStatus, search} = useSelector(state => state.userReducer);
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
        .doc(currentUser.uid)
        .collection('tasks')
        // .where('title', '>=', '')
        // .where('status', 'in', showStatus) // if i try use 'in' in query. I have index error
        .orderBy('title', sortByTitle)
        .onSnapshot(snapshot => {
          const tasks = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          })).filter((item) => showStatus.includes(item.status));
          dispatch(tasksChange(tasks));
        });
      return () => unsubscribe();
    }, [currentUser, dispatch, sortByTitle, showStatus]);

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
