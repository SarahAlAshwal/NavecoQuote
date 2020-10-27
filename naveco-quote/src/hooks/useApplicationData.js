import { useState, useEffect } from "react";
import axios from 'axios';

import { calculateROI, calculatePayback, calculateMonthlyPaiment } from '../helpers/overviewCalculation';

export function useApplicationData() {
  const rate = 0.12;


  const [state, setState] = useState({
    monthlyAmount: 175,
    powerPerMonth: 1094,
    yearlyAmount: 175 * 12,
    powerPerYear: 1094 * 12,
    message: "This is fairly average. It is likely that we can offset this entirely. 😃",
    acMonthly:[],
    acAnnual:0,
    interestRate: 4.75,
    loanTermInYears: 10,
    //monthlyPayments: calculateMonthlyPaiment(19745, 4.75, 10),
    monthlyPayments: 0,
    systemBaseCost:0,
    newSystemBaseCost: 0
  });

  const handleChangeAmount = (event) => {
    const input = parseFloat(event.target.value);
    const monthlyAmount = input;
    const powerPerMonth = input / rate;
    const powerPerYear = (input / rate) * 12;
    const yearlyAmount = input * 12;
    let message = "This is fairly average. It is likely that we can offset this entirely. 😃";

    if (yearlyAmount > 3000) {
      message = "Above average. We'll do our best. 😅";
    } else if (yearlyAmount <= 1800) {
      message = "Not bad, shouldn't be hard to offset this entirely. 😀";
    }


    setState({
      ...state,
      monthlyAmount,
      powerPerMonth,
      powerPerYear,
      yearlyAmount,
      message
    });
  }



  const handleLoanChange = (evt) => {
    const value = evt.target.value;
    const systemBaseCost = document.getElementById('loan').value;

    setState({
      ...state,
      [evt.target.name]: parseFloat(value),
      systemBaseCost
    });
  }

  useEffect(() => {
    const monthlyPayments = calculateMonthlyPaiment(state.systemBaseCost, state.interestRate, state.loanTermInYears);
    
    const newSystemBaseCost = monthlyPayments * state.loanTermInYears * 12;

    console.log("newSystemBaseCost ", newSystemBaseCost);

    //const roi = calculateROI(totalSaving(props.acAnnual), newSystemBaseCost);
    //const payback = calculatePayback();
    
    setState({
      ...state,
      monthlyPayments,
      newSystemBaseCost,
      //roi,
      //payback
    });

  }, [state.interestRate, state.loanTermInYears,state.newSystemBaseCost]);


  const calculateMonthlyACPower = function(address, systemCapacity = 8.3, moduleType = 1, losses = 10.2, arrayType = 1, dataset = 'intl', invEff = 99, tilt=20, azimuth = 180){
    const apiKey = 'le83zKQd7t0wDgBD0cpTCwhsJZxPEjx9WmZsFbdg';
    address= "14446+Evangeline+Trail+Wilmot+NS";
  

      //const url = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKey}&addresss=${address}&system_capacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&array_type=${arrayType}&module_type=${moduleType}&losses=${losses}&dataset=${dataset}&inv_eff=${invEff}`;
      //const url=' https://developer.nrel.gov/api/pvwatts/v6.json?api_key=DEMO_KEY&lat=40&lon=-105&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10'
      //const url = 'https://developer.nrel.gov/api/pvwatts/v6.json?api_key=le83zKQd7t0wDgBD0cpTCwhsJZxPEjx9WmZsFbdg&address=14446+Evangeline+Trail+Wilmot+NS&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10'
      const url = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKey}&address=${address}&system_capacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&array_type=${arrayType}&module_type=${moduleType}&losses=${losses}&inv_eff=${invEff}`;
      axios.get(url)
      .then((res)=>{

        //setState(prev => ({ ...prev, acMonthly: res.data.outputs.ac_monthly, acAnnual: res.data.outputs.ac_annual}));

        setState({
          ...state,
          acMonthly:res.data.outputs.ac_monthly,
          acAnnual:res.data.outputs.ac_annual});
      
      })
      
      .catch((err)=> {
        console.log(err);
      })
  }
  return {
    state,
    handleChangeAmount,
    calculateMonthlyACPower,
    handleLoanChange
  }; 

}