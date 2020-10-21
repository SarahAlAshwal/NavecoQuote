import React from "react";

export default function MonthlyForm(props) {
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
            value={props.state.monthlyAmount ? props.state.monthlyAmount : ""}
            onChange={props.handleChangeAmount}
            data-testid="amount-input"
          /> / per month
        </form>
        <div className="">{props.state.message}</div>
        <section className="">
          <div className="">{props.state.powerPerMonth}  kWhs used per month</div>
          <div className="">${props.state.yearlyAmount} spent on power each year</div>
          <div className="">{props.state.powerPerYear} kWhs used per year</div>
        </section>
      </section>
    </main>
  );
}

