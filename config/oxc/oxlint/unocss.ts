import type { DummyRule, OxlintConfig } from "oxlint";

import uno from "@unocss/eslint-plugin";
import { fileURLToPath } from "node:url";

const unocss: OxlintConfig = {
	env: {
		browser: true,
	},
	jsPlugins: [
		{
			name: "unocss",
			specifier: fileURLToPath(import.meta.resolve("@unocss/eslint-plugin")),
		},
	],
	rules: {
		...Object.fromEntries(
			Object.entries(uno.configs.recommended.rules).map(([name, rule]): [string, DummyRule] => [
				name.replace("@unocss/", "unocss/"),
				rule,
			]),
		),
		"unocss/enforce-class-compile": "error",
	},
};

export default unocss;
