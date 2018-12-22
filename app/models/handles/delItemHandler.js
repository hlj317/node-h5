const BaseClass = require('./baseClass.js');
const g = require('../config/code.js');

class addItemHandler extends BaseClass {
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
    async run(ctx, next) {
        // let groupId = this.getRequestParam('group_id');

        // if (!this.checkGroupIdValid(groupId)) {
        //     this.responseErrorMessage(g.JOIN_INVALIDD_GROUP_ID, 'group_id参数错误')
        //     return next();
        // }

        ctx.body = {
            success: true,
            message: '删除成功'
        };
        return next();
    }

    async handler(ctx, next) {
        this.ctx = ctx;
        this.next = next;
        let tokenO = ctx.cookies.get('x-flybear-token-o');
        let oid = '';
        let runDate = '';

        if (!this.checkMethod(ctx.request.method)) {
            this.responseErrorMessage(405, '请求方法无效');
            return next();
        }

        let id = parseInt(ctx.request.query.id);
        let delete_res =  await this.groupModel.delNewGroup(id);
        runDate = await this.run(ctx, next);
        // 新用户存一下cookie
        let days = 24 * 60 * 60 * 1000;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Methods', 'POST, GET');
        ctx.set('Access-Control-Max-Age', '3600');
        ctx.set('Access-Control-Allow-Credentials', 'true');
        ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
        ctx.cookies.set('x-flybear-token-o', 'hlj00000000', {
            httpOnly: false,
            domain: ctx.request.header.host,
            expires: new Date(Date.now() + days),
        });

        return runDate;

    }

    /**
     * 判断战队是否已经存在,
     * @param gid
     * @returns {Promise<void>}
     */
    async checkGroupInvalid(gid) {
        if (!gid) {
            return false;
        }
        let result = await this.groupModel.getGroupInfo(gid);
        if (result) {
            return true;
        }
        return false;
    }

    /**
     * 添加新成员
     * @param ctx
     * @param newMemberOid
     * @param groupId
     * @param userInfo
     * @returns {Promise<boolean>}
     */
    async addNewMember(ctx, newMemberOid, groupId, userInfo) {
        if (!newMemberOid || !groupId) {
            return false;
        }
        let initialPlayNum = await this.getBconf(g.INITIAL_TOTALL_PLAY_NUM) || 5;
        let res = await this.playerModel.addNewPlayer(userInfo, groupId, initialPlayNum);
    }

    /**
     *  判断groupId 是否为正整数
     * @param groupId
     * @returns {boolean}
     */
    checkGroupIdValid(groupId) {
        return (/(^[0-9]\d*$)/.test(groupId));
    }
}

module.exports = addItemHandler;