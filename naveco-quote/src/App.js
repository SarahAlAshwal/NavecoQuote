import React from 'react';
import './App.css';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import Overview from './components/Overview'
import {useVisualMode} from './hooks/useVisualMode'

import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GoogleMaps from './components/map';

const BILLINFO = 'BILLINFO';
const ADDRESS = "ADDRESS";
const CALCULATION = 'CALCULATION'

function App() {
  const { mode, transition, back } = useVisualMode(ADDRESS);
  const {
    state,
    handleChangeAmount,
    calculateMonthlyACPower,
    handleLoanChange,
    handleYearChange,
    UpdateAddress
  } = useApplicationData();


  function onCalculate () {
    calculateMonthlyACPower();
    transition('CALCULATION');
  }

  function changeMode(){
    transition('BILLINFO')
  }
 
  return (
    <main >
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/'>
            <div className='userInput'>
             {mode === ADDRESS && <GoogleMaps address= {state.address} UpdateAddress={UpdateAddress} changeMode={changeMode}/>}
              {mode === BILLINFO  && <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
                calculate={onCalculate}
              />}
              {state.acMonthly[0] && mode === CALCULATION && <Overview 
                acAnnual= {state.acAnnual}
                acMonthly={state.acMonthly}
                monthlyAmount={state.monthlyAmount}
                handleLoanChange={handleLoanChange}
                state={state}
                handleYearChange = {handleYearChange}
                year = {state.year}
                />}
             
              
            </div>
          </Route>
          <Route path='/how'>
            <GoogleMaps address= {state.address} UpdateAddress={UpdateAddress}/>
          </Route>
          
        </Switch>
      </Router>
    </main>
  );
}

export default App;
