const demo = require('../../app/controllers/demo');
const activity = require('../../app/controllers/activity');
const cms = require('../../app/controllers/cms');

//猜价格业务api
const guessApi = require('../../app/controllers/api');

module.exports = {
    // <demo> hello world
    '/demo/hello': demo.hello,
    '/guess': activity.guess,
    '/cms': cms.index,

    //猜价格api(测试)
    '/guess/getExperience':guessApi.getExperience,

    //猜价格获取次数
    '/guess/getCount':guessApi.getCount,

    //增加价格增加次数
    '/guess/addCount':guessApi.addCount


};
