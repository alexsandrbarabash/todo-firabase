import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CreateUpdateForm from '../../components/create-update-form/create-update-form';
import { firestore } from '../../firebase';
import TasksList from '../../components/tasks-list';
import withLogging from '../../hocs/with-login';

const CreatePage = () => {
  const [task, setTasks] = useState('');
  const currentUser = useSelector(state => state.userReducer.user);

  const createHandler = (e) => {
    e.preventDefault();

    firestore.collection('users')
      .doc(currentUser.uid).collection('tasks').add({
      title: task,
      status: false
    });

    setTasks('');
  };


  return (
    <>
      <Grid container>
        <Grid item xs={12} className={'center'}>
          <Typography variant="h3">
            Create Task
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box mt={5}>
            <CreateUpdateForm value={task} onChange={setTasks} submitHandler={createHandler}/>
          </Box>
        </Grid>
      </Grid>
      <TasksList/>
    </>
  );
};

export default withLogging(CreatePage);
