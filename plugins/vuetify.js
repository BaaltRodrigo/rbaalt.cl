// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/exo-2";

import "~/styles/main.scss";
// import "vuetify/styles";

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
