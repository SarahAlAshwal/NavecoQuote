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

  export function calculatePayback(acAnnual, netCost, rate = 0.12, degradationRate = 0.005, escalationRate = 0.029) {
    let currentYear = new Date().getFullYear();
    const dataPerYear = {};
    let sum = 0;
    dataPerYear[currentYear] = {acAnnual, amount: (acAnnual * rate)};
    for (let i = 1; i < 25; i++) {
      // power of every year is calculated based on prevous year's power factoring degradation rate
      const newPower = dataPerYear[currentYear].acAnnual - (dataPerYear[currentYear].acAnnual * degradationRate);
      // Amount is calculated based on newly calculated power factoring escalation rate
      dataPerYear[currentYear + 1] = {acAnnual: newPower, amount: (newPower  * rate * ( 1 + escalationRate ))};
      currentYear++;
    }

    //the average value of power produced for the system's lifespan.
    for  (let year in dataPerYear) {
      sum += dataPerYear[year].amount;
    }
    const avg = sum / 25;
    return netCost / avg;
  };