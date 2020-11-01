import React from 'react';
import './App.css';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import Overview from './components/Overview'
import {useVisualMode} from './hooks/useVisualMode'
import StateContext from './StateContext';


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
    handleInputs,
    UpdateAddress,
    handleRateInput,
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
        <StateContext.Provider value={state}>
        <Header/>
        <Switch>
          <Route exact path = '/'>
            <div className='userInput'>
             {mode === ADDRESS && <GoogleMaps 
              UpdateAddress={UpdateAddress}
              changeMode={changeMode}
              />}
              {mode === BILLINFO  && <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
                handleInputs={handleInputs}
                handleRateInput={handleRateInput}
                calculate={onCalculate}
              />}
              {state.acMonthly[0] && mode === CALCULATION && <Overview 
                handleLoanChange={handleLoanChange}
                handleYearChange = {handleYearChange}
                />}
             
              
            </div>
          </Route>
          <Route path='/how'>
          </Route>
          
        </Switch>
        </StateContext.Provider>
      </Router>
    </main>
  );
}

export default App;
