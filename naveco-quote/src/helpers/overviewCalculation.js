export function calculateAcAnnualForManyYears (acAnnual, rate, lifespan = 25, degradationRate = 0.005, escalationRate = 0.025) {
  console.log('calculateAcAnnualForManyYears', rate)
  let currentYear = new Date().getFullYear();
    const dataPerYear = {};
   
    dataPerYear[currentYear] = {acAnnual, amount: (acAnnual * rate)};
    for (let i = 1; i < lifespan; i++) {
      // power of every year is calculated based on prevous year's power factoring degradation rate
      const newPower = dataPerYear[currentYear].acAnnual - (dataPerYear[currentYear].acAnnual * degradationRate);
      // Amount is calculated based on newly calculated power factoring escalation rate
      let newRate = rate * ( 1 + escalationRate );
      dataPerYear[currentYear + 1] = {acAnnual: newPower, amount: (newPower  * newRate)};
      currentYear ++;
      rate = newRate;
    }
    return dataPerYear;
}

export function calculateAcMonthlyForManyYears (acMonthly, monthlyAmount, rate, lifespan = 25, degradationRate = 0.005, escalationRate = 0.025) {
  let currentYear = new Date().getFullYear();
  const monthlyDataPerYear = {};
  const powerConsumption = monthlyAmount / 0.12;
  //calculate the acMontly produced by the solar system and its value and the remaining grid bill
  //first element in monthlyDataPerYear object is the first year values based on these value the next years will be calculate
  monthlyDataPerYear[currentYear] = {acMonthly, acMonthlyValue: acMonthly.map(e => e * rate)  , grid: acMonthly.map(e => (e - powerConsumption) * rate)}
  let newRate = rate * ( 1 + escalationRate );
  for (let i = 1; i < lifespan; i++) {
    let acMontlyAfterDegredation = monthlyDataPerYear[currentYear].acMonthly.map(e => e - (e * degradationRate ));
    let acMontlyAfterDegredationValue = acMontlyAfterDegredation.map(e => e * newRate);
    let restOfGridAfterDegredation = acMontlyAfterDegredation.map(e => (e - powerConsumption) * newRate)
    
    monthlyDataPerYear[currentYear + 1] = {acMonthly: acMontlyAfterDegredation, acMonthlyValue: acMontlyAfterDegredationValue, grid : restOfGridAfterDegredation }
    currentYear ++;
    rate = newRate;
  }

  //console.log(monthlyDataPerYear);
  return monthlyDataPerYear;
}

export function calculteProduct(acMonthly, monthlyAmount, rate){
  const data = calculateAcMonthlyForManyYears (acMonthly, monthlyAmount, rate);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const chartData = {};
  let monthPower = [];

  for (const year in data) {
    for(let i=0; i< 12; i++){
      
      monthPower.push({month:months[i], power: Math.round(data[year].acMonthly[i])})
    }
    chartData[year] = monthPower;
    monthPower =[];
  }
  return chartData;

}

export function calculatePowerBillWithoutSolar(monthlyAmount, escalationRate = 0.025){
  const currentYear = new Date().getFullYear();
  const chartData = [];
  let year = currentYear;
  
  chartData.push({year: currentYear.toString() , value: monthlyAmount  })
  
  for (let i = 1; i < 25; i++) {
    let valueAfterEscalation = chartData[i-1].value * (1 + escalationRate);
    chartData.push({year: (year + 1).toString(), value: Math.round(valueAfterEscalation) })
    year ++;
  }
  return chartData;

}

export function calculateAcPowerValue(acAnnual, lifespan = 25, rate) {
  const data = calculateAcAnnualForManyYears (acAnnual,rate);
  const currentYear =  new Date().getFullYear();
  let year = currentYear;
  const chartData = [];
  for (let i = 0; i < lifespan; i ++) {
    chartData.push({year: year.toString(), value: Math.round(data[year].amount)});
    year ++;
  }
  return chartData
}



export function calculateSystemGrossCostAfterRebate(systemBaseCost, rebatePrc=0, rebateLimit=0) {
    const rebate = (systemBaseCost * rebatePrc) < rebateLimit ? systemBaseCost * rebatePrc : rebateLimit;
    return systemBaseCost * (1 + 0.13) - rebate;
  }

  export function calculateSystemNetCostAfterRebate(systemBaseCost, rebatePrc=0, rebateLimit=0) {
    const rebate = (systemBaseCost * rebatePrc) < rebateLimit ? systemBaseCost * rebatePrc : rebateLimit;
    return systemBaseCost - rebate;
  }

  export function calculateROI (profit, investment, projectLC = 25) {
    return profit / investment * 100 / projectLC;
  }

  function createData(acAnnual, rate, degradationRate, escalationRate) {
    const dataPerYear = {};
    let currentYear = new Date().getFullYear();
    dataPerYear[currentYear] = {acAnnual, amount: (acAnnual * rate)};
    let year = currentYear;
    for (let i = 1; i < 25; i++) {
      // power of every year is calculated based on prevous year's power factoring degradation rate
      const newPower = dataPerYear[year].acAnnual - (dataPerYear[year].acAnnual * degradationRate);
      // Amount is calculated based on newly calculated power factoring escalation rate
      dataPerYear[year + 1] = {acAnnual: newPower, amount: (newPower  * rate * ( 1 + escalationRate ))};
      year++;
    }
    return dataPerYear;
  }

  export function calculateProfit(acAnnual, rate, degradationRate = 0.005, escalationRate = 0.025) {
    let sum = 0;
    const dataPerYear = createData(acAnnual, rate, degradationRate, escalationRate);

  }

  export function totalSaving (acAnnual, rate) {
    const dataPerYear = calculateAcAnnualForManyYears(acAnnual, rate)
    console.log('inside total saving: ', dataPerYear);
    //the average value of power produced for the system's lifespan.
    let sum = 0;
    for  (let year in dataPerYear) {
      sum += dataPerYear[year].amount;
    }
    return sum;
  }

  export function totalOriginal(monthlyBill, rate, escalationRate = 0.025, lifespan = 25) {
    const firstYearBill = 12 * monthlyBill;
    const yearlyConsumption = firstYearBill/rate;
    let yearlyBill = []
    yearlyBill.push(firstYearBill)
    for (let i = 1; i < lifespan; i++) {
      // Amount is calculated based on newly calculated bill factoring escalation rate
      let newRate = rate * ( 1 + escalationRate );
      
      yearlyBill.push( yearlyConsumption * newRate);
      rate = newRate;
    }
    const sum = yearlyBill.reduce((total,number) => total + number);
    return sum;
  }

  export function newBill (acMonthly, monthlyAmount, year, rate) {
    //return (totalOriginal(monthlyBill) - totalSaving(acAnnual)) / (12 * 25);
    const yearsData = calculateAcMonthlyForManyYears(acMonthly, monthlyAmount, rate);
    const grid = yearsData[year].grid.reduce((total,value)=> total + value);
    return -1 * grid / 12;
  }

  export function calculatePayback(acAnnual, netCost, rate, lifespan = 25 ) {
    
    const sum = totalSaving(acAnnual, rate);
   
    const avg = sum / lifespan;

    //console.log(avg);

    return netCost / avg;
  };

  export function calculateMonthlyPaiment(principal, percentageRate, term) {
    const lengthOfLoan = term * 12;
    const rate = percentageRate / 100 / 12;
    return (principal * rate) / (1 - (Math.pow((1 + rate), lengthOfLoan * -1)));
  }