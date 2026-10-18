import { licensePlugin } from "rolldown-license-plugin";
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
			alwaysBundle: ["@e18e/eslint-plugin", "eslint-plugin-perfectionist"],
			dts: {
				alwaysBundle: [],
				neverBundle: true,
			},
			resolveDepSubpath: true,
		},
		dts: {
			generator: "tsgo",
		},
		entry: {
			"fmt": "oxfmt/index.ts",
			"lint": "oxlint/index.ts",
			"lint/*": "oxlint/*.ts",
			"plugins/*": "oxlint/plugins/*.ts",
		},
		exports: true,
		minify: true,
		plugins: [
			licensePlugin({
				done(dependencies, context) {
					context.emitFile({
						fileName: "THIRD_PARTY_LICENSES.txt",
						source:
							dependencies
								.map(
									({ license, licenseText, name, version }) =>
										`${name}@${version} - ${license}\n${licenseText}`,
								)
								.join("\n\n") + "\n",
						type: "asset",
					});
				},
			}),
		],
		shims: true,
	},
});
