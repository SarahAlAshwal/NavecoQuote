import React from 'react';
import {
  calculatePayback,
  calculateSystemNetCostAfterRebate,
  calculateROI,
  calculateSystemGrossCostAfterRebate,
  totalSaving, newBill, totalOriginal,
  calculateMonthlyPaiment
} from '../../helpers/overviewCalculation';
import OverviewHeader from './OverviewHeader';
import SavingSummery from './SavingSummery';
import FirstYear from './FirstYear';
import PriceCard from './PriceCard';
import PaybackCard from './PaybackCard';
import SavingTable from './SavingTable';
import OffsetBill from './OffsetBill';
import FinancingForm from './FinancingForm';
import Button from '@material-ui/core/Button';
import  '../../styles/OverviewStyle.css';

import { useVisualMode } from "../../hooks/useVisualMode";
import {useApplicationData} from "../../hooks/useApplicationData";

const FINANCING = "FINANCING";
const WITHOUT_FINANCING = "WITHOUT_FINANCING";

export default function Overview (props) {
  const { mode, transition, back } = useVisualMode(
    props.financing ? FINANCING : WITHOUT_FINANCING
  );

  const rate = 0.12;

  //totalGross is the Gross cost (Hardware (nb panel) + installation) after rebate
  const totalHardware = 20 * 925;
  const installation = 3000;
  const totalNet = calculateSystemNetCostAfterRebate(totalHardware + installation);
  const totalGross = calculateSystemGrossCostAfterRebate(totalHardware + installation);
  const monthlyPayments = calculateMonthlyPaiment(totalGross, props.state.interestRate, props.state.loanTermInYears);

  const {
    state,
    handleLoanChange
  } = useApplicationData();

  return (
  <>
    <OverviewHeader/>
    <SavingSummery saved = {totalSaving(props.acAnnual)}/>
    <FirstYear kwhs = {props.acAnnual} amount = {props.acAnnual * rate}/>
    <div className="cards">
      <PriceCard cost = {totalGross} newBill = {newBill(props.monthlyAmount, props.acAnnual)}/>
      <OffsetBill solar = {totalSaving(props.acAnnual)/totalOriginal(props.monthlyAmount)} />
      <PaybackCard
        paybackPeriod = {state.payback ? state.payback : calculatePayback(props.acAnnual, totalNet)}
        roi = {state.roi ? state.roi : calculateROI(totalSaving(props.acAnnual), totalNet)}> 
      </PaybackCard>
      

    </div>
      <Button size="small" variant="contained" color="primary" onClick={()=>{
        transition(FINANCING);
      }}>
        Financing
      </Button>
      <Button size="small" variant="contained" color="primary" onClick={()=>{
        transition(WITHOUT_FINANCING);
      }}>
        Without Financing
      </Button>
    {mode === FINANCING  && (
      <FinancingForm
        newBill={newBill(props.monthlyAmount, props.acAnnual)}
        cost={totalGross}
        interestRate={state.interestRate}
        loanTermInYears={state.loanTermInYears}
        monthlyPayments={state.monthlyPayments ? state.monthlyPayments : monthlyPayments}
        handleLoanChange={handleLoanChange}
    />
    )}
      
    <SavingTable acMontly={props.acMonthly} monthlyAmount={props.monthlyAmount} />
  </>


  );
}