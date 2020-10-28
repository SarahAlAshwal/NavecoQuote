import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardActions } from "@material-ui/core";
import styles from "../styles/MonthlyFormStyle";
import { formatNumbers } from '../helpers/formatNumbers';

const useStyles = makeStyles(styles);

export default function MonthlyForm(props) {
  const classes = useStyles();

  return (
    <Card className={classes.rootMonthlyForm} >
      <CardContent>

        <Typography gutterBottom variant="h5" component="h2">
          What do you spend each month on power?
        </Typography>
        <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
          {props.state.message}
        </Typography>
        <div className={classes.cardContent}>
          <div className={classes.formContent}>
            <form autoComplete="off" onSubmit={event => event.preventDefault()}>
              <TextField required id="standard-required" label="Required"
                defaultValue={props.state.monthlyAmount ? props.state.monthlyAmount : ""}
                onChange={props.handleChangeAmount}
                data-testid="amount-input"
              />
            </form>

          </div>
          <div>
            <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
            {formatNumbers(props.state.powerPerMonth)} kWhs used per month
        </Typography>
            <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
              {formatNumbers(props.state.yearlyAmount)}  spent on power each year
        </Typography>
            <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
              {formatNumbers(props.state.powerPerYear)}  kWhs used per year
        </Typography>
          </div>
          
        </div>
        <div>
            <TextField required label="Number of panels"
                  defaultValue={props.state.numberOfPannel ? props.state.numberOfPannel : ""} onChange={props.handleInputs}
                  data-testid="numberOfPanels-input"
                />
          </div>
        <CardActions>
          <Button variant="contained" color="primary" onClick={() => props.calculate()} >
            Calculate
          </Button>
        </CardActions>

      </CardContent>
    </Card>
  );
}

