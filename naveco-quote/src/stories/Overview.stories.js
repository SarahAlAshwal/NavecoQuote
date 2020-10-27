import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PriceCard from '../components/Overview/PriceCard';
import PaybackCard from "../components/Overview/PaybackCard";
import SavingSummery from "../components/Overview/SavingSummery";
import OverviewHeader from "../components/Overview/OverviewHeader";
import FirstYear from "../components/Overview/FirstYear";
import FinancingForm from "../components/Overview/FinancingForm";
import Slide from "../components/Overview/Slide";

storiesOf("Overview", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Amount", () => <PriceCard
  cost = {16520}
  />
  ).add("Summery", () => <SavingSummery saved={53200} capactity={8.3} city={'Ottawa'}/>
  ).add("OverviewHeader", () => <OverviewHeader />
  ).add("First Year", () => <FirstYear
    kwhs = {'10,860.76'}
    amount = {'$1,770.30'}
  />
  ).add("Payback", () => <PaybackCard
  
    paybackPeriod = {'8.3'}
    roi = {'12.0'}
  />
  ).add("Financing", () => <FinancingForm 
    handleChange={action('handleChange')}
    interestRate={4.75}
    loanTermInYears={10}
    loanAmount={19876}
  />
).add("Slide", ()=> <Slide/>)
;



