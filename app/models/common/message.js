const redisClient           = require('../common/redis.js');
const _                     = require('underscore');
const g                     = require('../config/code.js');

class Message {
    /**
     *
     * @param oid       接受message的人的oid
     * @param type      该message 是什么类型的，beDeleted, beJoined, beLeaved
     * @param other     另外的信息
     * @returns {Promise<boolean>}
     */
    static async setMessage(oid, type, other) {
        if (_.isUndefined(oid) || _.isUndefined(type) || _.isUndefined(other)) {
            return false;
        }

        let message = this.makeMessage(type, other);

        let cacheMessageArr = await redisClient.get(`flybear908_messsage_for_${oid}`);

        if (cacheMessageArr) {
            try {
                cacheMessageArr = JSON.parse(cacheMessageArr);
                cacheMessageArr.push(message);
            } catch (e) {
                console.log(e);
                console.log('Message 从redis中 json parse 失败了');
            }
        }
        if (!cacheMessageArr) {
            cacheMessageArr = [message];
        }

        let res =  await redisClient.set(`flybear908_messsage_for_${oid}`, JSON.stringify(cacheMessageArr), g.REDIS_MESSAGE_MAX_EXPIRE);

        if (res) {
            return true;
        }
        return false;
    }

    /**
     * 从redis里面获取指定 oid 的message
     * @param oid
     * @returns { 'fasfsad\ndafadsf\ndfda\n' | '' }
     */
    static async getMessage(oid) {
        if (_.isUndefined(oid)) {
            return false;
        }

        let message = '';

        let cacheMessageArr = await redisClient.get(`flybear908_messsage_for_${oid}`);
        if (!cacheMessageArr) {
            return message;
        }
        if (cacheMessageArr) {
            try {
                cacheMessageArr = JSON.parse(cacheMessageArr);
                message = cacheMessageArr.join('\n');
                await redisClient.set(`flybear908_messsage_for_${oid}`, '', 1);
            } catch (e) {
                console.log('Message 从redis中 json parse 失败了');
                console.log(e);
            }
        }
        return message;
    }

    static makeMessage(type, other) {
        if (_.isUndefined(type) ||_.isUndefined(other)) {
            return false;
        }

        let message = '';
        if (type === this.beDeleted) {
            message = `您被「${other}」战队开除了，快去招募自己的队友，和他一决高下吧~`;
        } else if (type === this.beJoined) {
            message = `「${other}」加入了您的战队，和ta并肩作战吧~`;
        } else if (type === this.beLeaved) {
            message = `「${other}」抛弃了您的战队，快刷一波高分让ta后悔吧~`;
        }
        return message;
    }
}

// 用户被踢出
Message.beDeleted = 1;
// 用户的战队被加入
Message.beJoined  = 2;
// 用户战队的队员离开
Message.beLeaved  = 3;

module.exports = Message;
