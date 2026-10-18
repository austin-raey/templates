import { defineConfig } from "vite-plus";

import fmt from "./oxfmt/index.ts";
import lint from "./oxlint/base.ts";

export default defineConfig({
	fmt: {
		...fmt,
	},
	lint: {
		extends: [lint],
	},
	pack: {
		deps: {
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
	},
});
