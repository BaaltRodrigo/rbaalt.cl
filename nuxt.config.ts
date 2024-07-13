// https://nuxt.com/docs/api/configuration/nuxt-config
// @see https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/main.scss"],
  ssr: true,
});
