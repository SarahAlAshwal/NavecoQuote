import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
//import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardActions } from "@material-ui/core";
import styles from "../styles/MonthlyFormStyle";
import { formatNumbers } from '../helpers/formatNumbers';
import { Card, Grid, Form, Alert, Header } from "tabler-react";
import Offset from "./Offset";
import { defaultProps } from "react-circular-input/dist/CircularTrack";


const useStyles = makeStyles(styles);

export default function MonthlyForm(props) {
  const classes = useStyles();

  return (
    <Grid.Row>
      <Grid.Col>
        <Card lg={10} deck>
          <div>
            <Header.H3>What do you spend each month on power?</Header.H3>
            {!(props.state.npFotmaError || props.state.rateFotmaError || props.state.monthlyAmountError) && <Alert type="primary" hasExtraSpace>
              {props.state.message}
            </Alert>
            }
            {(props.state.npFotmaError || props.state.rateFotmaError || props.state.monthlyAmountError) && <Alert type="danger" hasExtraSpace>
              <div>{props.state.monthlyAmountError}</div>
              <div>{props.state.npFotmaError}</div>
              <div>{props.state.rateFotmaError}</div>
            </Alert>
            }
            <Form.FieldSet>
              <Form.Group label="Monthly Amount" isRequired>
                <Form.Input
                  name="monthlyAmount"
                  onChange={props.handleChangeAmount}
                  value={props.state.monthlyAmount ? props.state.monthlyAmount : ""}
                />
              </Form.Group>
              {/* <Form.Group label="Number of panels" isRequired>
                <Form.Input
                  name="numberOfPanels"
                  onChange={props.handleInputs}
                  value={props.state.numberOfPanels ? props.state.numberOfPanels : ""}
                />
              </Form.Group> */}
              <Form.Group label="Rate" isRequired>
                <Form.Input
                  name="rate"
                  onChange={props.handleRateInput}
                  value={props.state.rate ? props.state.rate : ""}
                />
              </Form.Group>
            </Form.FieldSet>
            <Button 
              variant="contained" 
              disabled={props.state.npFotmaError || props.state.rateFotmaError || props.state.monthlyAmountError} 
              color="primary" 
              onClick={() => props.calculate()} >
              Calculate
            </Button>
          </div>
        </Card>
      </Grid.Col>
      <Grid.Col>
          <Card>
            <Card.Status color="blue" side />
            <Card.Header>
              <Card.Title>Current Comsumption</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  {formatNumbers(props.state.powerPerMonth)}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {'kWhs used per month'}
                </Typography>
                <br />
                <Typography gutterBottom variant="h5" component="h2">
                  {`$${formatNumbers(props.state.yearlyAmount)}`}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {'spent on power each year'}
                </Typography>
                <br />
                <Typography gutterBottom variant="h5" component="h2">
                  {formatNumbers(props.state.powerPerYear)}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {'kWhs used per year'}
                </Typography>
                
              </div>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col>
          <Offset offset ={props.offset} handleChange={props.handleChange}/>
        </Grid.Col>
    </Grid.Row>
  );
}