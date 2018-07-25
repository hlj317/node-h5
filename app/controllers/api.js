const request = require('../helpers/request');
const cache = require('../helpers/cache');

// 获取第三方接口数据（测试）
const getExperience = async function (ctx, next) {
    const getExperienceData = await request({
            cache: false,
            cacheTime: 500,
            url: 'http://sapi.beibei.com/xinde/gather_all_list/1-10-2.html'
        })
    ctx.body = getExperienceData;
    return next();
};

// 猜价格增加次数
const addCount = async function (ctx, next) {
    // 接口缓存
    // ctx.cache(10000);
    const uid = ctx.query.uid;
    const data = JSON.parse(await cache.get('cache_guess_count'));
    let count = 0;
    if(data && data[uid] && data[uid]['guessCount']){
        count = data[uid]['guessCount'];
    }
    let _value = {};
    _value[uid] = {};
    _value[uid]['guessCount'] = count ? ++count :1;
    await cache.set('cache_guess_count', JSON.stringify(_value)).catch((e) => {
        // 记录下redis的set error
        console.error(`redis set error${e.message}`);
    });

    ctx.body = {success:true,message:'添加成功',count:count};
    return next();
};

// 猜价格获取次数
const getCount = async function (ctx, next) {
    const uid = ctx.query.uid;
    const data = JSON.parse(await cache.get('cache_guess_count'));
    let count = 0;
    if(data && data[uid] && data[uid]['guessCount']){
        count = data[uid]['guessCount'];
    }
    ctx.body = {success:true,count:count};
    return next();
};

module.exports = {
    getExperience,
    getCount,
    addCount
}
