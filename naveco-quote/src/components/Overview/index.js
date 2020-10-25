import React from 'react';
import {
  calculatePayback,
  calculateSystemNetCostAfterRebate,
  calculateROI,
  calculateSystemGrossCostAfterRebate,
  calculateNewBill,
  calculateProfit
} from '../../helpers/overviewCalculation';
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

  return (
  <>
    <OverviewHeader/>
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