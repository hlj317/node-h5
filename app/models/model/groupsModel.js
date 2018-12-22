const mysql = require('../common/mysql.js');
const BaseModel = require('./baseModel.js');
const dbConf = require('../config/db.js');
const SqlString = require('sqlstring');
const _ = require('underscore');
const xss = require('xss');

const filteremoji = (originText) => {
    //处理Emoj表情过滤
    let ranges = [
        '\ud83c[\udf00-\udfff]',
        '\ud83d[\udc00-\ude4f]',
        '\ud83d[\ude80-\udeff]',
    ];
    let newText = originText.replace(new RegExp(ranges.join('|'), 'g'), '');
    return newText;
};

class GroupModel extends BaseModel {
    constructor() {
        /**
         * @type {string}
         */
        let database = dbConf.database || '';
        /**
         * @type {string}
         */
        let playerTable = dbConf.group_table || '';
        super(playerTable, database);
    }

    /**
     * 插入一条新的战队信息
     * @param name                      战队名称，默认是用户昵称
     * @param oid                       用户oid
     * @param group_score               队伍的分数，默认是0
     * @param state                     队伍是否被删除，默认是0
     * @returns {Promise<*>}
     */
    async addNewGroup(name, group_score = 0, state = 1) {
        // name = filteremoji(name);
        let fieldStr = dbConf.group_table_field.join(',');

        let valueArr = [];

        // group_name
        valueArr.push(SqlString.format(name));
        // group_score
        valueArr.push(group_score);
        const sql = `INSERT INTO ${this.getRealTableName()} (${fieldStr}) VALUES (?,?)`;
        let result = await mysql.bindSql(sql, valueArr, this.dbName)
            .catch((e) => {
                console.log(e)
            });

        return result;
    }

    async delNewGroup(id) {

        const sql = `DELETE FROM ${this.getRealTableName()} WHERE id=${id}`;
        let result = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e)
            });

        return result;
    }

    async getNewGroup(id) {
        const sql = `SELECT * FROM ${this.getRealTableName()} WHERE id = '${id}'`;
        let result = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e)
            });

        return result;
    }

    async updateNewGroup(name, group_score = 0,id) {

        const sql = `UPDATE ${this.getRealTableName()}
        SET
        group_name = '${name}',
        group_score = '${group_score}'
        WHERE id = '${id}'`;

        let result = await mysql.bindSql(sql, this.dbName)
            .catch((e) => {
                console.log(e)
            });

        return result;
    }

    /**
     *  根据gid 查找 group
     * @param gid
     * @returns {Promise<*>}
     */
    async getGroupInfo(gid) {
        if (!gid) {
            return false;
        }
        let sql = `SELECT * FROM ${this.getRealTableName()} WHERE id = '${gid}'`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        return res[0];
    }

    /**
     * 若减少一成员，则团队的分数也减去该成员的成绩
     * @param num    减去的分数
     * @param gid    队伍的id
     * @returns {Promise<*>}
     */
    async reduceGroupScore(num, gid) {
        if (_.isUndefined(num) || _.isUndefined(gid)) {
            return false;
        }
        let sql = `UPDATE ${this.getRealTableName()}
        SET
        group_score = group_score - '${+num}',
        gmt_modified = ${new Date().getTime() / 1000}
        WHERE id = '${gid}'`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        if (res) {
            return res;
        }
        return false;
    }

    /**
     * 若增加一成员，则团队的分数也加上该成员的成绩
     * @param num    加上的分数
     * @param gid    队伍的id
     * @returns {Promise<*>}
     */
    async addGroupScore(num, gid) {
        if (_.isUndefined(num) || _.isUndefined(gid)) {
            return false;
        }
        let sql = `UPDATE ${this.getRealTableName()}
        SET
        group_score = group_score + '${+num}',
        gmt_modified = ${new Date().getTime() / 1000}
        WHERE id = '${gid}'`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    /**
     *  修改战队的名称
     * @param groupName
     * @param gid
     * @returns {Promise<*>}
     */
    async updateGroupName(groupName, gid) {
        let sql = `UPDATE ${this.getRealTableName()}
        SET
        group_name = '${SqlString.format(groupName)}',
        gmt_modified = ${new Date().getTime() / 1000}
        WHERE id = '${gid}'`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    /**
     * 更新战队总成绩
     * @param score
     * @param gid
     * @returns {Promise<*>}
     */
    async updateGroupScore(score, gid) {
        let sql = `UPDATE ${this.getRealTableName()}
        SET
        group_score = '${score}',
        gmt_modified = ${new Date().getTime() / 1000}
        WHERE id = '${gid}'`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    /**
     *  返回前100 的团队排名页面
     * @returns {Promise<*>}
     */
    async getTopGroupOrder(num) {
        let sql = `SELECT * FROM ${this.getRealTableName()} WHERE state = 1  ORDER BY group_score desc LIMIT ${num}`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    /**
     *  修改战队状态
     * @param gid
     * @param state
     * @returns {Promise<*>}
     */
    async changGroupState(gid, state) {
        let sql = `UPDATE ${this.getRealTableName()}
        SET
        state = '${state}',
        gmt_modified = ${new Date().getTime() / 1000}
        WHERE id = '${gid}'`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    async getRankExceedScore(num) {
        let sql = `SELECT * FROM ${this.getRealTableName()} WHERE state = 1 AND group_score > ${num}`;
        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    /**
     * 获取前10名的
     * @returns {Promise<*>}
     */
    async getTopGroup10() {
        let sql = `SELECT * FROM ${this.getRealTableName()} WHERE state = 1 ORDER BY group_score DESC LIMIT 10`;

        let res = await mysql.runSql(sql, this.dbName)
            .catch((err) => {
                console.log(err);
            });

        return res;
    }
}

module.exports = GroupModel;