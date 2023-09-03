// import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind()
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    , vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.toLowerCase().startsWith("swiper")
        }
      }
    })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});