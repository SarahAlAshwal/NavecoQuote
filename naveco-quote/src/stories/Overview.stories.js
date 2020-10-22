import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PriceCard from "../components/PriceCard"
import SavingSummery from "../components/SavingSummery";

storiesOf("Overview", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Amount", () => <PriceCard
  />
  ).add("Summery", () => <SavingSummery saved={53200} capactity={8.3} city={'Ottawa'}/>
  );


