const BaseClass = require("./baseClass.js");
// const g = require("../config/code.js");
const cache = require("../../helpers/cache");
// const session = require("koa-session");

class loginHandler extends BaseClass {
	constructor() {
		super();
	}

	/**
     *
     * @param ctx
     * @param next
     * @param oid 新用户oid
     * @returns {Promise<*>}
     */
	async run(ctx,next,statesCode,message) {
		if(statesCode === "200"){
			ctx.body = {
				success : true,
				message : message || "注册成功",
				statesCode : "200"
			};
		}else if(statesCode === "206"){
			ctx.body = {
				success : false,
				message : message || "账号重名",
				statesCode : "206"
			};
		}else{
			ctx.body = {
				success : false,
				message : message || "注册失败",
				statesCode : "505"
			};
		}

		return next();
	}

	async handler(ctx, next) {
		this.ctx = ctx;
		this.next = next;
		let sessionId = "",
			username = "",
			password = "",
			isLogin = false,
			isAccount = false,
			runDate = "";
		if (!this.checkMethod(ctx.request.method)) {
			this.responseErrorMessage(405, "请求方法无效");
			return next();
		}

		username = ctx.request.body.username;
		password = ctx.request.body.password;

		isAccount = await this.accountModel.checkAccount(username);

		if(isAccount){
			runDate = await this.run(ctx, next,"206","账号重名");
			return runDate;
		}

		isLogin = await this.accountModel.addAccount(username,password);
		if(isLogin){
			sessionId = 10000000 + Math.floor(Math.random() * 89999999);
			await cache.set("sessionId",sessionId,60 * 60 * 24).catch(e => console.error(`redis set error${e.message}`));
			//用户存一下cookie
			let days = 24 * 60 * 60 * 1000;
			ctx.set("Access-Control-Allow-Origin", "*");
			ctx.set("Access-Control-Allow-Methods", "POST, GET");
			ctx.set("Access-Control-Max-Age", "3600");
			ctx.set("Access-Control-Allow-Credentials", "true");
			ctx.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
			ctx.cookies.set("sessionId", sessionId, {
				httpOnly: false,
				// domain: ctx.request.header.host,
				expires: new Date(Date.now() + days)
			});
			ctx.cookies.set("username", username, {
				httpOnly: false,
				// domain: ctx.request.header.host,
				expires: new Date(Date.now() + days)
			});
			runDate = await this.run(ctx, next,"200","注册成功");
		}else{
			runDate = await this.run(ctx, next,"505","注册失败");
		}

		return runDate;

	}

}

module.exports = loginHandler;