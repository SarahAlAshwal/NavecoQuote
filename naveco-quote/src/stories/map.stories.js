import React from "react";

import { storiesOf } from "@storybook/react";
//mport { action } from "@storybook/addon-actions";


import GoogleMaps from "../components/map"

  const state = {
    isresidential: true,
    address: "ottawa",
    finaladdr: "https://maps.google.com/maps?width=520&height=400&hl=en&t=h&z=19&ie=UTF8&iwloc=B&output=embed&q=%20Ottawa"
  }

storiesOf("GoogleMaps", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Address", () => <GoogleMaps state={state}/>);