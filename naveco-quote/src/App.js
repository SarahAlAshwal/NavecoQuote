import React from 'react';
import './App.css';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import Overview from './components/Overview'

import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  const {
    state,
    handleChangeAmount,
    calculateMonthlyACPower,
    handleLoanChange
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
              {!state.acMonthly[0]  && <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
                calculate={onCalculate}
              />}
              {state.acMonthly[0] && <Overview 
                acAnnual= {state.acAnnual}
                acMonthly={state.acMonthly}
                monthlyAmount={state.monthlyAmount}
                state={state}
                handleLoanChange={handleLoanChange}/>}
             
              
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
