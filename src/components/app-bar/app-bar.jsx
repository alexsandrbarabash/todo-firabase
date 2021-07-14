import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import './app-bar.css';

const CustomAppBar = () => {
  const {email} = useSelector(state => state.userReducer.user);

  const handlerSignOut = () => {
    auth.signOut();
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={'app-bar-root'}>
          <AccountCircleIcon fontSize={'large'}/>

          <Typography variant="h6">
            {email}
          </Typography>
        </div>
        <Button onClick={handlerSignOut} color="inherit">Sign Out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
