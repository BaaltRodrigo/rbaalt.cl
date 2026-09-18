import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/exo-2";
import "@fontsource-variable/geist-mono";

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults: {
      VContainer: {
        class: "border-s-sm border-e-sm border-b-sm",
        maxWidth: "1024",
      },

      VBtn: {
        class: "text-body-large",
      },
    },
  });
  app.vueApp.use(vuetify);
});
