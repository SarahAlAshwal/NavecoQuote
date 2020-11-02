import React, {useContext} from "react";
import Typography from '@material-ui/core/Typography';
import { Card } from "tabler-react";
import { formatNumbers } from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';
import {newBill} from '../../helpers/overviewCalculation';


export default function FinancingForm(props) {
  const state = useContext(StateContext);
  return (
    <>
          <Card>
            <Card.Status color="blue" side />
            <Card.Header>
              <Card.Title>Payments</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <Typography color="textSecondary" gutterBottom>
                  Monthly Payments
                </Typography>
                <Typography variant="h5" component="h2">
                  ${formatNumbers(state.monthlyPayments)}
                </Typography>

              </div>
              <br />
              <div>
                <Typography color="textSecondary" gutterBottom>
                  New energy bill + Finance Payment
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  ${formatNumbers(state.monthlyPayments + newBill(state.acMonthly, state.monthlyAmount, state.year, state.rate))}
                </Typography>
              </div>
            </Card.Body>
          </Card>
    </>
  );
};