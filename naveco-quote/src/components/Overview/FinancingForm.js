import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from "../../styles/FinancingFormStyle";

import { formatNumbers } from '../../helpers/formatNumbers';

const useStyles = makeStyles(styles);

export default function FinancingForm(props) {
  const classes = useStyles();
  return (
    <Card className={classes.rootFinancing}>
      <CardContent className={classes.cardContent}>
        <div>
          <TextField
            label="Loan Amount"
            defaultValue={props.loan}
            disabled
          />
          <br />
          <TextField
            label="Loan term in years"
            name="loanTermInYears"
            onChange={props.handleLoanChange}
            defaultValue={props.loanTermInYears}
          />
          <br />
          <TextField
            label="Interest Rate"
            name="interestRate"
            onChange={props.handleLoanChange}
            defaultValue={props.interestRate}
          />
        </div>
        <div>
          <div id="monthlyPayments">
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Monthly Payments
          </Typography>
            <Typography variant="h5" component="h2">
              ${formatNumbers(props.monthlyPayments)}
            </Typography>

          </div>
          <br />
          <div>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              New energy bill + Finance Payment
          </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              ${formatNumbers(props.monthlyPayments + props.newBill)}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};