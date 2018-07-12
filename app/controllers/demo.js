let hello = async function (ctx, next) {
    await ctx.render('demo/hello', {
        title: 'world',
    });

    return next();
};

module.exports = {
    hello,
};
