import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/exo-2";

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
    },
  });
  app.vueApp.use(vuetify);
});
