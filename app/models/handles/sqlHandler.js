const BaseClass = require("./baseClass.js");
const g = require("../config/code.js");

class sqlHandler extends BaseClass {
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
	async run(ctx, next,isLogin,message) {

		if(isLogin){
			ctx.body = {
				success: true,
				message: message || "请求成功"
			};
		}else{
			ctx.body = {
				success: false,
				message: message || "请求失败"
			};
		}

		return next();
	}

	async handler(ctx, next) {

		this.ctx = ctx;
		this.next = next;
		let username = "",
			password = "",
			isLogin = false,
			runDate = "";
        
		if (!this.checkMethod(ctx.request.method)) {
			this.responseErrorMessage(405, "请求方法无效");
			return next();
		}

		username = ctx.request.body.username;
		password = ctx.request.body.password;
		isLogin = await this.sqlModel.getAccount(username,password);
		if(isLogin){
			runDate = await this.run(ctx, next,isLogin,"请求成功");
		}else{
			runDate = await this.run(ctx, next,false,"请求失败");
		}

		return runDate;

	}

}

module.exports = sqlHandler;