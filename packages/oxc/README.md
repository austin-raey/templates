# OXC Configuration

This package contains shareable configurations of Oxlint and Oxfmt.

At this time, all configuration dependencies are included for you when this package is installed --
even if you don't explictly use them, for convenience. I understand this does increase install size,
however. May switch this in the future in a breaking release.

## Currently Supported Linting Configurations

### Formatting

- `@slowpoketail/oxc/fmt`

### Linting

- `@slowpoketail/oxc/lint/base` (also `@slowpoketail/oxc/lint`)
- `@slowpoketail/oxc/lint/jest`
- `@slowpoketail/oxc/lint/next` - Includes `@slowpoketail/oxc/lint/react`
- `@slowpoketail/oxc/lint/react`
- `@slowpoketail/oxc/lint/tailwind`
- `@slowpoketail/oxc/lint/unocss`
- `@slowpoketail/oxc/lint/vitest`
- `@slowpoketail/oxc/lint/wrenjs`

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
// alternatively, import your framework's config:
// import next from "@slowpoketail/oxc/lint/next";
// as well as any additional plugins you might need
// import jest from "@slowpoketail/oxc/lint/jest";
// import tailwind from "@slowpoketail/oxc/lint/tailwind";
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

## Additional Notes

- The export at `@slowpoketail/oxc/lint` is the same as the base preset
  `@slowpoketail/oxc/lint/base`.
- Extra, potentially unused packages at this time include:
  - `@unocss/eslint-plugin`
  - `eslint-plugin-better-tailwindcss`
  - `eslint-plugin-perfectionist`
