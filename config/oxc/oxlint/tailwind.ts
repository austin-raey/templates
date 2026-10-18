import type { OxlintConfig } from "oxlint";

import tailwind from "eslint-plugin-better-tailwindcss";
import { createRequire } from "node:module";

const tailwindcss: OxlintConfig = {
	env: {
		browser: true,
	},
	jsPlugins: [
		{
			name: "better-tailwindcss",
			specifier: createRequire(import.meta.url).resolve("eslint-plugin-better-tailwindcss"),
		},
	],
	rules: {
		...tailwind.configs["recommended-warn"].rules,
		"better-tailwindcss/enforce-consistent-important-position": "warn",
		"better-tailwindcss/enforce-consistent-variant-order": "warn",
		"better-tailwindcss/enforce-logical-properties": "warn",
		"better-tailwindcss/no-custom-classname": "warn",
	},
};

export default tailwindcss;
