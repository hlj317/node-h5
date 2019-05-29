const demo = require("../../app/controllers/demo");
const activity = require("../../app/controllers/activity");
const movie = require("../../app/controllers/movie");
// const fight = require("../../app/controllers/fight");
const cms = require("../../app/controllers/cms");
const activsystem = require("../../app/controllers/activsystem");

//猜价格业务api
const guessApi = require("../../app/controllers/api");

module.exports = {
	// <demo> hello world
	"/demo/hello": demo.hello,
	"/guess": activity.guess,
	"/bear": activity.bear,
	"/phptest": activity.phptest,
	"/imgtest": activity.imgtest,
	"/": activity.phptest,
	"/cms": cms.index,

	//电影网站
	"/movie":movie.index,
	"/detail":movie.movieDetail,

	//猜价格api(测试)
	"/guess/getExperience":guessApi.getExperience,

	//猜价格获取次数
	"/guess/getCount":guessApi.getCount,

	//增加价格增加次数
	"/guess/addCount":guessApi.addCount,

	//电影网站接口
	"/getMovieDetail":movie.getMovieDetail,
	"/addMovieItem":movie.addMovieItem,
	"/getMovieItem":movie.getMovieItem,
	"/delMovieItem":movie.delMovieItem,
	"/updateMovieItem":movie.updateMovieItem,
	"/getMovieList":movie.getMovieList,
	"/getMovieOneItem":movie.getMovieOneItem,

	//爬虫抓取电影数据
	"/trailerAddData":movie.trailerAddData,

	//登录界面
	"/login":movie.login,
	"/register":movie.register,
	"/loginAccount":movie.loginAccount,
	"/addAccount":movie.addAccount,

	//AI匹配页面
	"/ai":movie.ai,

	//PK大乱斗页面和API
	// "/fight":fight.index,
	// "/getFightUserList":fight.getFightUserList,
	// "/addFightUser":fight.addFightUser,
	// "/delFightUser":fight.delFightUser,
	// "/getFightUserOne":fight.getFightUserOne,
	// "/updateFightUser":fight.updateFightUser,
	// "/getFightDetailList":fight.getFightDetailList,
	// "/addFightDetail":fight.addFightDetail,
	// "/delFightDetail":fight.delFightDetail,
	// "/getFightDetailOne":fight.getFightDetailOne,
	// "/updateFightDetail":fight.updateFightDetail,
	// "/getFightPropertyList":fight.getFightPropertyList,
	// "/addFightProperty":fight.addFightProperty,
	// "/delFightProperty":fight.delFightProperty,
	// "/getFightPropertyOne":fight.getFightPropertyOne,
	// "/updateFightProperty":fight.updateFightProperty,

	//活动系统
	"/activsystem/test":activsystem.testGetList
};
