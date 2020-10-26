import React from 'react';
import {
  calculatePayback,
  calculateSystemNetCostAfterRebate,
  calculateROI,
  calculateSystemGrossCostAfterRebate,
  totalSaving, newBill, totalOriginal,
} from '../../helpers/overviewCalculation';
import OverviewHeader from './OverviewHeader';
import SavingSummery from './SavingSummery';
import FirstYear from './FirstYear';
import PriceCard from './PriceCard';
import PaybackCard from './PaybackCard';
import SavingTable from './SavingTable';
import OffsetBill from './OffsetBill';
import FinancingForm from './FinancingForm';
import  '../../styles/OverviewStyle.css';

export default function Overview (props) {

  const systemBaseCost = 16520;
  const rate = 0.12;

  return (
  <>
    <OverviewHeader/>
    <SavingSummery saved = {totalSaving(props.acAnnual)}/>
    <FirstYear kwhs = {props.acAnnual} amount = {props.acAnnual * rate}/>
    <div className="cards">
      <PriceCard cost = {calculateSystemGrossCostAfterRebate(systemBaseCost)} newBill = {newBill(props.monthlyAmount, props.acAnnual)}/>
      <OffsetBill solar = {totalSaving(props.acAnnual)/totalOriginal(props.monthlyAmount)} />
      <PaybackCard
        paybackPeriod = {
          calculatePayback(props.acAnnual, calculateSystemNetCostAfterRebate(systemBaseCost))}
        roi = {
          calculateROI(totalSaving(props.acAnnual), calculateSystemNetCostAfterRebate(systemBaseCost))}> 
      </PaybackCard>
      

    </div>
      <FinancingForm
        newBill={newBill(props.monthlyAmount, props.acAnnual)}
        loan={props.state.loan}
        interestRate={props.state.interestRate}
        loanTermInYears={props.state.loanTermInYears}
        monthlyPayments={props.state.monthlyPayments}
        handleLoanChange={props.handleLoanChange}
    />
      
    <SavingTable acMontly={props.acMonthly} monthlyAmount={props.monthlyAmount} />
  </>


  );
}