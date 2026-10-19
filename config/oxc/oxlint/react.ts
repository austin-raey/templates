import type { OxlintConfig } from "oxlint";

import base from "./base.ts";

const react: OxlintConfig = {
	env: {
		browser: true,
	},
	extends: [base],
	plugins: ["react", "react-perf"],
	rules: {
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
		/** In React 17 and later, importing React in every file is no longer necessary. */
		"react/react-in-jsx-scope": "off",
	},
};

export default react;
