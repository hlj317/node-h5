// const getDoubanList = require("../crawler/trailer-list").getDoubanList;
const request = require("../helpers/request");
// const middleware = require("../helpers/middleware");
const addItemHandler = require("../models/handles/addItemHandler.js");
const getItemHandler = require("../models/handles/getItemHandler.js");
// const getTableHandler = require("../models/handles/getTableHandler.js");
const delItemHandler = require("../models/handles/delItemHandler.js");
const updateItemHandler = require("../models/handles/updateItemHandler.js");
const loginHandler = require("../models/handles/loginHandler.js");
const addAccountHandler = require("../models/handles/addAccountHandler.js");
const movieListHandler = require("../models/handles/getMovieListHandler.js");
const movieItemOneHandler = require("../models/handles/getMovieOneHandler.js");
const sqlHandler = require("../models/handles/sqlHandler.js");

const trailerTask = require("../crawler/child-work.js");

const index = async function (ctx, next) {
    /* 服务端渲染，数据直出 */
    // let result = await getDoubanList();   
    await ctx.render("movie/index", {
        title: "电影网站"
    });
    return next();
};

const login = async function (ctx, next) {
    await ctx.render("movie/login", {
        title: "登录页面"
    });
    return next();
};

const ai = async function (ctx, next) {
    await ctx.render("movie/ai", {
        title: "AI页面"
    });
    return next();
};

const register = async function (ctx, next) {
    await ctx.render("movie/register", {
        title: "注册页面"
    });
    return next();
};

const movieDetail = async function (ctx, next) {
    await ctx.render("movie/detail", {
        title: "电影网站详情"
    });
    return next();
};

const getMovieDetail = async function (ctx, next) {

    // console.log(JSON.stringify(ctx.request));
    // console.log(JSON.stringify(ctx.request.query));
    const doubanId = ctx.request.query.doubanId;
    const apiUrl = `http://api.douban.com/v2/movie/subject/${doubanId}`;
    const result = await request({
        cache: false,
        cacheTime: 500,
        url: apiUrl
    });
    ctx.body = {
        "result": result,
        "statesCode": 200
    };
    return next();
};

const addMovieItem = async function (ctx, next) {
    return await (new addItemHandler()).handler(ctx, next);
};

const updateMovieItem = async function (ctx, next) {
    return await (new updateItemHandler()).handler(ctx, next);
};

const delMovieItem = async function (ctx, next) {
    return await (new delItemHandler()).handler(ctx, next);
};

const getMovieItem = async function (ctx, next) {
    return await (new getItemHandler()).handler(ctx, next);
};

const loginAccount = async function (ctx, next) {
    return await (new loginHandler()).handler(ctx, next);
};

const exerciseSql = async function (ctx, next) {
    return await (new sqlHandler()).handler(ctx, next);
};

const addAccount = async function (ctx, next) {
    return await (new addAccountHandler()).handler(ctx, next);
};

const getMovieList = async function (ctx, next) {
    return await (new movieListHandler()).handler(ctx, next);
};

const getMovieOneItem = async function (ctx, next) {
    return await (new movieItemOneHandler()).handler(ctx, next);
};

const getScore = async function (ctx, next) {
    const apiUrl = "http://127.0.0.1:8001/service/marketingActivityService/queryMarketingInfo";
    const result = await request({
        url: apiUrl,
        method: "POST",
        data: {
            "page": 1,
            "pageSize": 10
        }
    });
    ctx.body = {
        "result": result.data,
        "statesCode": 200,
        "message": "查询成功",
        "success": true
    };
    return next();
};

const addScore = async function (ctx, next) {
    const apiUrl = "http://127.0.0.1:8001/service/marketingActivityService/addMarketingInfo";
    const result = await request({
        url: apiUrl,
        method: "POST",
        data: {
            name: ctx.request.body.params.name,
            score: parseInt(ctx.request.body.params.score)
        }
    });
    ctx.body = {
        "result": result.data,
        "statesCode": 200,
        "message": "添加成功",
        "success": true
    };
    return next();
};

const updateScore = async function (ctx, next) {
    const apiUrl = "http://127.0.0.1:8001/service/marketingActivityService/updateMarketingInfo";
    const result = await request({
        url: apiUrl,
        method: "POST",
        data: {
            id: parseInt(ctx.request.body.params.id),
            name: ctx.request.body.params.name,
            score: parseInt(ctx.request.body.params.score)
        }
    });
    ctx.body = {
        "result": result.data,
        "message": "更新成功",
        "success": true,
        "statesCode": 200
    };
    return next();
};

const trailerAddData = async function (ctx, next) {
    let result = await trailerTask();
    ctx.body = {
        "message": result,
        "xx": "aaa",
        "statesCode": 200
    };
    return next();
};


module.exports = {
    index,
    getMovieDetail,
    addMovieItem,
    getMovieItem,
    delMovieItem,
    updateMovieItem,
    movieDetail,
    login,
    register,
    loginAccount,
    addAccount,
    getMovieList,
    getMovieOneItem,
    ai,
    trailerAddData,
    getScore,
    addScore,
    updateScore,
    exerciseSql
};
