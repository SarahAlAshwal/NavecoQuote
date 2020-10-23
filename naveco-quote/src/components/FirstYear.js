import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from "../AppStyle";

const useStyles = makeStyles(styles);

export default function FirstYear(props) {
  const classes = useStyles();

  return (
    <div className={classes.cardContent}>
      <Typography variant="h5" component="h2">
        {props.kwhs} kWhs in first year
      </Typography>
      <Typography variant="h6" component="h2">
        {props.amount} value
      </Typography>
    </div>
  );
}