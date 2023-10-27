import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import i18n from "./plugins/i18n";

// plugins
import vuetify from "./plugins/vuetify";

createApp(App).use(vuetify).use(i18n).mount("#app");
