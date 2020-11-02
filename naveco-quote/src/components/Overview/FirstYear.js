import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from "../../styles/AppStyle";
import {formatNumbers} from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';

const useStyles = makeStyles(styles);

export default function FirstYear() {
  const state = useContext(StateContext);
  const classes = useStyles();

  return (
    <div className={classes.cardContent}>
      <Typography variant="h5" component="h2">
        {formatNumbers(state.acAnnual)} kWhs
      </Typography>
      <Typography variant="h6" component="h2">
        {`$${formatNumbers(state.acAnnual * state.rate)} value`}
      </Typography>
    </div>
  );
}