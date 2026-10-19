import next from "@slowpoketail/oxc/lint/next";
import tailwind from "@slowpoketail/oxc/lint/tailwind";
import { defineConfig } from "oxlint";

export default defineConfig({
	extends: [next, tailwind],
});
