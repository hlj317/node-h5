const BaseClass = require("./baseClass.js");

class testGetListHandler extends BaseClass {
	constructor() {
		super();
	}

	async run(ctx, next , pass, data) {
		if(pass){
			ctx.body = {
				success : true,
				message : "查询成功",
				data,
				statesCode : 200
			};
		}else{
			ctx.body = {
				success : false,
				message : "查询失败",
				data : null,
				statesCode : 505
			};
		}

		return next();
	}

	async handler(ctx, next) {
		const openid = ctx.request.body.openid;
		const score = Math.floor(Math.random()*10+1);
		const data = {
			text : openid + "获得的分数是：" + score,
			score
		};
		if (!this.checkMethod(ctx.request.method)) {
			this.responseErrorMessage(405, "请求方法无效");
			return next();
		}
		const result = await this.run(ctx, next,true,data);
		return result;
	}


}

module.exports = testGetListHandler;