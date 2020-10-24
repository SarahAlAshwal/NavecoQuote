import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import OffsetBill from "../components/OffsetBill"

storiesOf("Offset Bill", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("OffsetBill", () => <OffsetBill/>
  );

