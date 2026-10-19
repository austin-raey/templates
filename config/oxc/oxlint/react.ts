import type { OxlintConfig } from "oxlint";

import base from "./base.ts";

const react: OxlintConfig = {
	env: {
		browser: true,
	},
	extends: [base],
	plugins: ["react", "react-perf"],
	rules: {
		/** Less of an issue with react compiler */
		"react-perf/jsx-no-jsx-as-prop": "off",
		/** Less of an issue with react compiler */
		"react-perf/jsx-no-new-array-as-prop": "off",
		/** Less of an issue with react compiler */
		"react-perf/jsx-no-new-function-as-prop": "off",
		/** Less of an issue with react compiler */
		"react-perf/jsx-no-new-object-as-prop": "off",
		/** Too restrictive */
		"react/forbid-component-props": "off",
		/** Prevent errors when using typescript, or enforcing usage too much */
		"react/jsx-filename-extension": [
			"error",
			{
				allow: "as-needed",
				extensions: [".jsx", ".tsx"],
				ignoreFilesWithoutCode: true,
			},
		],
		/** Too restrictive, loosen */
		"react/jsx-max-depth": ["warn", { max: 6 }],
		/** IMO in the age of typescript, this should be fine */
		"react/jsx-props-no-spreading": "off",
		/** In React 17 and later, importing React in every file is no longer necessary. */
		"react/react-in-jsx-scope": "off",
	},
};

export default react;
