import type { OxlintConfig } from "oxlint";

import betterTailwindcss from "eslint-plugin-better-tailwindcss";

const tailwind: OxlintConfig = {
	env: {
		browser: true,
	},
	jsPlugins: [
		{
			name: "better-tailwindcss",
			specifier: "eslint-plugin-better-tailwindcss",
		},
	],
	rules: {
		...betterTailwindcss.configs["recommended-warn"].rules,
		"better-tailwindcss/enforce-consistent-important-position": "warn",
		/** Note: Change to tab indentation to match config. */
		"better-tailwindcss/enforce-consistent-line-wrapping": [
			"warn",
			{ indent: "tab", strictness: "loose" },
		],
		"better-tailwindcss/enforce-logical-properties": "warn",
	},
};

export default tailwind;
