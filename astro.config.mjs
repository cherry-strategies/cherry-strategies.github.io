// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tinaDirective from "./astro-tina-directive/register";

// https://astro.build/config
export default defineConfig({
  site: "https://cherrystrategies.com",
  server: {
    host: true,
  },
  integrations: [mdx(), react(), tinaDirective()],
});
