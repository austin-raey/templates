import type { OxlintConfig } from "oxlint";

import uno from "@unocss/eslint-plugin";
import { createRequire } from "node:module";

const unocss: OxlintConfig = {
	env: {
		browser: true,
	},
	jsPlugins: [
		{
			name: "unocss",
			specifier: createRequire(import.meta.url).resolve("@unocss/eslint-plugin"),
		},
	],
	rules: {
		...uno.configs.recommended.rules,
		"unocss/enforce-class-compile": "error",
	},
};

export default unocss;
