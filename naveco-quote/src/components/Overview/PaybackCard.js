import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { formatNumbers } from '../../helpers/formatNumbers';

import styles from "../../styles/FinancingFormStyle";

import '../frontPage.css';
import { Card } from "tabler-react";

const useStyles = makeStyles(styles);

export default function PaybackCard(props) {
  const classes = useStyles();

  return (
    <>
          <Card>
            <Card.Status color="blue" side />
            <Card.Header>
              <Card.Title>Finance Informations</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Payback Period
                </Typography>
                <Typography variant="h5" component="h2">
                  {formatNumbers(props.paybackPeriod)} Years
                </Typography>
              </div>
              <br />
              <div>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  ROI
                </Typography>
              </div>
              <div className={classes.inlineClass}>
                <Typography variant="h5" component="h2">
                  {formatNumbers(props.roi)}%
                </Typography>
              </div>

            </Card.Body>
          </Card>
    </>
  );
}