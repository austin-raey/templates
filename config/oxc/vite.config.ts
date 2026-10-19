import { defineConfig } from "vite-plus";

export default defineConfig({
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
			"lint/*": "oxlint/*.ts",
		},
		exports: true,
		minify: true,
	},
});
