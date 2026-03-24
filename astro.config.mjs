import { resolve } from "path";
const __dirname = import.meta.dirname;

import { defineConfig } from 'astro/config';

// Unocss
import UnoCSS from '@unocss/astro';

// SolidJS
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: "https://littlefire.works",
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },
  integrations: [UnoCSS({
    injectReset: true,
    configFile: resolve(__dirname, "./src/styles/unocss-config.ts")
  }), solid(), mdx(), icon()]
});