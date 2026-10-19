import type { Settings } from "eslint-plugin-better-tailwindcss/api/types";
import type { DummyRule, OxlintConfig } from "oxlint";

import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import { fileURLToPath } from "node:url";

type TailwindOptions = Settings;
const tailwind = (options: TailwindOptions = {}): OxlintConfig => ({
	env: {
		browser: true,
	},
	jsPlugins: [
		{
			name: "better-tailwindcss",
			specifier: fileURLToPath(import.meta.resolve("eslint-plugin-better-tailwindcss")),
		},
	],
	rules: Object.fromEntries(
		Object.entries({
			...betterTailwindcss.configs["recommended-warn"].rules,
			/** Enforce canonical class order for better readability. */
			"better-tailwindcss/enforce-canonical-classes": "warn",
			/** Change to tab indentation to match config. */
			"better-tailwindcss/enforce-consistent-line-wrapping": [
				"warn",
				{ indent: "tab", strictness: "loose" },
			],
			"better-tailwindcss/enforce-logical-properties": "warn",
		} satisfies OxlintConfig["rules"]).map(([name, rule]): [string, DummyRule] => {
			const sharedOptions = {
				detectComponentClasses: true,
				rootFontSize: 16,
				...options,
			} satisfies Settings;

			if (Array.isArray(rule)) {
				const [severity, ruleOptions] = rule;
				return [name, [severity, { ...sharedOptions, ...ruleOptions }]];
			}
			return [name, [rule, sharedOptions]];
		}),
	),
});

export default tailwind;
