// Styles
import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/exo-2";
// import "vuetify/styles";
import "../styles/main.scss";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { customDefaults } from "./vuetify/defaults.js";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,
  directives,
  defaults: customDefaults,
});
