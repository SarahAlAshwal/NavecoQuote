import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FrontPage from "../components/FrontPage/frontPage"

const saving = 43298.28;

storiesOf("Front", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Front", () => <FrontPage
 
/>
  );
