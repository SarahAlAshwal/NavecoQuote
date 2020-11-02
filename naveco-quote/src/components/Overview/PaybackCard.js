import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { formatNumbers } from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';
import {calculatePayback, calculateROI, totalSaving} from '../../helpers/overviewCalculation';



import styles from "../../styles/FinancingFormStyle";

import { Card } from "tabler-react";

const useStyles = makeStyles(styles);

export default function PaybackCard(props) {
  const state = useContext(StateContext);
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
                <Typography color="textSecondary" gutterBottom>
                  Payback Period
                </Typography>
                <Typography variant="h5" component="h2">
                  {formatNumbers(state.payback ? state.payback : calculatePayback(state.acAnnual, state.totalNet, state.rate))} Years
                </Typography>
              </div>
              <br />
              <div>
                <Typography color="textSecondary" gutterBottom>
                  ROI
                </Typography>
              </div>
              <div className={classes.inlineClass}>
                <Typography variant="h5" component="h2">
                  {formatNumbers(state.roi ? state.roi : calculateROI(totalSaving(state.acAnnual, state.rate), state.totalGross))}%
                </Typography>
              </div>

            </Card.Body>
          </Card>
    </>
  );
}