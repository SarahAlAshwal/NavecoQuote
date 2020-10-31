import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from "../../styles/FinancingFormStyle";

import '../frontPage.css';
import { Card, Form, Grid } from "tabler-react";

import { formatNumbers } from '../../helpers/formatNumbers';

const useStyles = makeStyles(styles);

export default function FinancingForm(props) {
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
            </Card.Body>
          </Card>
    </>
  );
};