import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  site: "https://sakurakat.systems",
  integrations: [sitemap(), robotsTxt({
    sitemap: true
  })]
});