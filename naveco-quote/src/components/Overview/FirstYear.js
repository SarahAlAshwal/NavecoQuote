import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from "../../styles/AppStyle";
import { formatNumbers } from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';

import { Card } from "tabler-react";

const useStyles = makeStyles(styles);

export default function FirstYear() {
  const state = useContext(StateContext);
  const classes = useStyles();

  return (
    <>
      <Card>
        <Card.Status color="blue" side />
        <Card.Header>
          <Card.Title>First Year Saving</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              {formatNumbers(state.acAnnual)} KWhs
            </Typography>
            <Typography variant="h6" component="h2">
              {`$${formatNumbers(state.acAnnual * state.rate)} value`}
            </Typography>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}