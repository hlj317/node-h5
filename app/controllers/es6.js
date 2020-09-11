let index = async function (ctx, next) {
	await ctx.render("es6/index", {
		title: "hello world",
	});

	return next();
};

module.exports = {
	index
};
