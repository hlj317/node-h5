const guess = async function (ctx, next) {
    await ctx.render("activity/guess", {
        title: "猜价格赢好礼",
    });
    return next();
};

const es6 = async function (ctx, next) {
    await ctx.render("activity/es6", {
        title: "es6测试页面",
    });
    return next();
};

const bear = async function (ctx, next) {
    await ctx.render("activity/bear", {
        title: "贝贝熊过关小游戏",
    });
    return next();
};

const phptest = async function (ctx, next) {
    await ctx.render("activity/phptest", {
        title: "实现php增删改查",
    });
    return next();
};

const javatest = async function (ctx, next) {
    await ctx.render("activity/javatest", {
        title: "实现java增删改查",
    });
    return next();
};

const imgtest = async function (ctx, next) {
    await ctx.render("activity/imgtest", {
        title: "图片上传测试页面",
    });
    return next();
};

const langnav = async function (ctx, next) {
    await ctx.render("activity/langnav", {
        title: "国际化导航页",
    });
    return next();
};

const changelang = async function (ctx, next) {
    await ctx.render("activity/changelang", {
        title: "多语言切换",
    });
    return next();
};

module.exports = {
    guess,
    bear,
    phptest,
    imgtest,
    javatest,
    es6,
    langnav,
    changelang
};
