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
	},
	run: {
		cache: true,
	},
	staged: {
		"*": "vp check --fix",
	},
});
