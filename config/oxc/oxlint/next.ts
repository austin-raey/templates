import type { OxlintConfig } from "oxlint";

import react from "./react.ts";

const next: OxlintConfig = {
	env: {
		browser: true,
		node: true,
	},
	extends: [react],
	plugins: ["nextjs"],
};

export default next;
