import React from "react";

import { storiesOf } from "@storybook/react";
//mport { action } from "@storybook/addon-actions";


import ProductBar from "../components/productBar"

 const data = {
  2020: [
    { month: 'Jan', power: 626 },
    { month: 'Feb', power: 702 },
    { month: 'Mar', power: 1044 },
    { month: 'Apr', power: 1005 },
    { month: 'May', power: 1141 },
    { month: 'Jun', power: 1152 },
    { month: 'Jul', power: 1137 },
    { month: 'Aug', power: 1159 },
    { month: 'Sep', power: 1037 },
    { month: 'Oct', power: 751 },
    { month: 'Nov', power: 502 },
    { month: 'Dec', power: 483 },
  ]
 }

storiesOf("ProductBar", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("BarChart", () => <ProductBar state={data}/>);