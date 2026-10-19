import { defineConfig } from "oxlint";

import lint from "./config/oxc/oxlint/base.ts";

export default defineConfig({
	extends: [lint],
	overrides: [
		{
			files: [
				"config/oxc/oxlint/base.ts",
				"config/oxc/oxlint/tailwind.ts",
				"config/oxc/oxlint/unocss.ts",
			],
			rules: {
				"import/no-nodejs-modules": ["warn", { allow: ["node:url"] }],
			},
		},
	],
});
