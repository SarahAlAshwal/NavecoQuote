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
    handleLoanChange,
    handleYearChange,
    handleInputs,
  } = useApplicationData();


  function onCalculate () {
    calculateMonthlyACPower(state.address, state.systemCapacity);
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
                handleInputs={handleInputs}
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
            <p>How it works explanation</p>
          </Route>
          
        </Switch>
      </Router>
    </main>
  );
}

export default App;
