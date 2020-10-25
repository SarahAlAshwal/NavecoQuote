import React from 'react';
<<<<<<< HEAD
import {
  calculatePayback,
  calculateSystemNetCostAfterRebate,
  calculateROI,
  calculateSystemGrossCostAfterRebate,
  calculateNewBill,
  calculateProfit
} from '../../helpers/overviewCalculation';
=======
import {calculatePayback,calculateSystemNetCostAfterRebate,calculateROI, calculateSystemGrossCostAfterRebate, totalSaving, newBill, totalOriginal} from '../../helpers/overviewCalculation';
>>>>>>> overview
import OverviewHeader from './OverviewHeader';
import SavingSummery from './SavingSummery';
import FirstYear from './FirstYear';
import PriceCard from './PriceCard';
import PaybackCard from './PaybackCard';
import SavingTable from './SavingTable';
import OffsetBill from './OffsetBill';
import  '../../styles/OverviewStyle.css';

export default function Overview (props) {

  const systemBaseCost = 16520;
<<<<<<< HEAD
=======
  const profit = 10000;
  const rate = 0.12;
>>>>>>> overview

  return (
  <>
    <OverviewHeader/>
<<<<<<< HEAD
    <SavingSummery/>
    <FirstYear
      kwhs = {props.acAnnual}
      amount={'$' + (props.acAnnual * 0.12)}
    />
    <div className="cards">
      <PriceCard 
        cost = {calculateSystemGrossCostAfterRebate(systemBaseCost)}
        newBill = {calculateNewBill(props.monthlyAmount, props.acAnnual * 0.12 / 12)}
      />
      <OffsetBill/>
=======
    <SavingSummery saved = {totalSaving(props.acAnnual)}/>
    <FirstYear kwhs = {props.acAnnual} amount = {props.acAnnual * rate}/>
    <div className="cards">
      <PriceCard cost = {calculateSystemGrossCostAfterRebate(systemBaseCost)} newBill = {newBill(props.monthlyAmount, props.acAnnual)}/>
      <OffsetBill solar = {totalSaving(props.acAnnual)/totalOriginal(props.monthlyAmount)} />
>>>>>>> overview
      <PaybackCard
        paybackPeriod = {
          calculatePayback(props.acAnnual, calculateSystemNetCostAfterRebate(systemBaseCost))}
        roi = {
          calculateROI(calculateProfit(props.acAnnual), calculateSystemNetCostAfterRebate(systemBaseCost))}> 
      </PaybackCard> 

    </div>
   
      
    <SavingTable acMontly={props.acMonthly} monthlyAmount={props.monthlyAmount} />
  </>


  );
}