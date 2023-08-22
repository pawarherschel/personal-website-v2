import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  site: "https://v2.sakurakat.systems",
  integrations: [sitemap(), robotsTxt({
    sitemap: true
  }), mdx(), tailwind()],
  output: "server",
  adapter: cloudflare()
});