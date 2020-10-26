const BaseClass = require("./baseClass.js");
// const g = require("../config/code.js");
// const cache = require("../../helpers/cache");
// const middleware = require("../../helpers/middleware");

class movieListHandler extends BaseClass {
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
    async run (ctx, next, pass, message, movelistData) {
        if (pass) {
            ctx.body = {
                success: true,
                message: message || "查询成功",
                data: movelistData,
                statesCode: 200
            };
        } else {
            ctx.body = {
                success: false,
                message: message || "查询失败",
                data: null,
                statesCode: 505
            };
        }

        return next();
    }

    async handler (ctx, next) {

        this.ctx = ctx;
        this.next = next;
        let type = ctx.request.body.type;
        let movelistData = null;
        let result = null;
        if (!this.checkMethod(ctx.request.method)) {
            this.responseErrorMessage(405, "请求方法无效");
            return next();
        }
        movelistData = await this.movieModel.getNewMovie(type);
        result = await this.run(ctx, next, true, "查询成功", movelistData);
        return result;
    }


}

module.exports = movieListHandler;