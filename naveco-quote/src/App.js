import React, { useEffect } from 'react';
import './App.css';
import Offset from './components/Offset';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import SavingTable from './components/SavingTable';
import PaybackCard from './components/PaybackCard';
import PriceCard from './components/PriceCard';

import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  const {
    state,
    handleChangeAmount,
    calculateMonthlyACPower,
    calculatePayback,
    calculateSystemGrossCostAfterRebate,
    calculateSystemNetCostAfterRebate,
    calculateROI
  } = useApplicationData();


  function onCalculate () {
    calculateMonthlyACPower();
  }

  const systemBaseCost = 16520;
  const profit = 10000;
  
  return (
    <main >
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/'>
            <div className='userInput'>
              {!state.acMonthly[0]  && <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
                calculate={onCalculate}
              />}
              {state.acMonthly[0] && <PriceCard
                cost = {calculateSystemGrossCostAfterRebate(systemBaseCost)}
              />}
              {state.acMonthly[0] && <PaybackCard 
                paybackPeriod = {
                  calculatePayback(
                    state.acAnnual,
                    calculateSystemNetCostAfterRebate(systemBaseCost)
                    )
                  }
                roi = {
                  calculateROI(
                    profit,
                    calculateSystemNetCostAfterRebate(systemBaseCost)
                  )
                }
              />}
              {state.acMonthly[0] && <SavingTable acMontly = {state.acMonthly} monthlyAmount = {state.monthlyAmount}/>}
              
            </div>
          </Route>
          <Route path='/how'>
            <p>How it works explanation</p>
          </Route>
          
        </Switch>
      </Router>
    </main>
  );
}

export default App;
