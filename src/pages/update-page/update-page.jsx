import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CreateUpdateForm from '../../components/create-update-form';
import { useParams } from 'react-router-dom';

const UpdatePage = () => {
  const {id} = useParams();

  const [task, setTasks] = useState(id);


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
            <CreateUpdateForm value={task} onChange={setTasks}/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default UpdatePage;
