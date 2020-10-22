import React from "react";

import { storiesOf } from "@storybook/react";
import SavingSummery from "../components/SavingSummery";


storiesOf("Summery", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Summery", () => <SavingSummery saved={53200} capactity={8.3} city={'Ottawa'}/>
  );

