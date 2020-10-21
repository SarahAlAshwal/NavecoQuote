import React from 'react';
import './App.css';
import Offset from './components/Offset';
import MonthlyForm from './components/MonthlyForm';
import {useApplicationData} from "./hooks/useApplicationData";
import Header from './components/Header'

function App() {
  const {
    state,
    handleChangeAmount
  } = useApplicationData();
  return (
    <main >
      <Header/>
      <div className="userInput">
        <MonthlyForm
        handleChangeAmount={handleChangeAmount}
        state={state}
        />
     
    </div>

      
    </main>
  );
}

export default App;
