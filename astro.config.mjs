import { defineConfig } from 'astro/config';

// Unocss
import UnoCSS from '@unocss/astro';

// SolidJS
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://aidan.works",
  integrations: [UnoCSS({
    injectReset: true,
    configFile: "./src/styles/unocss-config.ts"
  }), solid(), mdx(), icon()]
});