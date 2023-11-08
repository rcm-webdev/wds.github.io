import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://elaborate-puffpuff-c601d1.netlify.app/",
  integrations: [tailwind()],
});
