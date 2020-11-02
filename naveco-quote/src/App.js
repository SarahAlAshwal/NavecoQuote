import React from 'react';
import './App.css';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';
import Navigator from "./components/FrontPage/navigator"
import Overview from './components/Overview'
import {useVisualMode} from './hooks/useVisualMode'

import FrontPage from "./components/FrontPage/frontPage";

import StateContext from './StateContext';



import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GoogleMaps from './components/map';
import HowItWorks from './components/HowItWorks';

const BILLINFO = 'BILLINFO';
const ADDRESS = "ADDRESS";
const CALCULATION = 'CALCULATION'
const FRONTPAGE = 'FRONTPAGE'
const HOW ="HOW";

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

  function goHome(){
    transition(FRONTPAGE);
  }
  
  function goHow(){
    transition(HOW);
  }

  function close(){
    back();
  }
 
  return (
    <main >
      <Router>

      {! (mode === CALCULATION) && <Navigator goHome={goHome} goHow={goHow} />}

        <StateContext.Provider value={state}>
        

        <Switch>
          <Route exact path = '/'>
            {mode === FRONTPAGE && <FrontPage frontPage={frontPage} goHow={goHow}/>}
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
             {mode === HOW && <HowItWorks close={close}/>}
              
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
