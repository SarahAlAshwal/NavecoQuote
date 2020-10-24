import React from 'react';
import {calculatePayback,calculateSystemNetCostAfterRebate,calculateROI, calculateSystemGrossCostAfterRebate} from '../../helpers/overviewCalculation';
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
  const profit = 10000;

  return (
  <>
    <OverviewHeader/>
    <SavingSummery/>
    <FirstYear/>
    <div className="cards">
      <PriceCard cost = {calculateSystemGrossCostAfterRebate(systemBaseCost)}/>
      <OffsetBill/>
      <PaybackCard
        paybackPeriod = {
          calculatePayback(props.acAnnual, calculateSystemNetCostAfterRebate(systemBaseCost))}
        roi = {
          calculateROI(profit, calculateSystemNetCostAfterRebate(systemBaseCost))}> 
      </PaybackCard> 

    </div>
   
      
    <SavingTable acMontly={props.acMonthly} monthlyAmount={props.monthlyAmount} />
  </>


  );
}