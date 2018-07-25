const Redis = require('ioredis');

const keyPrefix = "xiaohuangren_"

let client = new Redis({
    host: '127.0.0.1',
    port: 6379
},);

const EXPIRE_TIME = 86400;

const get = (key) => new Promise((resolve, reject) => {
    client.get(String(keyPrefix + key), (err, body) => {
        if (!err) {
            resolve(body);
        } else {
            reject(err);
        }
    });
});
/**
 * 新增记录
 * @param key
 * @param val
 * @param expire 单位秒,过期时间后自动删除 60 * 60 * 24 * 1
 * @returns {Promise}
 */
const set = (key, val, expire = EXPIRE_TIME) => new Promise((resolve, reject) => {
    client.set(String(keyPrefix + key), String(val), 'EX', expire, (err, body) => {
        if (!err) {
            resolve(body);
        } else {
            reject(err);
        }
    });
});

const del = (key) => new Promise((resolve, reject) => {
    client.del(String(keyPrefix + key), (err, body) => {
        if (!err) {
            resolve(body);
        } else {
            reject(err);
        }
    });
});

exports.get = get;
exports.set = set;
exports.del = del;
