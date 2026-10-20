import type { OxlintConfig } from "oxlint";

const jest: OxlintConfig = {
	env: {
		browser: true,
		jest: true,
	},
	plugins: ["jest"],
};

export default jest;
