import React from 'react';
import './App.css';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import Overview from './components/Overview'

import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GoogleMaps from './components/map';

function App() {
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
  }
 
  return (
    <main >
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/'>
            <div className='userInput'>
              {!state.acMonthly[0] && <GoogleMaps address= {state.address} UpdateAddress={UpdateAddress}/>}
              {!state.acMonthly[0]  && <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
                calculate={onCalculate}
              />}
              {state.acMonthly[0] && <Overview 
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
