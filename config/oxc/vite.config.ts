import { defineConfig } from "vite-plus";

import fmt from "./oxfmt/index.ts";
import lint from "./oxlint/base.ts";

export default defineConfig({
	fmt,
	lint: {
		extends: [lint],
		overrides: [
			{
				files: ["oxlint/base.ts", "oxlint/tailwind.ts", "oxlint/unocss.ts"],
				rules: {
					"import/no-nodejs-modules": ["warn", { allow: ["node:url"] }],
				},
			},
		],
	},
	pack: {
		deps: {
			neverBundle: true,
			resolveDepSubpath: true,
		},
		dts: {
			generator: "tsgo",
		},
		entry: {
			"fmt": "oxfmt/index.ts",
			"lint": "oxlint/index.ts",
			"lint/*": "oxlint/*.ts",
		},
		exports: true,
		minify: true,
	},
});
