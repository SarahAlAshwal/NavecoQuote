import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PrintIcon from '@material-ui/icons/Print';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';

import styles from "../../AppStyle";




const useStyles = makeStyles(styles);

export default function OverviewHeader(props) {
  const classes = useStyles();

  return (
    <div >
      <AppBar >
        <Toolbar variant="dense" className={classes.OverviewHeader}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon onClick={props.goHome} />
            <HelpIcon onClick={props.goHow}/>
            <PrintIcon  onClick={() => window.print()} />
          </IconButton>
          <div>
          <Typography variant="h6" color="inherit">
            Overview
          </Typography>
          </div>
          <div>        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}