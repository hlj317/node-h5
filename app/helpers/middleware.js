const HtmlMinifier = require("koa-html-minifier");
const koaRewrite = require("koa-rewrite");
const koaResponseTime = require("koa-response-time");
const KoaMount = require("koa-mount");
const KoaStatic = require("koa-static");
const cache = require("./cache");

/**
 * 默认首页
 *
 * @return {Function}
 */
let indexRewrite = () => koaRewrite(/^\/?$/, "/index.html");

/**
 * 内部重定向,代替原先nginx重定向
 *
 * @return {Function}
 */
let internalRewrite = () => koaRewrite(/^(\/[\w/]+)\.html(.*)/, "$1$2");

/**
 * HTML文件压缩
 *
 * @public
 * @return {HtmlMinifier}
 */
let htmlMinifier = () => HtmlMinifier({
	collapseWhitespace: true,
	removeComments: false,
});

/**
 * 响应时间中间件
 *
 * @public
 * @return {Function}
 */
let responseTime = () => koaResponseTime();

/**
 * 静态资源绑定
 *
 * @public
 * @return {Function}
 */
let staticMount = () => {
	const mount = KoaMount("/assets/", KoaStatic("./assets", {
		maxage: 300000,
	}));

	return mount;
};

/**
 * 页面CDN缓存中间件
 *
 * @public
 * @param ctx
 * @param next
 * @throws {Error}
 */
let pageCache = (ctx, next) => {
	ctx.cache = (maxAge) => {
		if (maxAge === false) {
			ctx.set("Cache-Control", "private, no-cache, no-store");
			return;
		}

		if (typeof maxAge === "number") {
			maxAge = Math.round(maxAge);
			ctx.set("Cache-Control", `max-age=30,s-maxage=${maxAge}`);
		} else {
			throw new Error(`invalid cache control value: ${maxAge}`);
		}
	};

	return next();
};

/**
 * 错误重定向
 *
 * @TODO 测试
 * @public
 * @param ctx
 * @param next
 * @return {Promise.<void>}
 */
let errorRedirect = async (ctx, next) => {
	try {
		await next();
		const status = ctx.response.status;
		if (status === 404) {
			ctx.status = 404;
			await ctx.render("error/404");
		}
	} catch(e) {
		ctx.cache(false);
		ctx.app.onerror(e);
		ctx.status = 500;
		await ctx.render("error/500");
	}
};

/**
 * 登录态检查
 *
 * @public
 * @param ctx
 * @param next
 * @return {Promise.<void>}
 */
let checkLogin = async (ctx, next,url) => {
	console.log(url);
	if(ctx.url != "/movie"){
		return next();
	}
	let tokenSessionId = ctx.cookies.get("sessionId");
	let sessionId = await cache.get("sessionId");
	if(!sessionId || !tokenSessionId || sessionId !== tokenSessionId){
		ctx.body = {
			success : false,
			message : "登录态失效",
			data : null,
			statesCode : 505
		};
	}
	return next();
};

/**
 * 首页重定向到电影首页
 *
 * @public
 * @param ctx
 * @param next
 * @return {Promise.<void>}
 */

let homeRewrite = async (ctx,next) => {
	if(ctx.request.url === "/" || ctx.request.url === "/index"){
		ctx.response.redirect("/movie");
	}
	return next();
};

let handleError = async (ctx,next) => {
	console.log("********************hahahahah");
	try{
		await next();
	}catch(e){
		console.log("**************err");
		ctx.body = "ok";
	}
};

module.exports = {
	indexRewrite,
	internalRewrite,
	pageCache,
	errorRedirect,
	responseTime,
	htmlMinifier,
	staticMount,
	checkLogin,
	homeRewrite,
	handleError
};
