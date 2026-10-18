import type { OxlintConfig } from "oxlint";

import base from "./base.ts";

const wrenjs: OxlintConfig = {
  env: {
    browser: true,
    node: true,
  },
  extends: [base],
};

export default wrenjs;
