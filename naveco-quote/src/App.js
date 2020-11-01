import React from 'react';
import './App.css';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import Navigator from "./components/FrontPage/navigator"
import Overview from './components/Overview'
import {useVisualMode} from './hooks/useVisualMode'
import FrontPage from "./components/FrontPage/frontPage";

import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GoogleMaps from './components/map';

const BILLINFO = 'BILLINFO';
const ADDRESS = "ADDRESS";
const CALCULATION = 'CALCULATION'
const FRONTPAGE = 'FRONTPAGE'

function App() {
  const { mode, transition, back } = useVisualMode(FRONTPAGE);
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

  function frontPage(){
    transition('ADDRESS')
  }
 
  return (
    <main >
      <Router>
      <Navigator />
        <Switch>
          <Route exact path = '/'>
            {mode === FRONTPAGE && <FrontPage frontPage={frontPage}/>}
            <div className='userInput'>
<<<<<<< HEAD
             {mode === ADDRESS && <GoogleMaps 
              address= {state.address}
              UpdateAddress={UpdateAddress}
              changeMode={changeMode}
              addressFotmaError={state.addressFotmaError}
              addressButtonDisabled={state.addressButtonDisabled}
              />}
=======
            
             {mode === ADDRESS && <GoogleMaps address= {state.address} UpdateAddress={UpdateAddress} changeMode={changeMode}/>}
>>>>>>> frontPage
              {mode === BILLINFO  && <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
                handleInputs={handleInputs}
                handleRateInput={handleRateInput}
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
                capacity={state.systemCapacity}
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
