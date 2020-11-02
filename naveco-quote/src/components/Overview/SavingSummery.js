import React, { useContext } from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card } from "tabler-react";
import SettingsIcon from '@material-ui/icons/Settings';
import styles from "../../styles/AppStyle";
import { formatNumbers } from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';
import { totalSaving } from '../../helpers/overviewCalculation';

const useStyles = makeStyles(styles);

export default function SavingSummery() {

  const state = useContext(StateContext);
  const classes = useStyles();
  return (
    <>
      <Card>
        <Card.Status color="blue" side />
        <Card.Header>
          <Card.Title>Saving Summary</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className={classes.saving}>
            <AttachMoneyIcon fontSize="large" />
            <Typography gutterBottom variant="h5" component="h2">
              Congratulations!! You can save <b>{formatNumbers(totalSaving(state.acAnnual, state.rate))}</b> with this solar system in the next 25 years!
        </Typography>
          </div>
          <div className={classes.saving}>
            <SettingsIcon fontSize="large" />
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                Size: <b> {formatNumbers(state.systemCapacity)}</b> KW AC System
          </Typography>
            </div>
          </div>

        </Card.Body>
      </Card>
    </>

  );
}