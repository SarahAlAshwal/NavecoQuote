import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MonthlyForm from "../components/MonthlyForm"

const state = {
  monthlyAmount: 175,
  powerPerMonth: 1094,
  yearlyAmount: 175 * 12,
  powerPerYear: 1094 * 12,
  message: "This is fairly average. It is likely that we can offset this entirely. 😃"
}
storiesOf("Form", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("MonthlyAmount", () => <MonthlyForm
    handleChangeAmount={action('handleChangeAmount')}
    state={state}
  />
  );

