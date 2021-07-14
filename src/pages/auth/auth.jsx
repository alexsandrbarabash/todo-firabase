import React, { useState } from 'react';
import { TextField, Grid, Typography, Box, Button } from '@material-ui/core';
import './auth.css';
import { auth } from '../../firebase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authHandler = () => {
    console.log(password);
    auth.signInWithEmailAndPassword(email, password).then((data) => {
      console.log(data);
    }).catch((e) => console.log(e.message));
  };

  const registerHandler = () => {
    auth.createUserWithEmailAndPassword(email, password);
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="standard-basic"
              label="Email"
              type="email"
              className={'input-auth'}/>
          </Grid>
          <Grid item xs={12} className={'center'}>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="standard-password-input"
              label="Password"
              type="password"
              className={'input-auth'}/>
          </Grid>
          <Grid item xs={12} className={'center'}>
            <Grid container spacing={1}>
              <Grid item xs={12} className={'center'}>
                <Button variant="contained" onClick={authHandler} color="primary" className={'input-auth'}>
                  Auth
                </Button>
              </Grid>
              <Grid item xs={12} className={'center'}>
                <Button variant="contained" onClick={registerHandler} color="secondary" className={'input-auth'}>
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
