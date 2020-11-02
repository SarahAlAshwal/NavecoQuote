import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from "../styles/MonthlyFormStyle";
import { formatNumbers } from '../helpers/formatNumbers';
import { Card, Grid, Form, Alert, Header } from "tabler-react";
import StateContext from '../StateContext';


const useStyles = makeStyles(styles);

export default function MonthlyForm(props) {
  const state = useContext(StateContext);
  const classes = useStyles();

  return (
    <Grid.Row>
      <Grid.Col>
        <Card lg={10} deck>
          <div>
            <Header.H3>What do you spend each month on power?</Header.H3>
            {!(state.npFotmaError || state.rateFotmaError || state.monthlyAmountError) && <Alert type="primary" hasExtraSpace>
              {state.message}
            </Alert>
            }
            {(state.npFotmaError || state.rateFotmaError || state.monthlyAmountError) && <Alert type="danger" hasExtraSpace>
              <div>{state.monthlyAmountError}</div>
              <div>{state.npFotmaError}</div>
              <div>{state.rateFotmaError}</div>
            </Alert>
            }
            <Form.FieldSet>
              <Form.Group label="Monthly Amount" isRequired>
                <Form.Input
                  name="monthlyAmount"
                  onChange={props.handleChangeAmount}
                  value={state.monthlyAmount ? state.monthlyAmount : ""}
                />
              </Form.Group>
              <Form.Group label="Number of panels" isRequired>
                <Form.Input
                  name="numberOfPanels"
                  onChange={props.handleInputs}
                  value={state.numberOfPanels ? state.numberOfPanels : ""}
                />
              </Form.Group>
              <Form.Group label="Rate" isRequired>
                <Form.Input
                  name="rate"
                  onChange={props.handleRateInput}
                  value={state.rate ? state.rate : ""}
                />
              </Form.Group>
            </Form.FieldSet>
            <Button 
              variant="contained" 
              disabled={state.npFotmaError || state.rateFotmaError || state.monthlyAmountError} 
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
                  {formatNumbers(state.powerPerMonth)}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {'kWhs used per month'}
                </Typography>
                <br />
                <Typography gutterBottom variant="h5" component="h2">
                  {`$${formatNumbers(state.yearlyAmount)}`}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {'spent on power each year'}
                </Typography>
                <br />
                <Typography gutterBottom variant="h5" component="h2">
                  {formatNumbers(state.powerPerYear)}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {'kWhs used per year'}
                </Typography>
                
              </div>
            </Card.Body>
          </Card>
        </Grid.Col>
    </Grid.Row>
  );
}