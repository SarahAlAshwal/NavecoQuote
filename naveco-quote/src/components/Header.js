import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    color:'white',
    backgroundColor: 'DarkBlue',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  Button: {
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6)
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar className={classes.root} position="static">
          <Button className={classes.Button} color="inherit">Home</Button>
          <Button  className={classes.Button} color="inherit">How it works</Button>
      </AppBar>
    </div>
  );
}