import Vue from "vue";
import ElementUI from "element-ui";
import router from "./router.js";
import "element-ui/lib/theme-chalk/index.css";
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
