import React from 'react';
import { Button, Grid, TextField, Box } from '@material-ui/core';
import './create-update-form.css';

const CreateUpdateForm = ({submitHandler, onChange, value}) => {
  return (
    <form onSubmit={submitHandler}>
      <Grid container>
        <Grid item xs={12}>
          <TextField className={'form-input'} required value={value} label={'Task'}
                     onChange={(e) => onChange(e.target.value)}/>
        </Grid>
      </Grid>
      <Grid container>
        <Box mt={3}>
          <Button type={'submit'} variant="contained" color="primary" disableElevation>
            Submit
          </Button>
        </Box>
      </Grid>
    </form>
  );
};

export default CreateUpdateForm;
