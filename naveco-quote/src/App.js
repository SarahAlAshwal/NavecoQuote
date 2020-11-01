import React from 'react';
import './App.css';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import Overview from './components/Overview'
import {useVisualMode} from './hooks/useVisualMode'


import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GoogleMaps from './components/map';
import Offset from './components/Offset';

const BILLINFO = 'BILLINFO';
const ADDRESS = "ADDRESS";
const CALCULATION = 'CALCULATION';

function App() {
  const { mode, transition, back } = useVisualMode(ADDRESS);
  const {
    state,
    handleChangeAmount,
    calculateMonthlyACPower,
    handleLoanChange,
    handleYearChange,
    handleInputs,
    UpdateAddress,
    handleRateInput,
    handleOffsetChange,
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
             {mode === ADDRESS && <GoogleMaps 
              address= {state.address}
              UpdateAddress={UpdateAddress}
              changeMode={changeMode}
              addressFotmaError={state.addressFotmaError}
              addressButtonDisabled={state.addressButtonDisabled}
              />}
              {mode === BILLINFO  && <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
                handleInputs={handleInputs}
                handleRateInput={handleRateInput}
                calculate={onCalculate}
                handleChange={handleOffsetChange}
                offset= {state.offset}
              />}
              {state.acMonthly[0] && mode === CALCULATION && <Overview 
                acAnnual= {state.acAnnual}
                acMonthly={state.acMonthly}
                monthlyAmount={state.monthlyAmount}
                handleLoanChange={handleLoanChange}
                state={state}
                handleYearChange = {handleYearChange}
                year = {state.year}
                capacity={state.systemCapacity}
                />}
             
              
            </div>
          </Route>
          <Route path='/how'>
           
          </Route>
          
        </Switch>
      </Router>
    </main>
  );
}

export default App;
