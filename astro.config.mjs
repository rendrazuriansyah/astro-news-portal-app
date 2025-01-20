// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/utils/global.js";

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
