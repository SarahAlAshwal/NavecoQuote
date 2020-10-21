import React from "react";

import { storiesOf } from "@storybook/react";

import MonthlyForm from "../components/MonthlyForm"


storiesOf("MonthlyForm", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Amount", () => <MonthlyForm
  />
  );

