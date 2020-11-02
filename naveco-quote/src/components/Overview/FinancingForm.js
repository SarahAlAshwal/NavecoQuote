import React, {useContext} from "react";
import { Form, Alert } from "tabler-react";
import { formatNumbers } from '../../helpers/formatNumbers';
import StateContext from '../../StateContext';

export default function FinancingForm(props) {
  const state = useContext(StateContext);
  
  return (
    <>
      {(state.loanFotmaError) && <Alert type="danger" hasExtraSpace>
          <div>{state.loanFotmaError}</div>
        </Alert>
      }
      <Form.FieldSet>
        <Form.Group label="Loan Amount" isRequired>
          <Form.Input
            id="loan"
            value={formatNumbers(state.totalGross)}
            disabled
          />
        </Form.Group>
        <Form.Group label="Loan term in years" isRequired>
          <Form.Input
            name="loanTermInYears"
            onChange={props.handleLoanChange}
            value={state.loanTermInYears}
          />
        </Form.Group>
        <Form.Group label="Interest Rate" isRequired>
          <Form.Input
            name="interestRate"
            onChange={props.handleLoanChange}
            value={state.interestRate}
          />
        </Form.Group>
      </Form.FieldSet>
    </>
  );
};