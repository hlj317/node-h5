const mysql = require("../common/mysql.js");
const BaseModel = require("./baseModel.js");
const dbConf = require("../config/db.js");
const SqlString = require("sqlstring");

class movieModel extends BaseModel {
	constructor() {
		/**
         * @type {string}
         */
		let database = dbConf.database || "";
		/**
         * @type {string}
         */
		let playerTable = dbConf.movie_table || "";
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
	async addFightUser(doubanId,title,rate,poster,type) {
		let fieldStr = dbConf.movie_table_field.join(",");
		let valueArr = [];
		valueArr.push(doubanId.toString());
		valueArr.push(title.toString());
		valueArr.push(rate.toString());
		valueArr.push(poster.toString());
		valueArr.push(type.toString());
		const sql = `INSERT INTO ${this.getRealTableName()} (${fieldStr}) VALUES (?,?,?,?,?)`;
		let result = await mysql.bindSql(sql, valueArr, this.dbName)
			.catch((e) => {
				console.log(e);
			});

		return result;
	}

	async delFightUser(type) {

		const sql = `DELETE FROM ${this.getRealTableName()} WHERE type='${type}'`;
		let result = await mysql.bindSql(sql, this.dbName)
			.catch((e) => {
				console.log(e);
			});

		return result;
	}

	async getFightUserList(type) {
		let sql = "",
			obj = {},
			result = [];
		if(type && type.length > 0){
			for(var i=0; i< type.length; i++){
				sql = `SELECT * FROM ${this.getRealTableName()} WHERE type='${type[i]}' limit 9`;
				result = await mysql.bindSql(sql, this.dbName)
					.catch((e) => {
						console.log(e);
					});
				obj[type[i]] = result;
			}
		}else{
			sql = `SELECT * FROM ${this.getRealTableName()}`;
			obj = await mysql.bindSql(sql, this.dbName)
				.catch((e) => {
					console.log(e);
				});
		}

		return obj;
	}
    
	//获得单个电影类目的数据
	async getFightUserOne(type,pageStart,pageSize) {
		let sql = "",
			result = [];
		sql = `SELECT * FROM ${this.getRealTableName()} WHERE type='${type}' limit ${pageStart},${pageSize}`;
		result = await mysql.bindSql(sql, this.dbName)
			.catch((e) => {
				console.log(e);
			});
		return result;
	}

	async updateFightUser(groupName, gid) {
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


}

module.exports = movieModel;