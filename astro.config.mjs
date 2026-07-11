// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://Sadew-The-Scoder.github.io',
  base: '/Dewz.dev-v3',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
