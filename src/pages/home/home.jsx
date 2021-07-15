import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import TasksList from '../../components/tasks-list';
import FilterForm from '../../components/filter-form';

const Home = () => {
  const history = useHistory();

  const user = useSelector(state => state.userReducer.user);
  useEffect(() => {
    if (!user) {
      history.push('/auth');
    }
  }, [user, history]);

  return (
    <div>
      <Typography variant={'h3'} className={'center'}>Home</Typography>
      <FilterForm/>
      <Box mt={2}>
        <Link to="/create-task">
          <Button variant="contained">
            Create Task
          </Button>
        </Link>
      </Box>
      <TasksList/>
    </div>
  );
};

export default Home;
