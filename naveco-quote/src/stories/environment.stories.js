import React from "react";

import { storiesOf } from "@storybook/react";
//mport { action } from "@storybook/addon-actions";


import Environment from "../components/environment"



storiesOf("Environment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Environment", () => <Environment />);

