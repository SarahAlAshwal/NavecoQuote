import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import styles from "../AppStyle";


const useStyles = makeStyles(styles);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar className={classes.rootHeader} position="static">
          <Button className={classes.Button} color="inherit">Home</Button>
          <Button  className={classes.Button} color="inherit">How it works</Button>
      </AppBar>
    </div>
  );
}