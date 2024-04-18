import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://obedc295.github.io',
  integrations: [tailwind()],
  output: "server"
});
