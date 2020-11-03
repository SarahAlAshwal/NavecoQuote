import React, { useContext } from 'react';
import {
  calculteProduct, calculatePowerBillWithoutSolar, calculateAcPowerValue
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
import Environment from './environment';
import Charts from './Charts';
import StateContext from '../../StateContext';
import '../../styles/OverviewStyle.css';
import "tabler-react/dist/Tabler.css";


import {
  Tab,
  TabbedCard,
  Grid,
} from "tabler-react";

import { useVisualMode } from "../../hooks/useVisualMode";


const FINANCING = "FINANCING";

export default function Overview(props) {
  const state = useContext(StateContext);
  const { mode } = useVisualMode(FINANCING);


  return (
    <>
      <OverviewHeader goHome={props.goHome} goHow={props.goHow} />
      <TabbedCard initialTab="Saving">
        <Tab title="Saving">
          <Grid.Row card deck>
            <Grid.Col width={20} sm={20} lg={20} >
              <SavingSummery />
            </Grid.Col>
            <Grid.Col width={20} sm={20} lg={20} >
              <FirstYear />
            </Grid.Col>
          </Grid.Row>
        </Tab>
        <Tab title="Price">
          <Grid.Row cards={true}>
            <Grid.Col width={20} sm={20} lg={20}>
              <PriceCard />
            </Grid.Col>
            <Grid.Col width={20} sm={20} lg={20}>
              <OffsetBill />
            </Grid.Col>
          </Grid.Row>
        </Tab>
        <Tab title={"Finance"}>
          <Grid.Row cards={true}>
            <Grid.Col width={20} sm={20} lg={20}>
              {mode === FINANCING && (
                <FinancingForm handleLoanChange={props.handleLoanChange} />
              )}
            </Grid.Col>
            <Grid.Col>
              <FinancingResults />
            </Grid.Col>
            <Grid.Col>
              <PaybackCard>
              </PaybackCard>
            </Grid.Col>
          </Grid.Row>
        </Tab>
        <Tab title="Environment">
          <Environment />
        </Tab>
      </TabbedCard>
      <TabbedCard initialTab='Production'>
        <Tab title={"Production"}>
          <Grid.Row cards={true}>
            <Grid.Col width={20} sm={20} lg={20}  >
              <ProductBar data={calculteProduct(state.acMonthly, state.monthlyAmount, state.rate)} changedYear={state.year} />
            </Grid.Col>
          </Grid.Row>
        </Tab>
        <Tab title={"Yearly Power Value Without Solar"}>
          <Grid.Col width={20} sm={20} lg={20}  >
            <Charts data={calculatePowerBillWithoutSolar(state.monthlyAmount)} />
          </Grid.Col>
        </Tab>
        <Tab title={"Solar AC Power Value"}>
          <Grid.Col width={20} sm={20} lg={20}  >
            <Charts data={calculateAcPowerValue(state.acAnnual, state.rate)} />
          </Grid.Col>
        </Tab>
      </TabbedCard>


      <Grid.Row cards={false}>
        <Grid.Col width={20} sm={20} lg={20} >
          <YearsSlide handleYearChange={props.handleYearChange} />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row cards={true}>
        <SavingTable />
      </Grid.Row>
    </>

  );
}