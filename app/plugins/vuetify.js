import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/exo-2";

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({});
  app.vueApp.use(vuetify);
});
