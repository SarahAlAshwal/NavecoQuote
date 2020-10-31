import React from 'react';
import {
  calculatePayback,
  totalSaving, newBill, totalOriginal, calculateROI, calculteProduct, calculatePowerBillWithoutSolar, calculateAcPowerValue
} from '../../helpers/overviewCalculation';
import OverviewHeader from './OverviewHeader';
import SavingSummery from './SavingSummery';
import FirstYear from './FirstYear';
import PriceCard from './PriceCard';
import PaybackCard from './PaybackCard';
import SavingTable from './SavingTable';
import OffsetBill from './OffsetBill';
import FinancingForm from './FinancingForm';
import FinancingResults from './FinancingResults';
import YearsSlide from './YearsSlide';
import ProductBar from './ProductBar';
import Environment from '../environment';
import Charts from './Charts';

import '../../styles/OverviewStyle.css';
import "tabler-react/dist/Tabler.css";
import C3Chart from "react-c3js";

import {
  Tab,
  TabbedCard,
  Grid,
  Card,
} from "tabler-react";

import { useVisualMode } from "../../hooks/useVisualMode";


const FINANCING = "FINANCING";
const WITHOUT_FINANCING = "WITHOUT_FINANCING";

export default function Overview(props) {
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
            <SavingSummery saved = {totalSaving(props.state.acAnnual, props.state.rate)} capacity = {props.capacity}/>
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
              <PriceCard cost={props.state.totalGross} newBill={newBill(props.acMonthly, props.monthlyAmount, props.year, props.state.rate)} />
            </Card>
          </Grid.Col>
          <Grid.Col width={20} sm={20} lg={20}>
            <Card>
              <OffsetBill solar={totalSaving(props.state.acAnnual, props.state.rate) / totalOriginal(props.monthlyAmount, props.state.rate)} />
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Tab>
        <Tab title={"Finance"}>
          <Grid.Row cards={true}>
            <Grid.Col width={20} sm={20} lg={20}>
                {mode === FINANCING && (
                  <FinancingForm
                    newBill={newBill(props.acMonthly, props.monthlyAmount, props.year, props.state.rate)}
                    cost={props.state.totalGross}
                    interestRate={props.state.interestRate}
                    loanTermInYears={props.state.loanTermInYears}
                    monthlyPayments={props.state.monthlyPayments}
                    handleLoanChange={props.handleLoanChange}
                    loanFotmaError={props.state.loanFotmaError}
                  />
                )}
            </Grid.Col>
            <Grid.Col>
            {mode === FINANCING && (
                  <FinancingResults
                    newBill={newBill(props.acMonthly, props.monthlyAmount, props.year, props.state.rate)}
                    monthlyPayments={props.state.monthlyPayments}
                  />
                )}
            </Grid.Col>
            <Grid.Col>
                <PaybackCard
                  paybackPeriod={props.state.payback && mode === FINANCING ? props.state.payback : calculatePayback(props.state.acAnnual, props.state.totalNet, props.rate)}
                  roi={props.state.roi && mode === FINANCING ? props.state.roi : calculateROI(totalSaving(props.state.acAnnual, props.state.rate), props.state.totalGross)}>
                </PaybackCard>
            </Grid.Col>
          </Grid.Row>
        </Tab>
        <Tab title="Environment">
          <Environment state={Math.round(totalSaving(props.state.acAnnual, props.state.rate))}/>
        </Tab>
      </TabbedCard>

    <TabbedCard initialTab = 'Production'>
      <Tab title={"Production"}>
      <Grid.Row cards={true}>
        <Grid.Col width={20} sm={20} lg={20}  >
          <ProductBar data={calculteProduct(props.acMonthly,props.monthlyAmount, props.state.rate)} changedYear={props.year}/>
        </Grid.Col>
    </Grid.Row>
      </Tab>
      <Tab title ={"Yearly Power Value Without Solar"}>
        <Grid.Col width={20} sm={20} lg={20}  >
          <Charts data={calculatePowerBillWithoutSolar(props.monthlyAmount) }/>
        </Grid.Col>
      </Tab>
      <Tab title = {"Solar AC Power Value"}>
      <Grid.Col width={20} sm={20} lg={20}  >
        <Charts data = {calculateAcPowerValue(props.acAnnual, props.state.rate)}/>
      </Grid.Col>
    </Tab>
    </TabbedCard>
    
    
    <Grid.Row cards={false}>
        <Grid.Col width={20} sm={20} lg={20} >
          <YearsSlide year= {props.year} handleYearChange = {props.handleYearChange}/>  
        </Grid.Col>
      </Grid.Row>
      <Grid.Row cards={true}>
          <SavingTable acMonthly={props.acMonthly} monthlyAmount={props.monthlyAmount} year={props.year} rate={props.state.rate} />
      </Grid.Row>
      
</>

  );
}