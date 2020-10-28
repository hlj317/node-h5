import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./components/main-component.vue";

//基础组件
import Layout from "./pages/basic/layout.vue";
import Icon from "./pages/basic/icon.vue";
import Container from "./pages/basic/container.vue";
import Button from "./pages/basic/button.vue";

//表单组件
import Radio from "./pages/form/radio.vue";
import Checkbox from "./pages/form/checkbox.vue";
import Input from "./pages/form/input.vue";
import Slider from "./pages/form/slider.vue";
import Rate from "./pages/form/rate.vue";

//数据列表组件
import Table from "./pages/data/table.vue";
import Tree from "./pages/data/tree.vue";
import Pagination from "./pages/data/pagination.vue";

//通知组件
import Alert from "./pages/notice/alert.vue";
import Loading from "./pages/notice/loading.vue";
import Message from "./pages/notice/message.vue";
import Notification from "./pages/notice/notification.vue";

//导航组件
import Navmenu from "./pages/navigation/navmenu.vue";
import Tabs from "./pages/navigation/tabs.vue";
import Breadcrumb from "./pages/navigation/breadcrumb.vue";
import Steps from "./pages/navigation/steps.vue";

//其它组件
import Dialog from "./pages/other/dialog.vue";
import Popover from "./pages/other/popover.vue";
import Card from "./pages/other/card.vue";
import Carousel from "./pages/other/carousel.vue";
import Collapse from "./pages/other/collapse.vue";

//设计模式
import Single from "./pages/design-pattern/single.vue";
import Strategy from "./pages/design-pattern/strategy.vue";
import Proxy from "./pages/design-pattern/proxy.vue";

//开启debug模式(开启错误提示)
Vue.config.debug = true;
Vue.use(VueRouter);

// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
    mode: "hash",
    base: __dirname,
    routes: [
        //首页
        {
            path: "/",
            component: Main
        },

        //基本组件
        {
            path: "/layout",
            component: Layout
        },
        {
            path: "/container",
            component: Container
        },
        {
            path: "/icon",
            component: Icon
        },
        {
            path: "/button",
            component: Button
        },

        //表单组件
        {
            path: "/radio",
            component: Radio
        },
        {
            path: "/checkbox",
            component: Checkbox
        },
        {
            path: "/input",
            component: Input
        },
        {
            path: "/slider",
            component: Slider
        },
        {
            path: "/rate",
            component: Rate
        },

        //数据列表组件
        {
            path: "/table",
            component: Table
        },
        {
            path: "/tree",
            component: Tree
        },
        {
            path: "/pagination",
            component: Pagination
        },

        //通知组件
        {
            path: "/alert",
            component: Alert
        },
        {
            path: "/loading",
            component: Loading
        },
        {
            path: "/message",
            component: Message
        },
        {
            path: "/notification",
            component: Notification
        },

        //导航组件
        {
            path: "/navmenu",
            component: Navmenu
        },
        {
            path: "/tabs",
            component: Tabs
        },
        {
            path: "/breadcrumb",
            component: Breadcrumb
        },
        {
            path: "/steps",
            component: Steps
        },

        //其它组件
        {
            path: "/dialog",
            component: Dialog
        },
        {
            path: "/popover",
            component: Popover
        },
        {
            path: "/card",
            component: Card
        },
        {
            path: "/carousel",
            component: Carousel
        },
        {
            path: "/collapse",
            component: Collapse
        },

        //设计模式
        {
            path: "/single",
            component: Single
        },
        {
            path: "/strategy",
            component: Strategy
        },
        {
            path: "/proxy",
            component: Proxy
        }
    ]
});