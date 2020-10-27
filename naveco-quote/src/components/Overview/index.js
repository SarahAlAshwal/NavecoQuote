import React from 'react';
import {
  calculatePayback,
  totalSaving, newBill, totalOriginal, calculateROI
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

const FINANCING = "FINANCING";
const WITHOUT_FINANCING = "WITHOUT_FINANCING";

export default function Overview (props) {
  const { mode, transition, back } = useVisualMode(
    props.financing ? FINANCING : WITHOUT_FINANCING
  );

  const rate = 0.12;

 

  return (
  <>
    <OverviewHeader/>
    <SavingSummery saved = {totalSaving(props.state.acAnnual)}/>
    <FirstYear kwhs = {props.state.acAnnual} amount = {props.state.acAnnual * rate}/>
    <div className="cards">
      <PriceCard cost = {props.state.totalGross} newBill = {newBill(props.state.monthlyAmount, props.state.acAnnual)}/>
      <OffsetBill solar = {totalSaving(props.state.acAnnual)/totalOriginal(props.monthlyAmount)} />
      <PaybackCard
        paybackPeriod = {props.state.payback? props.state.payback : calculatePayback(props.state.acAnnual, props.state.totalNet)}
        roi = {props.state.roi ? props.state.roi : calculateROI(totalSaving(props.state.acAnnual), props.state.totalGross)}> 
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
        cost={props.state.totalGross}
        interestRate={props.state.interestRate}
        loanTermInYears={props.state.loanTermInYears}
        monthlyPayments={props.state.monthlyPayments}
        handleLoanChange={props.handleLoanChange}
    />
    )}
      
    <SavingTable acMontly={props.acMonthly} monthlyAmount={props.monthlyAmount} />
  </>


  );
}