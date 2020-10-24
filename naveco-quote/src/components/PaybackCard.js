import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from "../AppStyle";

const useStyles = makeStyles(styles);

export default function PaybackCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.rootPrice}>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardDiv}>
          <Typography variant="h5" component="h2">
          Payback Period
        </Typography>
        </div>
        <div className={classes.inlineClass}>
          <Typography variant="h6" component="h2" className={classes.priceCardValue}>
            {props.paybackPeriod} Years
          </Typography>
        </div>
        <br />
        <div className={classes.inlineClass}>
          <Typography variant="h5" component="h2">
          ROI
        </Typography>
        </div>
        <div className={classes.inlineClass}>
          <Typography variant="h6" component="h2" className={classes.priceCardValue}>
            {props.roi}%
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}