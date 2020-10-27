export function calculateAcAnnualForManyYears (acAnnual, lifespan = 25, rate = 0.12, degradationRate = 0.005, escalationRate = 0.029) {

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



export function calculateSystemGrossCostAfterRebate(systemBaseCost) {
  
    const rebate = (systemBaseCost * 0.25) < 6000 ? systemBaseCost * 0.25 : 6000;
    return systemBaseCost * (1 + 0.13) - rebate;
  }

  export function calculateSystemNetCostAfterRebate(systemBaseCost) {
    const rebate = (systemBaseCost * 0.25) < 6000 ? systemBaseCost * 0.25 : 6000;
    return systemBaseCost - rebate;
  }

  export function calculateROI (profit, investment, projectLC = 25) {
    return profit / investment * 100 / projectLC;
  }

  export function totalSaving (acAnnual) {
    const dataPerYear = calculateAcAnnualForManyYears(acAnnual)
    //the average value of power produced for the system's lifespan.
    let sum = 0;
    for  (let year in dataPerYear) {
      sum += dataPerYear[year].amount;
    }
    return sum;
  }

  export function totalOriginal(monthlyBill, escalationRate = 0.029, lifespan = 25, rate = 0.12) {
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

  export function newBill (monthlyBill, acAnnual) {
    return (totalOriginal(monthlyBill) - totalSaving(acAnnual)) / (12 * 25);
  }

  export function calculatePayback(acAnnual, netCost, lifespan = 25 ) {
    
    const sum = totalSaving(acAnnual);
   
    const avg = sum / lifespan;
console.log(avg, sum);

    return netCost / avg;
  };

  export function calculateMonthlyPaiment(principal, percentageRate, term) {
    const lengthOfLoan = term * 12;
    const rate = percentageRate / 100 / 12;
    return (principal * rate) / (1 - (Math.pow((1 + rate), lengthOfLoan * -1)));
  }