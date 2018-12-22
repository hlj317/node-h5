const demo = require('../../app/controllers/demo');
const activity = require('../../app/controllers/activity');
const movie = require('../../app/controllers/movie');
const cms = require('../../app/controllers/cms');

//猜价格业务api
const guessApi = require('../../app/controllers/api');

module.exports = {
    // <demo> hello world
    '/demo/hello': demo.hello,
    '/guess': activity.guess,
    '/bear': activity.bear,
    '/cms': cms.index,

    //电影网站
    '/movie':movie.index,
    '/detail':movie.movieDetail,

    //猜价格api(测试)
    '/guess/getExperience':guessApi.getExperience,

    //猜价格获取次数
    '/guess/getCount':guessApi.getCount,

    //增加价格增加次数
    '/guess/addCount':guessApi.addCount,

    //电影网站接口
    '/getMovieDetail':movie.getMovieDetail,
    '/addMovieItem':movie.addMovieItem,
    '/getMovieItem':movie.getMovieItem,
    '/delMovieItem':movie.delMovieItem,
    '/updateMovieItem':movie.updateMovieItem,
    '/getMovieList':movie.getMovieList,
    '/getMovieOneItem':movie.getMovieOneItem,

    //登录界面
    '/login':movie.login,
    '/register':movie.register,
    '/loginAccount':movie.loginAccount,
    '/addAccount':movie.addAccount,

    //AI匹配页面
    '/ai':movie.ai
    
};
