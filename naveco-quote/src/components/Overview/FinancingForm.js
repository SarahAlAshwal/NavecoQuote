import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from "../../styles/FinancingFormStyle";

import '../frontPage.css';
import { Form, Alert } from "tabler-react";

import { formatNumbers } from '../../helpers/formatNumbers';

const useStyles = makeStyles(styles);

export default function FinancingForm(props) {
  const classes = useStyles();
  return (
    <>
      {(props.loanFotmaError) && <Alert type="danger" hasExtraSpace>
          <div>{props.loanFotmaError}</div>
        </Alert>
      }
      <Form.FieldSet>
        <Form.Group label="Loan Amount" isRequired>
          <Form.Input
            id="loan"
            value={props.cost}
            disabled
          />
        </Form.Group>
        <Form.Group label="Loan term in years" isRequired>
          <Form.Input
            name="loanTermInYears"
            onChange={props.handleLoanChange}
            value={props.loanTermInYears}
          />
        </Form.Group>
        <Form.Group label="Interest Rate" isRequired>
          <Form.Input
            name="interestRate"
            onChange={props.handleLoanChange}
            value={props.interestRate}
          />
        </Form.Group>
      </Form.FieldSet>
    </>
  );
};