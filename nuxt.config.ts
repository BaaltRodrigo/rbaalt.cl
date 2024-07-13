// https://nuxt.com/docs/api/configuration/nuxt-config
// @see https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/ui"]
});