import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import TasksList from '../../components/tasks-list';
import FilterForm from '../../components/filter-form';
import withLogging from '../../hocs/with-login';

const Home = () => {

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

export default withLogging(Home);
