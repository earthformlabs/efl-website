// plugins/vuetify.js
// import "@mdi/font/css/materialdesignicons.css";
import "@/assets/styles/variables.scss";

import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
      VBtn: {
        style: "text-transform: none;",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
