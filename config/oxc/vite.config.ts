import { defineConfig } from "vite-plus";

import fmt from "./oxfmt/index.ts";
import lint from "./oxlint/base.ts";

export default defineConfig({
	fmt,
	lint: {
		extends: [lint],
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
