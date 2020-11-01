import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from "../../styles/FinancingFormStyle";
import '../frontPage.css';
import { Card} from "tabler-react";
import { formatNumbers } from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';
import {newBill} from '../../helpers/overviewCalculation';

const useStyles = makeStyles(styles);

export default function FinancingForm(props) {
  const state = useContext(StateContext);
  const classes = useStyles();
  return (
    <>
          <Card>
            <Card.Status color="blue" side />
            <Card.Header>
              <Card.Title>Payments</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Monthly Payments
                </Typography>
                <Typography variant="h5" component="h2">
                  ${formatNumbers(state.monthlyPayments)}
                </Typography>

              </div>
              <br />
              <div>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  New energy bill + Finance Payment
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  ${formatNumbers(state.monthlyPayments + newBill(state.acMonthly, state.monthlyAmount, state.year, state.rate))}
                </Typography>
              </div>
            </Card.Body>
          </Card>
    </>
  );
};