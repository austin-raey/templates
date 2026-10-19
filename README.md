# Templates

This repository contains various framework templates to quickly scaffold new projects in frameworks
I like to use personally or professionally.

## Principles

The templates follow what I think are "best practices" for structuring and tooling these different
projects.

It is especially important that no matter what is set up in the project, VSCode / Zed configurations
play nice with the project's tooling.

As a common through-line, these each have the following:

- `oxlint`, `oxfmt`: Linting and formatting tools
- `pnpm + node`, `bun`, or `deno`: Package managers and runtime environments, dependent on whatever
  I think is cool at the time. Typically, `pnpm + node` is my go-to.
- `.vscode/` + `.zed/`: Editor configuration files for VS Code and Zed for a consistent development
  environment. I try to work with the ecosystem used by the project.
- `typescript`
- `git`

## Available Templates

| Template                      | Path                                     |
| ----------------------------- | ---------------------------------------- |
| [`next`](./template/next)     | [`./template/next`](./template/next)     |
| [`astro`](./template/astro)   | [`./template/astro`](./template/astro)   |
| [`wrenjs`](./template/wrenjs) | [`./template/wrenjs`](./template/wrenjs) |

## Installation

### Manual Installation

1. Do one of the following:

   a. Download as zip and extract it, then copy the template directory from this repo

   b. Run your package manager's execute command to install the template directly, e.g.:

   ```sh
   npx degit austin-raey/templates/template/{name} ./my-new-project

   pnpx degit austin-raey/templates/template/{name} ./my-new-project

   bunx degit austin-raey/templates/template/{name} ./my-new-project
   ```

2. You're ready to go!

## Packages

This repository also exports a few packages that can be used within the scope of this project or
with compatible meta-frameworks.

### `bskt`

Template downloader and executor for project templates

### `@slowpoketail/oxc`

Shareable configuration and tooling for the `oxc` ecosystem.
