import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tailwind from '@tailwindcss/vite'
// import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
	plugins: [tailwind(), remix()],
	server: {
		host: "127.0.0.1",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./app"),
		},
	},
});
