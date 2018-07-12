(async () => {
    const Server = require('./app/server');
    const Xtpl = require('koa-xtpl');
    const Router = require('koa-router');
    const etag = require('koa-etag');
    const koaLog = require('koa-log');
    const conditional = require('koa-conditional-get');

    const route = require('./app/route');
    const middleware = require('./app/helpers/middleware');
    const helperView = require('./app/helpers/view');

    const server = new Server();

    // 添加模板引擎
    server.use(Xtpl({
        root: './app/views',
        extname: 'html',
        commands: helperView
    }));

    // 添加默认首页
    server.use(middleware.indexRewrite());
    // 添加内部重定向
    server.use(middleware.internalRewrite());
    // HTML文件压缩
    server.use(middleware.htmlMinifier());

    // 记录接口响应时间 response header中的X-Response-Time
    server.use(middleware.responseTime());
    server.use(conditional());
    server.use(etag());
    server.use(middleware.staticMount());
    // 添加日志记录
    server.use(koaLog('common'));
    // 添加页面CND中间件
    server.use(middleware.pageCache);
    // 添加错误重定向中间件
    server.use(middleware.errorRedirect);

    server.use(async (ctx, next) => {
        // view 中的全局变量
        ctx.state.path = ctx.path.slice(1); // 去掉后缀.html,用于页面上自动载于静态资源
        return next();
    });

    // 从路由注册表中获取路由
    const router = new Router();

    let controller;
    for (let urlPath in route) {
        controller = route[urlPath];

        router.get(urlPath, controller);
    }

    await server.startup(router, 80);

})();
