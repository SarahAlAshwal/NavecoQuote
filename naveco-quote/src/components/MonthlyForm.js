import React, { useState } from "react";
//import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

export default function MonthlyForm(props) {
  const rate = 175 / 1094;


  const [state, setState] = useState({
    monthlyAmount: 175,
    powerPerMonth: 1094,
    yearlyAmount: 175 * 12,
    powerPerYear: 1094 * 12,
    message: "This is fairly average. It is likely that we can offset this entirely. 😃"
  });

  const handleChangeAmount = (event) => {
    const monthlyAmount = event.target.value;
    const powerPerMonth = event.target.value / rate;
    const powerPerYear = (event.target.value / rate) * 12;
    const yearlyAmount = event.target.value * 12;
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
  return (
    <main className="">
      <div className="">
        What do you spend each month on power?
      </div>
      <section className="">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className=""
            name="monthlyAmount"
            type="text"
            placeholder="$"
            value={state.monthlyAmount ? state.monthlyAmount : ""}
            onChange={handleChangeAmount}
            data-testid="amount-input"
          /> / per month
        </form>
        <div className="">{state.message}</div>
        <section className="">
          <div className="">{state.powerPerMonth}  kWhs used per month</div>
          <div className="">${state.yearlyAmount} spent on power each year</div>
          <div className="">{state.powerPerYear} kWhs used per year</div>
        </section>
      </section>
    </main>
  );
}

