const index = async function (ctx, next) {
    await ctx.render('cms/index', {
        title: '后台管理系统',
    });
    return next();
};

module.exports = {
    index
};
