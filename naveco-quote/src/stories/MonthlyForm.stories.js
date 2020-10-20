import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";


import MonthlyForm from "../components/MonthlyForm"


storiesOf("MonthlyForm", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Amount", () => <MonthlyForm
  />
  );

