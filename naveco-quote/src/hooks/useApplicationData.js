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
    message: "This is fairly average. It is likely that we can offset this entirely.",
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
    addressButtonDisabledNext: true,
    addressButtonDisabledGo: true,
    offset: 0.5
  });

  totalHardware = state.numberOfPanels * panelCost;

  
  // handle monthly amuont typed value in monthly form
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
    let message = "This is fairly average. It is likely that we can offset this entirely.";

    if (yearlyAmount > 3000) {
      message = "Above average. We'll do our best.";
    } else if (yearlyAmount <= 1800) {
      message = "Not bad, shouldn't be hard to offset this entirely.";
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

  // handle rate typed value in monthly form
  const handleRateInput = (evt) => {
    const rate = evt.target.value;
    let rateFotmaError = '';
    
    let powerPerMonth = state.monthlyAmount / rate;
    let powerPerYear = (state.monthlyAmount / rate) * 12;
    let yearlyAmount = state.monthlyAmount * 12;
    let message = "This is fairly average. It is likely that we can offset this entirely.";

    if (yearlyAmount > 3000) {
      message = "Above average. We'll do our best.";
    } else if (yearlyAmount <= 1800) {
      message = "Not bad, shouldn't be hard to offset this entirely.";
    }

    if(isNaN(rate)  || rate === '' || rate <= 0){  
      rateFotmaError = 'Rate field sould be a non-null number';
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

  // handle number of pannels typed value in monthly form
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

  const handleOffsetChange = (v) => {
    setState({
      ...state, 
      offset:  Math.round(v * 10) / 10,
      systemCapacity: ((state.powerPerYear / 1000) / 1.25 ) * state.offset //System Capacity AC
     

    })
  }

  //updates the address
  const UpdateAddress = (event) => {
    let address = event.target.value;
    let addressFotmaError = '';
    let addressButtonDisabledGo = false;
    if(address === ''){  
      addressFotmaError = ' field sould not be empty';
      addressButtonDisabledGo = true;
    }
    setState({
      ...state,
      address,
      addressFotmaError,
      addressButtonDisabledGo,
    });
  }

  const enableNextButton = () => {
    let addressButtonDisabledNext = false;
    setState({
      ...state,
      addressButtonDisabledNext,
    });
  }

  const disableButton = () => {
    let addressButtonDisabledNext = true;
    let addressButtonDisabledGo = true;
    setState({
      ...state,
      addressButtonDisabledNext,
      addressButtonDisabledGo,
    });
  }

  //handle intereset rate and number year term inputs
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
    // initialized with gross system cost in state
    let newSystemBaseCost = state.totalGross;

    // calculate monthlyPayments newSystemBaseCost based financing inputs
    if (state.loanTermInYears && state.interestRate) {
      monthlyPayments = calculateMonthlyPaiment(state.totalGross, state.interestRate, state.loanTermInYears);
      newSystemBaseCost = monthlyPayments * state.loanTermInYears * 12;
    }


    // recalculate ROI and payback based on new system cost
    const roi = calculateROI(totalSaving(state.acAnnual, state.rate), newSystemBaseCost);
    const payback = calculatePayback(state.acAnnual, state.totalNet + (newSystemBaseCost - state.totalGross), state.rate);

    const totalHardware = state.systemCapacity * 1.25 * 1000 * 2.7; //1.25 is a factor to calculate DC system cost 
    const baseCost = totalHardware;
    
    // recalculate net and gross system cost based on number of pannels filled
    const totalGross = calculateSystemGrossCostAfterRebate(baseCost);
    const totalNet = calculateSystemNetCostAfterRebate(baseCost);

    //const systemCapacity = state.numberOfPanels * panelCapacity / 1000;
   
    setState({
      ...state,
      monthlyPayments,
      newSystemBaseCost,
      roi,
      payback,
      totalGross,
      totalNet,
      
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


  const calculateMonthlyACPower = function(address, systemCapacity , moduleType = 1, losses = 18 , arrayType = 1, dataset = 'intl', invEff = 99, tilt=20, azimuth = 180){
    const apiKey = 'le83zKQd7t0wDgBD0cpTCwhsJZxPEjx9WmZsFbdg';
    systemCapacity = state.systemCapacity;
    address = formatAddress(state.address);
    // prepare the url with all the required inputs to the PVWatts API
    const url = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKey}&address=${address}&system_capacity=${systemCapacity}&azimuth=${azimuth}&tilt=${tilt}&array_type=${arrayType}&module_type=${moduleType}&losses=${losses}&inv_eff=${invEff}`;
    axios.get(url)
    .then((res)=>{        
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
    enableNextButton,
    disableButton,
    handleRateInput,
    handleOffsetChange
  }; 

}