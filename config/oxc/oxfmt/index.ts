import type { OxfmtConfig } from "oxfmt";

export default {
	arrowParens: "always",
	astro: {
		allowShorthand: true,
		compressHTML: "jsx",
		skipFrontmatter: false,
	},
	endOfLine: "lf",
	experimentalOperatorPosition: "start",
	insertFinalNewline: true,
	quoteProps: "consistent",
	semi: true,
	sortImports: {
		groups: [
			"type-import",
			["value-builtin", "value-external"],
			"type-internal",
			"value-internal",
			["type-parent", "type-sibling", "type-index"],
			["value-parent", "value-sibling", "value-index"],
			"unknown",
		],
		newlinesBetween: true,
		partitionByComment: true,
		sortSideEffects: false,
	},
	sortPackageJson: true,
	/**
	 * Let the user decide whether to sort Tailwind CSS classes.
	 * Also, the plugins for oxlint can handle this a bit better.
	 */
	sortTailwindcss: false,
	useTabs: true,
} satisfies OxfmtConfig;
