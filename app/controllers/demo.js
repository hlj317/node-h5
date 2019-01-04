let hello = async function (ctx, next) {
	await ctx.render("demo/hello", {
		title: "world",
	});

	return next();
};

let hlj = async function (ctx, next) {
	await ctx.render("demo/hlj", {
		title: "hello world",
	});

	return next();
};

module.exports = {
	hello,
	hlj
};
