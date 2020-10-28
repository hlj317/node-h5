import Vue from "vue";
import ElementUI from "element-ui";
import router from "./router.js";
import "./assets/css/themes/index.css";
import App from "./App.vue";

Vue.use(ElementUI);

new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {
        App,
    },
});
