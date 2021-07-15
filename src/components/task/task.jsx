import React from 'react';
import { Paper, Box, Grid, Typography, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './task.css';

const Task = () => {
  return (
    <Box mt={4}>
      <Paper elevation={4}>
        <Box p={3}>
          <Grid container className={'center'}>
            <Grid item xs={9}>
              <Typography className={'title-task-color'} variant="body1">
                sfd
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Checkbox
                defaultChecked
                color="default"
                checked={false}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton><DeleteIcon/></IconButton>
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <EditIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Task;
