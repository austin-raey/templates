import next from "@slowpoketail/oxc/lint";
import tailwind from "@slowpoketail/oxc/lint/tailwind";
import { defineConfig } from "oxlint";

export default defineConfig({
	extends: [next, tailwind({ cwd: import.meta.dirname, entryPoint: "./src/app/globals.css" })],
});
