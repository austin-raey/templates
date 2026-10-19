import type { OxlintConfig } from "oxlint";

import uno from "@unocss/eslint-plugin";

const unocss: OxlintConfig = {
	env: {
		browser: true,
	},
	jsPlugins: [
		{
			name: "unocss",
			specifier: "@unocss/eslint-plugin",
		},
	],
	rules: {
		...uno.configs.recommended.rules,
		"unocss/enforce-class-compile": "error",
	},
};

export default unocss;
