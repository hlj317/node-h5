import Vue from "vue";
import VueRouter from "vue-router";   
import Main from "./components/main-component.vue";
import Single from "./pages/design-patterns/single.vue";
import Strategy from "./pages/design-patterns/strategy.vue";
import Proxy from "./pages/design-patterns/proxy.vue";

//开启debug模式(开启错误提示)
Vue.config.debug = true;
Vue.use(VueRouter);

// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [
		{
			path: "/cms",
			component: Main
		},
		{
			path: "/cms/single",
			component: Single
		},
		{
			path: "/cms/strategy",
			component: Strategy
		},
		{
			path: "/cms/proxy",
			component: Proxy
		}
	]
});