import React from 'react';
import {
  calculatePayback,
  calculateSystemNetCostAfterRebate,
  calculateROI,
  calculateSystemGrossCostAfterRebate,
  calculateNewBill,
  calculateProfit,
  totalSaving, newBill, totalOriginal
} from '../../helpers/overviewCalculation';
import OverviewHeader from './OverviewHeader';
import SavingSummery from './SavingSummery';
import FirstYear from './FirstYear';
import PriceCard from './PriceCard';
import PaybackCard from './PaybackCard';
import SavingTable from './SavingTable';
import OffsetBill from './OffsetBill';
import  '../../styles/OverviewStyle.css';
import YearsSlide from './YearsSlide';

export default function Overview (props) {

  const systemBaseCost = 16520;
  const profit = 10000;
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
          calculateROI(calculateProfit(props.acAnnual), calculateSystemNetCostAfterRebate(systemBaseCost))}> 
      </PaybackCard> 

    </div>
   
    <YearsSlide year= {props.year} handleYearChange = {props.handleYearChange}/>  
    <SavingTable acMonthly={props.acMonthly} monthlyAmount={props.monthlyAmount} />
  </>


  );
}