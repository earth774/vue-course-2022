import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "fa" || "mdi",
  },
  theme: {
    themes: {
      dark: {
        background: "#EEEEEE",
      },
    },
  },
};

export default new Vuetify(opts);
