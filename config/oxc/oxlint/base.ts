import type { OxlintConfig } from "oxlint";

import { fileURLToPath } from "node:url";

import e18e from "./plugins/e18e.ts";
import perfectionist from "./plugins/perfectionist.ts";

const base: OxlintConfig = {
	categories: {
		correctness: "error",
		perf: "warn",
		restriction: "error",
		suspicious: "warn",
	},

	jsPlugins: [
		{
			name: "e18e",
			specifier: fileURLToPath(import.meta.resolve("@slowpoketail/oxc/plugins/e18e")),
		},
		{
			name: "perfectionist",
			specifier: fileURLToPath(import.meta.resolve("@slowpoketail/oxc/plugins/perfectionist")),
		},
	],

	plugins: [
		"eslint",
		"import",
		"jest",
		"jsdoc",
		"oxc",
		"promise",
		"typescript",
		"unicorn",
		"vitest",
	],

	rules: {
		/** Reason: Handled by perfectionist plugin */
		"eslint/sort-keys": "off",
		/** Reason: Enforces a newline after import statements */
		"import/newline-after-import": "warn",
		/** Reason: Inflexible / useful if the user prefers importing under any name / some frameworks use default exports */
		"import/no-default-export": "off",
		/** Reason: Inflexible. For eslint imports especially, can cause funny looking code. */
		"import/no-named-as-default-member": "off",
		/** Reason: Allows style side effects */
		"import/no-unassigned-import": [
			"error",
			{ allow: ["**/*.css", "**/*.scss", "**/*.less", "**/*.styl", "**/*.sass"] },
		],
		/** Reason: Assume user is in a "newer" environment. Can override if not supported. Technically, there are probably performance considerations the user should consider. */
		"oxc/no-rest-spread-properties": "off",

		/** Reason: Recommended rule spreading from plugins */
		...e18e.configs.recommended.rules,
		...perfectionist.configs["recommended-natural"].rules,
	},
};

export default base;
