import React from 'react';
import './App.css';
import Offset from './components/Offset';
import MonthlyForms from './components/MonthlyForm'
import Header from './components/Header'

function App() {
  return (
    <main >
      <Header/>
      <div className="userInput">
        <Offset/>
        <MonthlyForms/>
      </div>
      
    </main>
  );
}

export default App;
