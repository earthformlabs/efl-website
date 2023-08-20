// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: ["@/assets/styles/main.css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "nuxt-gtag",
    "@nuxtjs/tailwindcss",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins?.push(vuetify())
      );
    },
  ],
  //@ts-ignore
  gtag: {
    id: "G-HXF78YG8DP",
  },
});
