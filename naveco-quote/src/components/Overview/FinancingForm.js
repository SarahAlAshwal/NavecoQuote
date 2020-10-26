import React, { useState, useEffect } from "react";
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

  const [state, setState] = useState({
    loan: props.loanAmount,
    interestRate: props.interestRate,
    loanTermInYears: props.loanTermInYears,
    monthlyPayments: calculateMonthlyPaiment(props.loanAmount, props.interestRate, props.loanTermInYears)
  })

  function calculateMonthlyPaiment(principal, percentageRate, term) {
    const lengthOfLoan = term * 12;
    const rate = percentageRate / 100 / 12;
    return (principal * rate) / (1 - (Math.pow((1 + rate), lengthOfLoan * -1)));
  }

  function setnewEnergyBill(setMonthlyPaiment) {
    return setMonthlyPaiment;
  }

  function handleChange(evt) {
    const value = evt.target.value;

    setState({
      ...state,
      [evt.target.name]: value
    });

    const monthlyPayments = calculateMonthlyPaiment(state.loanAmount, state.interestRate, state.loanTermInYears);

    setState({
      ...state,
      monthlyPayments
    });

  }


  useEffect(() => {
    console.log(state.monthlyPayments);
  });

  return (
    <Card className={classes.rootFinancing}>
      <CardContent className={classes.cardContent}>
        <div>
          <TextField
            label="Loan Amount"
            defaultValue={props.loanAmount}
            disabled
          />
          <br />
          <TextField
            label="Loan term in years"
            name="loanTermInYears"
            onChange={handleChange}
            defaultValue={state.loanTermInYears}
          />
          <br />
          <TextField
            label="Interest Rate"
            name="interestRate"
            onChange={handleChange}
            defaultValue={state.interestRate}
          />
        </div>
        <div>
          <div id="monthlyPayments">
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
              ${formatNumbers(state.monthlyPayments + props.newBill)}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};