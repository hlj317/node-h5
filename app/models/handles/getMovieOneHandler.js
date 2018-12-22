const BaseClass = require('./baseClass.js');
const g = require('../config/code.js');
const cache = require('../../helpers/cache');
const middleware = require('../../helpers/middleware');

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
    async run(ctx, next , statesCode, message , movelistData) {
        if(statesCode === '200'){
            ctx.body = {
                success : true,
                message : message || '查询成功',
                data : movelistData,
                statesCode : '200'
            };
        }else if(statesCode === '204'){
            ctx.body = {
                success : false,
                message : message || '数据已经加载完',
                data : null,
                statesCode : '204'
            };
        }else{
            ctx.body = {
                success : false,
                message : message || '查询失败',
                data : null,
                statesCode : '505'
            };
        }

        return next();
    }

    async handler(ctx, next) {

        let type = ctx.request.body.type;
        let pageStart = ctx.request.body.pageStart;
        let pageSize = ctx.request.body.pageSize;
        let movelistData = null;
        let tokenSessionId = ctx.cookies.get('sessionId');
        let sessionId = await cache.get('sessionId');
        let result = null;
        this.ctx = ctx;
        this.next = next;

        if (!this.checkMethod(ctx.request.method)) {
            this.responseErrorMessage(405, '请求方法无效');
            return next();
        }

        movelistData = await this.movieModel.getItemOneMovie(type,pageStart,pageSize);
        if(movelistData.length > 0){
            result = await this.run(ctx, next,'200','查询成功',movelistData);
        }else{
            result = await this.run(ctx, next,'204','数据已经加载完',movelistData);
        }

        return result;
    }


}

module.exports = movieListHandler;