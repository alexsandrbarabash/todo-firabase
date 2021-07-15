import React, { useState } from 'react';
import CreateUpdateForm from '../../components/create-update-form/create-update-form';
import { Box, Grid, Typography } from '@material-ui/core';

const CreatePage = () => {
  const [task, setTasks] = useState('');

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
            <CreateUpdateForm value={task} onChange={setTasks}/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePage;
