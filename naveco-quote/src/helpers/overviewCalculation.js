export function calculateSystemGrossCostAfterRebate(systemBaseCost) {
    const rebate = (systemBaseCost * (1 - 0.25)) < 6000 ? systemBaseCost * (1 - 0.25) : 6000;
    return systemBaseCost * (1 + 0.13) - rebate;
  }

  export function calculateSystemNetCostAfterRebate(systemBaseCost) {
    const rebate = (systemBaseCost * (1 - 0.25)) < 6000 ? systemBaseCost * (1 - 0.25) : 6000;
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

  export function calculateProfit(acAnnual, rate = 0.12, degradationRate = 0.005, escalationRate = 0.029) {
    let sum = 0;
    const dataPerYear = createData(acAnnual, rate, degradationRate, escalationRate);
    for  (let year in dataPerYear) {
      console.log('aa ', dataPerYear[year].amount);
      sum += dataPerYear[year].amount;
    }
    return sum;
  }

  export function calculatePayback(acAnnual, netCost, rate, degradationRate, escalationRate) {
    
    //the average value of power produced for the system's lifespan.
    const sum = calculateProfit(acAnnual, rate, degradationRate, escalationRate);
    const avg = sum / 25;
    return netCost / avg;
  }
  
  export function calculateNewBill(oldBill, savedAmount) {
    return oldBill - savedAmount;
  };