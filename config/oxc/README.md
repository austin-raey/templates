# OXC Configuration

This package contains shareable configurations of Oxlint and Oxfmt.

**NOTE:** At this time, it is known that certain package dependencies may not be used by the user. They are all included / installed for convenience.

## Usage

Install the shared configuration and the tools you use:

```sh
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
});
```

In `oxfmt.config.ts`:

```ts
import fmt from "@slowpoketail/oxc/fmt";
import { defineConfig } from "oxfmt";

export default defineConfig({
	...fmt,
});
```
