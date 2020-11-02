import { useState, useEffect } from "react";
import axios from 'axios';
import {formatAddress} from './../helpers/formatAddress';


import { calculateMonthlyPaiment,
  calculatePayback,
  calculateSystemNetCostAfterRebate,
  calculateROI,
  calculateSystemGrossCostAfterRebate,
  totalSaving
} from '../helpers/overviewCalculation';

export function useApplicationData() {
  //const rate = 0.12;

   
  
  const installation = 3000;
  const panelCost = 925;
  const panelCapacity = 415;
  let totalHardware = 20 * panelCost;
  const totalNet = calculateSystemNetCostAfterRebate(totalHardware + installation);
  //totalGross is the Gross cost (Hardware (nb panel) + installation) after rebate
  const totalGross = calculateSystemGrossCostAfterRebate(totalHardware + installation);
  
  const [state, setState] = useState({
    monthlyAmount: 175,
    powerPerMonth: 175 / 0.12,
    yearlyAmount: 175 * 12,
    powerPerYear: (175 / 0.12) * 12,
    message: "This is fairly average. It is likely that we can offset this entirely. 😃",
    acMonthly:[],
    acAnnual:0,
    year: new Date().getFullYear(),
    interestRate: 4.75,
    loanTermInYears: 10,
    monthlyPayments: calculateMonthlyPaiment(totalGross, 4.75, 10),
    totalGross,
    totalNet,
    newSystemBaseCost: 0,
    payback: 0,
    roi: 0,
    numberOfPanels: 20,
    systemCapacity: 8.3,
    address:"",
    rate: 0.12,
    monthlyAmountError:'',
    rateAmountError:'',
    npFotmaError: '',
    loanFotmaError: '',
    addressFotmaError: '',
    addressButtonDisabled: true,
  });

  totalHardware = state.numberOfPanels * panelCost;

  
  const handleChangeAmount = (event) => {
    const input = event.target.value;
    let monthlyAmountError = '';
    if(isNaN(input)  || input === ''){  
      monthlyAmountError = 'Monthly amount sould be Number';
    }
    const monthlyAmount = Number(input);
    let powerPerMonth = input / state.rate;
    let powerPerYear = (input / state.rate) * 12;
    let yearlyAmount = input * 12;
    let message = "This is fairly average. It is likely that we can offset this entirely. 😃";

    if (yearlyAmount > 3000) {
      message = "Above average. We'll do our best. 😅";
    } else if (yearlyAmount <= 1800) {
      message = "Not bad, shouldn't be hard to offset this entirely. 😀";
    }
    if(isNaN(input)  || input === ''){  
      monthlyAmountError = 'Monthly amount sould be Number';
      powerPerMonth = 0;
      powerPerYear = 0;
      yearlyAmount = 0;
    }
    

    setState({
      ...state,
      monthlyAmount,
      powerPerMonth,
      powerPerYear,
      yearlyAmount,
      message,
      monthlyAmountError,
    });
  }

  const handleRateInput = (evt) => {
    const rate = evt.target.value;
    let rateFotmaError = '';
    
    let powerPerMonth = state.monthlyAmount / rate;
    let powerPerYear = (state.monthlyAmount / rate) * 12;
    let yearlyAmount = state.monthlyAmount * 12;
    let message = "This is fairly average. It is likely that we can offset this entirely. 😃";

    if (yearlyAmount > 3000) {
      message = "Above average. We'll do our best. 😅";
    } else if (yearlyAmount <= 1800) {
      message = "Not bad, shouldn't be hard to offset this entirely. 😀";
    }

    if(isNaN(rate)  || rate === ''){  
      rateFotmaError = 'Rate field sould be Number';
      powerPerMonth = 0;
      powerPerYear = 0;
      yearlyAmount = 0;
    }

    setState({
      ...state,
      powerPerMonth,
      powerPerYear,
      yearlyAmount,
      message,
      rate,
      rateFotmaError,
    });

  }

  const handleInputs = (evt) => {
    const numberOfPanels = evt.target.value;
    let npFotmaError = '';
    if(isNaN(numberOfPanels) || numberOfPanels === ''){  
      npFotmaError = ' Number of pannels sould be Number';
    }
    setState({
      ...state,
      numberOfPanels,
      npFotmaError,
    });
  };

  const handleYearChange = (event, newValue) => {
    setState({
      ...state,
      year: newValue
    })
  };  

  //updates the address
  const UpdateAddress = (event) => {
    let address = event.target.value;
    let addressFotmaError = '';
    let addressButtonDisabled = false;
    if(address === ''){  
      addressFotmaError = ' field sould not be empty';
      addressButtonDisabled = true;
    }
    setState({
      ...state,
      address,
      addressFotmaError,
      addressButtonDisabled,
    });
  }

  const handleLoanChange = (evt) => {
    let value = evt.target.value;
    let loanFotmaError = '';
    if(isNaN(value) || value === ''){  
      loanFotmaError = ' field sould be Number';
      value = '';
    }

    setState({
      ...state,
      [evt.target.name]: value,
      loanFotmaError,
    });
  }


  useEffect(() => {
    let monthlyPayments = 0;
    let newSystemBaseCost = state.totalGross;

    if (state.loanTermInYears && state.interestRate) {
      monthlyPayments = calculateMonthlyPaiment(state.totalGross, state.interestRate, state.loanTermInYears);
      newSystemBaseCost = monthlyPayments * state.loanTermInYears * 12;
      console.log('inside if', state.roi)
    }

    const roi = calculateROI(totalSaving(state.acAnnual, state.rate), newSystemBaseCost);
    const payback = calculatePayback(state.acAnnual, state.totalNet + (newSystemBaseCost - state.totalGross), state.rate);

    const totalHardware = state.numberOfPanels * panelCost;
    const baseCost = totalHardware + installation;

    const totalGross = calculateSystemGrossCostAfterRebate(baseCost);
    const totalNet = calculateSystemNetCostAfterRebate(baseCost);

    const systemCapacity = state.numberOfPanels * panelCapacity / 1000;


    console.log('inside useEffect', roi);
    console.log('inside useEffect other values:' ,totalSaving(state.acAnnual), state.acAnnual, newSystemBaseCost);
    
    setState({
      ...state,
      monthlyPayments,
      newSystemBaseCost,
      roi,
      payback,
      totalGross,
      totalNet,
      systemCapacity,
    });

  }, [
    state.interestRate,
    state.loanTermInYears,
    state.newSystemBaseCost,
    state.acAnnual,
    state.totalNet,
    state.totalGross,
    state.payback,
    state.roi,
    state.numberOfPanels,
  ]);


  const calculateMonthlyACPower = function(address, systemCapacity , moduleType = 1, losses = 10.2, arrayType = 1, dataset = 'intl', invEff = 99, tilt=20, azimuth = 180){
    const apiKey = 'le83zKQd7t0wDgBD0cpTCwhsJZxPEjx9WmZsFbdg';
    //address= "14446+Evangeline+Trail+Wilmot+NS";
    systemCapacity = state.systemCapacity;
   
    //address= "14446+Evangeline+Trail+Wilmot+NS";
    //address= "14446+Evangeline+Trail";
    address = formatAddress(state.address);
   
  
    //https://developer.nrel.gov/api/pvwatts/v6.json?api_key=le83zKQd7t0wDgBD0cpTCwhsJZxPEjx9WmZsFbdg&address=243+Monterey+Drive&system_capacity=8.3&azimuth=180&tilt=20&array_type=1&module_type=1&losses=10.2&inv_eff=99
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
    handleYearChange,
    handleLoanChange,
    handleInputs,
    UpdateAddress,
    handleRateInput,
  }; 

}