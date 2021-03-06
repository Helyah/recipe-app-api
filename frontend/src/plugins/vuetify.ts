import Vue from "vue";
import Vuetify from "vuetify/lib";
import fr from "vuetify/src/locale/fr";
import en from "vuetify/src/locale/en";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      dark: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { fr, en },
    current: "fr"
  }
});
