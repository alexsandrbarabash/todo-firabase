import React from 'react';
import { TextField, Grid, Typography, Box, Button } from '@material-ui/core';
import './auth.css';

const Auth = () => {
  return (
    <Box mt={10}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} className={'center'}>
            <Typography variant="h3">
              Please Auth
            </Typography>
          </Grid>
          <Grid item xs={12} className={'center'}>
            <TextField
              required
              id="standard-basic"
              label="Email"
              type="email"
              className={'input-auth'}/>
          </Grid>
          <Grid item xs={12} className={'center'}>
            <TextField
              required
              id="standard-password-input"
              label="Password"
              type="password"
              className={'input-auth'}/>
          </Grid>
          <Grid item xs={12} className={'center'}>
            <Grid container spacing={1}>
              <Grid item xs={12} className={'center'}>
                <Button type={'submit'} variant="contained" color="primary" className={'input-auth'}>
                  Auth
                </Button>
              </Grid>
              <Grid item xs={12} className={'center'}>
                <Button type={'submit'} variant="contained" color="secondary" className={'input-auth'}>
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Auth;
