import React from 'react';
import './App.css';
import Offset from './components/Offset';
import MonthlyForm from './components/MonthlyForm';

import {useApplicationData} from "./hooks/useApplicationData";

function App() {
  const {
    state,
    handleChangeAmount
  } = useApplicationData();
  return (
    <div className="App">
      <header className="App-header">
        <Offset/>
        <MonthlyForm
        handleChangeAmount={handleChangeAmount}
        state={state}
        />
      </header>
    </div>
  );
}

export default App;
