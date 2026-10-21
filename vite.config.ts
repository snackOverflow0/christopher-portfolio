import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind v4 runs as a Vite plugin, so no tailwind.config.js is needed.
export default defineConfig({ plugins: [react(), tailwindcss()] });
