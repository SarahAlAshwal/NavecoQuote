import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    fontSize: '15px',
  },
  typography:{
    fontSize: 'medium',
  }
});


export default function MonthlyForm(props) {
  const classes = useStyles();
  
  return (

    <Card className={classes.root} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          What do you spend each month on power?
        </Typography>
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <TextField required id="standard-required" label="Required" 
            defaultValue={props.state.monthlyAmount ? props.state.monthlyAmount : ""}
            onChange={props.handleChangeAmount}
            data-testid="amount-input"
          /> 
        </form>
        <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
          {props.state.message}
        </Typography>
        <Typography  className={classes.typography} variant="body2" color="textSecondary" component="p">
          {props.state.powerPerMonth} kWhs used per month
        </Typography>
        <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
          {props.state.yearlyAmount}  spent on power each year
        </Typography>
        <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
          {props.state.powerPerYear}  kWhs used per year
        </Typography>
        <CardActions>
          <Button variant="contained" color="primary" onClick = {() => props.calculate()} >
            Calculate
          </Button>
        </CardActions>
        
      </CardContent>
      </Card>
  );
}

