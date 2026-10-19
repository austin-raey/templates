# OXC Configuration

This package contains shareable configurations of Oxlint and Oxfmt.

By default, only `base` configuration dependencies are included for you when this package is installed.

For others, running lint should hint at missing dependencies. For completion, these additional dependencies are listed in the `peerDependencies` section of the `package.json`.

## Usage

Install the shared configuration and the tools you use:

```sh
# Install one or the other, or both oxlint / oxfmt
{PACKAGE_MANAGER} install -D @slowpoketail/oxc
{PACKAGE_MANAGER} install -D oxlint
{PACKAGE_MANAGER} install -D oxfmt
```

In `oxlint.config.ts`:

```ts
import lint from "@slowpoketail/oxc/lint";
import { defineConfig } from "oxlint";

export default defineConfig({
	extends: [lint],
	// Other overrides
});
```

In `oxfmt.config.ts`:

```ts
import fmt from "@slowpoketail/oxc/fmt";
import { defineConfig } from "oxfmt";

export default defineConfig({
	...fmt,
	// Other overrides
});
```
