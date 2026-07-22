import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		vue(),
		dts({
			insertTypesEntry: true,
			include: ["src/**/*.ts", "src/**/*.vue"],
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "VueOdontogram",
			formats: ["es", "cjs"],
			fileName: (format) =>
				`vue-odontogram.${format === "es" ? "es" : "cjs"}.js`,
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue",
				},
				assetFileNames: "style.css",
			},
		},
		cssCodeSplit: false,
	},
});
