import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from "../../styles/AppStyle";
import {formatNumbers} from '../../helpers/formatNumbers';
import {newBill} from '../../helpers/overviewCalculation';
import StateContext from '../../StateContext';

import { Card } from "tabler-react";


const useStyles = makeStyles(styles);

export default function PriceCard() {
  const state = useContext(StateContext);
  const classes = useStyles();

  return (
<>
          <Card>
            <Card.Status color="blue" side />
            <Card.Header>
              <Card.Title>Price Details</Card.Title>
            </Card.Header>
            <Card.Body>
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
            Including HST 
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
            </Card.Body>
          </Card>
    </>
    
  );
}