import App from "./App.vue";
import "./index.less";
import VueI18n from "vue-i18n";
import cnlang from "../../common/lang/cn.js";
import enlang from "../../common/lang/en.js";
import twlang from "../../common/lang/tw.js";
// eslint-disable-next-line no-undef
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: localStorage.getItem("lang") || "en",
    messages: {
        "en": enlang,
        "cn": cnlang,
        "tw": twlang
    }
});
/* eslint-disable no-undef*/
new Vue({
    el: "#app",
    i18n,
    template: "<App/>",
    components: {
        App,
    },
});
