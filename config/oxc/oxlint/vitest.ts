import type { OxlintConfig } from "oxlint";

const vitest: OxlintConfig = {
	env: {
		browser: true,
		vitest: true,
	},
	plugins: ["vitest"],
};

export default vitest;
