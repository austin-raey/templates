import { defineConfig } from "vite-plus";

import fmt from "./config/oxc/oxfmt/index.ts";
import lint from "./config/oxc/oxlint/base.ts";

const ignorePatterns = ["**/template/**"];
export default defineConfig({
	fmt: {
		...fmt,
		ignorePatterns,
	},
	lint: {
		extends: [lint],
		ignorePatterns,
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
	},
	run: {
		cache: true,
	},
	staged: {
		"*": "vp check --fix",
	},
});
