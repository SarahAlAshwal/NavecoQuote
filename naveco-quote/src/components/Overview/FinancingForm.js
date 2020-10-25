import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from "../../styles/FinancingFormStyle";

const useStyles = makeStyles(styles);

export default function FinancingForm(props) {
  const classes = useStyles();
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
          onChange={props.handleChange}
          defaultValue={props.loanTermInYears}
        />
        <br />
        <TextField
          label="Interest Rate"
          onChange={props.handleChange}
          defaultValue={props.interestRate}
        />
        </div>
        <div>
        </div>
      </CardContent>
    </Card>
  );
};