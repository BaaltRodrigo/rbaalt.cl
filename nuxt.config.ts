import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  ssr: true,

  build: {
    // Removed Vuetify transpile
  },

  modules: [
    // Removed Vuetify module
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-02-14",
});
