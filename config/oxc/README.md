# OXC Configuration

This package contains shareable configurations of Oxlint and Oxfmt.

At this time, all configuration dependencies are included for you when this package is installed --
even if you don't explictly use them, for convenience.

JavaScript plugins use `fileURLToPath(import.meta.resolve(...))` to resolve their ESM entry points
from this package rather than from the consuming project. This also avoids UnoCSS's incompatible
CommonJS export shape. Locally linked copies must have their dependencies installed and be built
before use.

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
