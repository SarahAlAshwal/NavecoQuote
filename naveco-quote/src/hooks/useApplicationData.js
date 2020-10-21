import { useState } from "react";

export function useApplicationData() {
  const rate = 175 / 1094;


  const [state, setState] = useState({
    monthlyAmount: 175,
    powerPerMonth: 1094,
    yearlyAmount: 175 * 12,
    powerPerYear: 1094 * 12,
    message: "This is fairly average. It is likely that we can offset this entirely. 😃"
  });
  
  const handleChangeAmount = (event) => {
    const input = event.target.value.replace(/[^0-9]/gi, '')
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

  return {state, handleChangeAmount}; 

}
