import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CreateUpdateForm from '../../components/create-update-form';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { firestore } from '../../firebase';
import withLogging from '../../hocs/with-login';

const UpdatePage = () => {
  const {id} = useParams();
  const history = useHistory();
  const [task, setTasks] = useState('');

  const currentUser = useSelector(state => state.userReducer.user);

  useEffect(() => {
    firestore
      .collection('users')
      .doc(currentUser.uid)
      .collection('tasks')
      .doc(id)
      .get()
      .then((snapshot) => {
        setTasks(snapshot.data().title);
      });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    firestore
      .collection('users')
      .doc(currentUser.uid)
      .collection('tasks')
      .doc(id)
      .update({title: task})
      .then(() => {
        history.push('/');
      })
      .catch(e => console.log(e.message));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} className={'center'}>
          <Typography variant="h3">
            Update Task
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box mt={5}>
            <CreateUpdateForm value={task} submitHandler={updateHandler} onChange={setTasks}/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default withLogging(UpdatePage);
