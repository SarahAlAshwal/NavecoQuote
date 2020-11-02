import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from "../../styles/AppStyle";
import {formatNumbers} from '../../helpers/formatNumbers';
import {newBill} from '../../helpers/overviewCalculation';
import StateContext from '../../StateContext';


const useStyles = makeStyles(styles);

export default function PriceCard() {
  const state = useContext(StateContext);
  const classes = useStyles();

  return (
    <Card  className={classes.rootPrice}>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardDiv}>
          <Typography variant="h5" component="h2">
            Total Price
        </Typography>
        </div>
        <div className={classes.inlineClass}>
          <Typography variant="h6" component="h2" className={classes.priceCardValue}>
            ${formatNumbers(state.totalGross)}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Including HST + Rebate Deducted
          </Typography>
        </div>
        <br />
        <div className={classes.inlineClass}>
          <Typography variant="h5" component="h2">
            New energy bill
        </Typography>
        </div>
        <div className={classes.inlineClass}>
          <Typography variant="h6" component="h2" className={classes.priceCardValue}>
          ${formatNumbers(newBill(state.acMonthly, state.monthlyAmount, state.year, state.rate))}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            /month
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardContent}>
        <Button size="small" variant="contained" color="primary">
          Price
        </Button>
      </CardActions>
    </Card>
  );
}