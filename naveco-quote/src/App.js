import React, { useEffect } from 'react';
import './App.css';
import Offset from './components/Offset';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header';

import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  const {
    state,
    handleChangeAmount,
    calculateMonthlyACPower
  } = useApplicationData();
  useEffect(()=>{
    calculateMonthlyACPower();
  },[])
  
  return (
    <main >
      <Router>
        <Header/>
        <Switch>
          <Route exact path = '/'>
            <div className='userInput'>
              <MonthlyForm
                handleChangeAmount={handleChangeAmount}
                state={state}
              />
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
