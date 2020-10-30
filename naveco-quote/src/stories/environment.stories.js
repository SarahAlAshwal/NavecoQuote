import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Environment from "../components/environment"

const saving = 43298.28;

storiesOf("envi", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("environment", () => <Environment
  state={saving}
/>
  );
