/** @format */

///<reference types="vitest" />
/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		chunkSizeWarningLimit: 1500,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
		css: true,
		coverage: {
			provider: "v8",
			// reporter: ['cobertura', 'json', 'html', 'text-summary'],
			// reportsDirectory: "./coverage",
			all: true,
			include: ["**/*.ts", "**/*.tsx"],
			exclude: [
				"**/*.spec.ts",
				"**/*.spec.tsx",
				".next/*",
				"**/*.d.ts",
				"**/App.tsx",
				"**/demo/**",
			],
		},
	},
});
