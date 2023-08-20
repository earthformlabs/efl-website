// plugins/vuetify.js
// import "@mdi/font/css/materialdesignicons.css";
import "@/assets/styles/variables.scss";

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
  });

  nuxtApp.vueApp.use(vuetify);
});
