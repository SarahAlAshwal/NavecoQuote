import React from 'react';
import {
  calculatePayback,
  totalSaving, newBill, totalOriginal, calculateROI, calculteProduct
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
import YearsSlide from './YearsSlide';
import ProductBar from './ProductBar'

import "tabler-react/dist/Tabler.css";
import C3Chart from "react-c3js";

import {
  Tab,
  TabbedCard,
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

import { useVisualMode } from "../../hooks/useVisualMode";


const FINANCING = "FINANCING";
const WITHOUT_FINANCING = "WITHOUT_FINANCING";

export default function Overview (props) {
  const { mode, transition, back } = useVisualMode(
    //props.financing ? FINANCING : WITHOUT_FINANCING
    FINANCING
  );

  const rate = 0.12;

 

  return (
    <>
    
    <OverviewHeader/>
    <TabbedCard initialTab="Saving">
      <Tab title="Saving">
        <Grid.Row card deck>
          <Grid.Col width={20} sm={20} lg={20} >
            <SavingSummery saved = {totalSaving(props.state.acAnnual)}/>
          </Grid.Col>
          <Grid.Col width={20} sm={20} lg={20} >
           <Card title={"First Year Saving"}
            body = { <FirstYear kwhs = {props.state.acAnnual} amount = {props.state.acAnnual * rate}/>}/>
         </Grid.Col>
        </Grid.Row>
       </Tab>

      <Tab title="Price">
        <Grid.Row cards={true}>
          <Grid.Col width={20} sm={20} lg={20}>
            <Card>
              <PriceCard cost={props.state.totalGross} newBill={newBill(props.acMonthly, props.monthlyAmount, props.year)} />
            </Card>
          </Grid.Col>
          <Grid.Col width={20} sm={20} lg={20}>
            <Card>
              <OffsetBill solar={totalSaving(props.state.acAnnual) / totalOriginal(props.monthlyAmount)} />
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Tab>
      <Tab title={"Finance"}>
        <Grid.Row cards={true}>
          <Grid.Col width={20} sm={20} lg={20}>
            <Card>
             <PaybackCard
               paybackPeriod = {props.state.payback && mode === FINANCING ? props.state.payback : calculatePayback(props.state.acAnnual, props.state.totalNet)}
               roi = {props.state.roi && mode === FINANCING ? props.state.roi : calculateROI(totalSaving(props.state.acAnnual), props.state.totalGross)}> 
             </PaybackCard>
           </Card>
          </Grid.Col>
          <Grid.Col width={20} sm={20} lg={20}>
           <Card>
            {mode === FINANCING  && (
            <FinancingForm
              newBill={newBill(props.acMonthly, props.monthlyAmount, props.year)}
              cost={props.state.totalGross}
              interestRate={props.state.interestRate}
              loanTermInYears={props.state.loanTermInYears}
              monthlyPayments={props.state.monthlyPayments}
              handleLoanChange={props.handleLoanChange}
            />
            )}
           </Card>
          </Grid.Col>
        </Grid.Row>
      </Tab>
    </TabbedCard>

    <Grid.Row cards={false}>
        <Grid.Col width={20} sm={20} lg={20}>
          <YearsSlide year= {props.year} handleYearChange = {props.handleYearChange}/>  
        </Grid.Col>
        <Grid.Col width={20} sm={20} lg={20}>
          <SavingTable acMonthly={props.acMonthly} monthlyAmount={props.monthlyAmount} year={props.year} />
        </Grid.Col>
      </Grid.Row>
      
</>

  );
}