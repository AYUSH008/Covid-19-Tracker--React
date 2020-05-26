import React from 'react';
import  { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
    },
  }));

export class Header extends React.Component {
 
    render()
    {
        return(
            <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={makeStyles().menuButton} color="inherit" aria-label="menu">
                
              </IconButton>
              <Typography variant="h6" color="inherit" className={makeStyles().title}>
                Covid Tracker
              </Typography>
            </Toolbar>
          </AppBar>
        );
    }

}