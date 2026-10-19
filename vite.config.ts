import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		cache: true,
	},
	staged: {
		"*": ["oxfmt", "oxlint --fix --fix-suggestions --no-error-on-unmatched-pattern"],
	},
});
