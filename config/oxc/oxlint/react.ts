import type { OxlintConfig } from "oxlint";

import base from "./base.ts";

const react: OxlintConfig = {
	env: {
		browser: true,
	},
	extends: [base],
	plugins: ["react", "react-perf"],
	rules: {
		/** Reason: In React 17 and later, importing React in every file is no longer necessary. */
		"react/react-in-jsx-scope": "off",
	},
};

export default react;
