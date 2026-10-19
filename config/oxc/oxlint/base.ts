import type { OxlintConfig } from "oxlint";

import perfectionist from "eslint-plugin-perfectionist";
import { fileURLToPath } from "node:url";

const base: OxlintConfig = {
	categories: {
		correctness: "error",
		perf: "warn",
		style: "warn",
		suspicious: "warn",
	},

	jsPlugins: [
		{
			name: "perfectionist",
			specifier: fileURLToPath(import.meta.resolve("eslint-plugin-perfectionist")),
		},
	],

	options: {
		typeAware: true,
		typeCheck: true,
	},

	plugins: ["eslint", "import", "jest", "jsdoc", "promise", "typescript", "unicorn", "vitest"],

	rules: {
		/** Too restrictive. Someone might want to use lowercase comments. */
		"eslint/capitalized-comments": "off",

		/** Too restrictive, I understand the intention but doesn't quite fit all scenarios */
		"eslint/new-cap": "off",

		/** Too restrictive */
		"eslint/one-var": "off",

		/** Handled by pe`rfectionist plugin */
		"eslint/sort-imports": "off",

		/** Too restrictive */
		"import/exports-last": "off",

		/** Enforces a newline after import statements */
		"import/newline-after-import": "warn",

		/** Inflexible / useful if the user prefers importing under any name / some frameworks use default exports */
		"import/no-default-export": "off",

		/** Inflexible. For eslint imports especially, can cause funny looking code. */
		"import/no-named-as-default-member": "off",

		/** Too restrictive, I understand the intention but doesn't quite fit all scenarios */
		"import/no-named-export": "off",

		/** Allows style side effects */
		"import/no-unassigned-import": [
			"error",
			{ allow: ["**/*.css", "**/*.scss", "**/*.less", "**/*.styl", "**/*.sass"] },
		],

		/** Assume user is in a "newer" environment. Can override if not supported. Technically, there are probably performance considerations the user should consider. */
		"oxc/no-rest-spread-properties": "off",

		/** Handled by perfectionist plugin */
		"perfectionist/sort-imports": "off",

		/** Recommended rule spreading from plugins */
		...perfectionist.configs["recommended-natural"].rules,

		/** Too restrictive. Some people like 1 length var */
		"eslint/id-length": "off",

		/** Too restrictive IMO. Idk there probably are valid cases for this but oh well. */
		"eslint/init-declarations": "off",

		/** Make less restrictive */
		// "eslint/no-magic-numbers": [
		// 	"error",
		// 	{
		// 		ignoreArrayIndexes: true,
		// 		ignoreClassFieldInitialValues: true,
		// 		ignoreDefaultValues: true,
		// 		ignoreEnums: true,
		// 		ignoreNumericLiteralTypes: true,
		// 		ignoreReadonlyClassProperties: true,
		// 		ignoreTypeIndexes: true,
		// 	},
		// ],

		/** Too restrictive. IMO it is a goodie, needs to revisit... */
		"eslint/max-statements": [
			"error",
			{
				ignoreTopLevelFunctions: true,
				max: 32,
			},
		],

		/**
		 * Too restrictive. While I do like this a lot,
		 * literally dividing by 2 causes a lint error.
		 * IDK, I don't want to instantiate "HALF" and do that,
		 * even if it is more efficient.
		 */
		"eslint/no-magic-numbers": "off",

		/** Too restrictive */
		"eslint/no-ternary": "off",

		/** Too restrictive */
		"eslint/no-undefined": "off",

		/** Too restrictive. I enjoy seeing immediately if something is exported or not.
		 * There perhaps is value in enforcing exports at the end, however. IDK. Maybe revisit this.
		 * Also useful in frameworks like Next/Wren/etc. with named exports instead of declaring then having this at the end, you can see it immediately.
		 */
		"import/group-exports": "off",

		/** Too restrictive */
		"import/prefer-default-export": "off",
	},
};

export default base;
