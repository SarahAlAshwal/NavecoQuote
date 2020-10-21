import React from "react";

import { storiesOf } from "@storybook/react";
//mport { action } from "@storybook/addon-actions";


import GoogleMaps from "../components/map"


storiesOf("GoogleMaps", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Address", () => <GoogleMaps
  />
  );