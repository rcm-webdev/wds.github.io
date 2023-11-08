import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://rcm-webdev.github.io",
  base: "/wds.github.io",
  integrations: [tailwind()],
});
