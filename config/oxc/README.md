# OXC Configuration

This package contains shareable configurations of Oxlint and Oxfmt.

**NOTE:** At this time, it is known that certain package dependencies may not be used by the user. They are all included / installed for convenience.

## Plugin runtimes

The base preset uses bundled plugin entrypoints:

| Export                                    | Plugin                        |
| ----------------------------------------- | ----------------------------- |
| `@slowpoketail/oxc/plugins/e18e`          | `@e18e/eslint-plugin`         |
| `@slowpoketail/oxc/plugins/perfectionist` | `eslint-plugin-perfectionist` |

Both the recommended rules and Oxlint's `jsPlugins` registrations use these
entrypoints. The build bundles their runtime dependencies instead of resolving
them from the consumer's project. Consumers do not need to install these plugins
directly. SonarJS is not included.

Tailwind and UnoCSS remain external runtime dependencies because they load worker
files relative to their installed packages. Their presets resolve them from this
package's installation.

Plugin dependencies remain declared in `dependencies` for now. Bundling isolates
the base plugin runtimes; it does not reduce installed dependency size.
The build includes third-party license notices in `dist/THIRD_PARTY_LICENSES.txt`.

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

For Next.js, import `@slowpoketail/oxc/lint/next` instead. It already extends the
React and base presets.

In `oxfmt.config.ts`:

```ts
import fmt from "@slowpoketail/oxc/fmt";
import { defineConfig } from "oxfmt";

export default defineConfig({
	...fmt,
});
```
