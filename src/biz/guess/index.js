import App from "./App.vue";
import "./index.less";
import VueI18n from "vue-i18n";
import zhlang from "./lang/zh.js";
import enlang from "./lang/en.js";

// eslint-disable-next-line no-undef
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: localStorage.getItem("locale") || "zh",
    messages: {
        "zh": zhlang,
        "en": enlang
    }
});

/* eslint-disable no-undef*/
new Vue({
    "el": "#app",
    i18n,
    "template": "<App/>",
    "components": { App }
});


