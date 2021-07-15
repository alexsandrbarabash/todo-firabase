import React from 'react';
import { Paper, Box, Grid, Typography, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './task.css';
import { Link } from 'react-router-dom';

const Task = ({status, onSetStatus, title, onDelete, id}) => {
  return (
    <Box mt={4}>
      <Paper elevation={4}>
        <Box p={3}>
          <Grid container className={'center'}>
            <Grid item xs={9}>
              <Typography className={'title-task-color'} variant="body1">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Checkbox
                color="default"
                checked={status}
                onChange={onSetStatus}
                defaultChecked={false}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={onDelete}>
                <DeleteIcon/>
              </IconButton>
            </Grid>
            <Grid item xs={1}>
              <Link to={`/update-task/${id}`}>
                <IconButton>
                  <EditIcon/>
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Task;
