const guess = async function (ctx, next) {
	await ctx.render("activity/guess", {
		title: "猜价格赢好礼",
	});
	return next();
};

const bear = async function (ctx, next) {
	await ctx.render("activity/bear", {
		title: "贝贝熊过关小游戏",
	});
	return next();
};

module.exports = {
	guess,
	bear
};
