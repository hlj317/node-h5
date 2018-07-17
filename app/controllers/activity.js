const guess = async function (ctx, next) {
    await ctx.render('activity/guess', {
        title: '猜价格赢好礼',
    });
    return next();
};

module.exports = {
    guess
};
