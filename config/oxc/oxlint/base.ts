import type { OxlintConfig } from "oxlint";

import perfectionist from "eslint-plugin-perfectionist";

const base: OxlintConfig = {
	categories: {
		correctness: "error",
		perf: "warn",
		restriction: "error",
		style: "warn",
		suspicious: "warn",
	},

	jsPlugins: [
		{
			name: "perfectionist",
			specifier: "eslint-plugin-perfectionist",
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
		/** Reason: Handled by perfectionist plugin */
		"eslint/sort-imports": "off",
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
		/** Reason: Handled by perfectionist plugin */
		"perfectionist/sort-imports": "off",
		/** Reason: Recommended rule spreading from plugins */
		...perfectionist.configs["recommended-natural"].rules,
	},
};

export default base;
